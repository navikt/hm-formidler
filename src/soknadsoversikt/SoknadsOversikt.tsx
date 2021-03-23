import React from 'react'
import './../stylesheet/styles.scss'
import Banner from '../components/Banner'
import { Normaltekst, Undertittel } from 'nav-frontend-typografi'
import useSWR from 'swr'
import { API_PATH, fetcher } from '../services/rest-service'
import NavFrontendSpinner from 'nav-frontend-spinner'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import IngenSoknader from './IngenSoknader'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { beregnFrist, formaterDato } from '../Utils'
import Etikett, { EtikettBaseProps } from 'nav-frontend-etiketter'

const SoknadsOversikt = () => {
  const { t } = useTranslation()
  const { data, error } = useSWR(`${API_PATH}/soknad/formidler`, fetcher)

  if (error) return <div>Noe gikk feil: {error}</div>
  if (!data)
    return (
      <div className="content centeredElement">
        <NavFrontendSpinner type="L" />
      </div>
    )

  const venterGodkjenning = data
    .filter((soknad: SoknadInfo) => {
      return soknad.status === SoknadStatus.VENTER_GODKJENNING
    })
    .sort(function (a: SoknadInfo, b: SoknadInfo) {
      return new Date(b.datoOpprettet).getTime() - new Date(a.datoOpprettet).getTime()
    })

  const ikkeVenterGodkjenning = data
    .filter((soknad: SoknadInfo) => {
      return soknad.status !== SoknadStatus.VENTER_GODKJENNING
    })
    .sort(function (a: SoknadInfo, b: SoknadInfo) {
      return new Date(b.datoOppdatert).getTime() - new Date(a.datoOppdatert).getTime()
    })

  const alleSoknader = venterGodkjenning.concat(ikkeVenterGodkjenning)

  return (
    <>
      <header>
        <Banner />
      </header>

      <main style={{ paddingTop: '2rem' }}>
        <div className="customPanel liste">
          {alleSoknader.length === 0 ? (
            <IngenSoknader />
          ) : (
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                  width: '100%',
                  paddingBottom: '2rem',
                }}
              >
                <div>
                  <Undertittel>Utfylte digital søknader</Undertittel>
                </div>
                <div style={{ marginLeft: 'auto', paddingRight: '1rem' }}>
                  <Normaltekst>Status vises i 4 uker.</Normaltekst>
                </div>
              </div>
              <table className="tabell">
                <tbody>
                  {alleSoknader.map((soknad: SoknadInfo) => {
                    let etikettType: EtikettBaseProps['type']
                    switch (soknad.status) {
                      case SoknadStatus.SLETTET:
                      case SoknadStatus.UTLØPT:
                        etikettType = 'advarsel'
                        break
                      case SoknadStatus.GODKJENT:
                      case SoknadStatus.GODKJENT_MED_FULLMAKT:
                        etikettType = 'info'
                        break
                      case SoknadStatus.VENTER_GODKJENNING:
                        etikettType = 'fokus'
                    }
                    return (
                      <tr>
                        <td className="fontBold">
                          <Normaltekst>{soknad.navnBruker ? soknad.navnBruker : soknad.fnrBruker}</Normaltekst>
                        </td>
                        <td>
                          <Normaltekst>
                            {soknad.status === SoknadStatus.VENTER_GODKJENNING
                              ? `Frist:  ${beregnFrist(soknad.datoOpprettet)}`
                              : `Dato: ${formaterDato(soknad.datoOppdatert)}`}
                          </Normaltekst>
                        </td>
                        <td>
                          <Etikett type={etikettType} style={{ float: 'right' }}>
                            <Normaltekst>{t(soknad.status)}</Normaltekst>
                          </Etikett>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </>
          )}
        </div>
      </main>
    </>
  )
}

export default SoknadsOversikt
