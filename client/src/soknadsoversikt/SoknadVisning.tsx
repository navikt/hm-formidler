import React, { useRef } from 'react'
import './../stylesheet/styles.scss'
import useSWRImmutable from 'swr/immutable'
import { API_PATH, fetcher } from '../services/rest-service'
import { Button, Detail, Loader } from '@navikt/ds-react'
import { BASE_PATH } from '../App'
import { useParams, Link } from 'react-router-dom'
import Soknad from '../soknad/Soknad'
import { Heading } from '@navikt/ds-react'

import { useTranslation } from 'react-i18next'
import SoknadVisningFeil from './SoknadVisningFeil'
import { digihot_customevents, logCustomEvent, logKlikkPåSkrivUt } from '../utils/amplitude'
import { useEffect } from 'react'
import * as Sentry from '@sentry/browser'
import { Soknadsdata } from '../interfaces/SoknadInfo'
import { Back } from '@navikt/ds-icons'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { useReactToPrint } from 'react-to-print'
import { formaterDato } from '../Utils'

interface ParamTypes {
  soknadsid: string
}

const SoknadVisning: React.FC = () => {
  const { t } = useTranslation()

  const { soknadsid } = useParams<ParamTypes>()
  const { data, error } = useSWRImmutable<{
    søknadsdata: Soknadsdata | undefined
    navnBruker: string | undefined
    behovsmeldingType: string | undefined
    status: SoknadStatus | undefined
    valgteÅrsaker?: String[] | undefined
    datoOpprettet: string
    datoOppdatert: string
  }>(`${API_PATH}/soknad/innsender/${soknadsid}`, fetcher)

  useEffect(() => {
    logCustomEvent(digihot_customevents.SØKNAD_ÅPNET)
  }, [])

  const printRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle:
      data && (data.behovsmeldingType === 'BESTILLING' ? `Bestilling` : `Søknad` + ` for ${data.navnBruker}`),
    onBeforePrint: () => logKlikkPåSkrivUt(soknadsid),
  })

  if (error) {
    Sentry.captureException(new Error(error))
    return <SoknadVisningFeil soknadsid={soknadsid} />
  }
  if (!data)
    return (
      <div className="content centeredElement">
        <Loader size="large" />
      </div>
    )

  const { søknadsdata, navnBruker, behovsmeldingType, status, valgteÅrsaker, datoOpprettet, datoOppdatert } = data

  if (!søknadsdata) {
    Sentry.captureMessage(`Vising av søknad ${soknadsid} feilet. Responsen inneholdt ikke søknadsdata.`)
    return <SoknadVisningFeil soknadsid={soknadsid} />
  }

  return (
    <>
      <header>
        <div className="customPanel">
          <Link to={BASE_PATH} style={{ marginBottom: '0.5rem' }}>
            <Back title={t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')} />
            {t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')}
          </Link>
        </div>
        <div className="banner" style={{ display: 'flex' }}>
          <Heading level="1" size="xlarge">
            {t('soknadvisning.tittel' + (behovsmeldingType === 'BESTILLING' ? '.bestilling' : ''), { navnBruker })}
          </Heading>
          <Button variant="secondary" onClick={handlePrint}>
            {t('soknadsoversikt.soknadVisningFeil.skrivUt')}
          </Button>
        </div>
        <div className="customPanel">
          <Detail>Innsendt: {formaterDato(datoOpprettet)}</Detail>
          <Detail>Sist oppdatert: {formaterDato(datoOppdatert)}</Detail>
        </div>
      </header>

      <main>
        <div className="customPanel">
          <Soknad
            ref={printRef}
            soknad={søknadsdata}
            behovsmeldingType={behovsmeldingType}
            status={status}
            valgteÅrsaker={valgteÅrsaker}
          />
        </div>
      </main>
    </>
  )
}

export default SoknadVisning
