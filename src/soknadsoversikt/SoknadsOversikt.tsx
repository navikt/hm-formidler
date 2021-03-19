import React from 'react'
import './../stylesheet/styles.scss'
import Banner from '../components/Banner'
import { Normaltekst } from 'nav-frontend-typografi'
import useSWR from 'swr'
import { API_PATH, fetcher } from '../services/rest-service'
import NavFrontendSpinner from 'nav-frontend-spinner'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { Soknadsside } from '../interfaces/CommonTypes'
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


  const venterGodkjenning = data.filter( (soknad:SoknadInfo) => {
    return soknad.status === SoknadStatus.VENTER_GODKJENNING
  }).sort(function(a:SoknadInfo,b:SoknadInfo){
    return new Date(b.datoOpprettet).getTime() - new Date(a.datoOpprettet).getTime();
  });

  const ikkeVenterGodkjenning = data.filter( (soknad:SoknadInfo) => {
    return soknad.status !== SoknadStatus.VENTER_GODKJENNING
  }).sort(function(a:SoknadInfo,b:SoknadInfo){
    return new Date(b.datoOppdatert).getTime() - new Date(a.datoOppdatert).getTime();
  });

  const alleSoknader = venterGodkjenning.concat(ikkeVenterGodkjenning)

  return (
    <>
      <header>
        <Banner soknadsside={Soknadsside.Soknadsoversikt} />
      </header>

      <main style={{ paddingTop: '4rem' }}>
        <div className="customPanel" >
            {alleSoknader.length === 0 ? <IngenSoknader/> :
            (
              <table className="tabell">
                <tbody>
                {alleSoknader.map(

                  (soknad:SoknadInfo) => {
                    let etikettType: EtikettBaseProps['type'];
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
                    return <tr>
                      <td>{soknad.navnBruker ? soknad.navnBruker : soknad.fnrBruker}</td>
                      <td>{soknad.status === SoknadStatus.VENTER_GODKJENNING ? `Frist:  ${beregnFrist(soknad.datoOpprettet)}`: `Dato: ${formaterDato(soknad.datoOppdatert)}`}</td>
                      <td><Etikett type={etikettType}>
                        <Normaltekst>{t(soknad.status)}</Normaltekst>
                      </Etikett></td>
                    </tr>
                  }
                )}
                </tbody>
              </table>
            )}

        </div>
      </main>
    </>
  )
}


export default SoknadsOversikt
