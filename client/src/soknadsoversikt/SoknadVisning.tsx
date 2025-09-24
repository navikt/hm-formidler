import React, { useRef } from 'react'
import './../stylesheet/styles.scss'
import useSWRImmutable from 'swr/immutable'
import { API_PATH, fetcher } from '../services/rest-service'
import { BodyShort, Box, Button, Detail, Loader, Tag } from '@navikt/ds-react'
import { BASE_PATH } from '../App'
import { useParams, Link } from 'react-router-dom'
import Soknad from '../soknad/Soknad'
import { Heading } from '@navikt/ds-react'

import { useTranslation } from 'react-i18next'
import SoknadVisningFeil from './SoknadVisningFeil'
import { digihot_customevents, logCustomEvent, logKlikkPåSkrivUt } from '../utils/amplitude'
import { useEffect } from 'react'
import * as Sentry from '@sentry/browser'
import { ChevronLeftIcon } from '@navikt/aksel-icons'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { useReactToPrint } from 'react-to-print'
import { formaterDato, hentTagVariant } from '../Utils'
import { Avstand } from '../components/Avstand'
import { Innsenderbehovsmelding } from '../interfaces/Innsenderbehovsmelding'

interface ParamTypes {
  soknadsid: string
}

const SoknadVisning: React.FC = () => {
  const { t } = useTranslation()

  const { soknadsid } = useParams<ParamTypes>()
  const { data, error } = useSWRImmutable<{
    navnBruker: string | undefined
    behovsmeldingType: string | undefined
    status: SoknadStatus | undefined
    valgteÅrsaker?: string[] | undefined
    datoOpprettet: string
    datoOppdatert: string
    behovsmelding: Innsenderbehovsmelding
  }>(`${API_PATH}/soknad/innsender/${soknadsid}`, fetcher)

  useEffect(() => {
    logCustomEvent(digihot_customevents.SØKNAD_ÅPNET)
  }, [])

  const printRef = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: data && t(`soknadvisning.tittel.${data.behovsmeldingType}`, { navnBruker: data.navnBruker }),
    onBeforePrint: () => logKlikkPåSkrivUt(soknadsid),
  })

  if (error) {
    Sentry.captureException(new Error(error))
    console.log('Visning feilet med error:', error)
    return <SoknadVisningFeil soknadsid={soknadsid} />
  }
  if (!data)
    return (
      <div className="content centeredElement">
        <Loader size="large" />
      </div>
    )

  const { navnBruker, behovsmeldingType, status, valgteÅrsaker, datoOpprettet, datoOppdatert, behovsmelding } = data

  if (!behovsmelding) {
    Sentry.captureMessage(`Vising av søknad ${soknadsid} feilet. Responsen inneholdt ikke søknadsdata.`)
    console.log('Visning feilet. Mangler behovsmelding. data:', data)
    return <SoknadVisningFeil soknadsid={soknadsid} />
  }

  return (
    <>
      <div style={{ background: 'var(--a-surface-subtle)' }}>
        <header>
          <div className="customPanel">
            <Link to={BASE_PATH} style={{ marginBottom: '0.5rem' }}>
              <ChevronLeftIcon title={t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')} />
              {t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')}
            </Link>
          </div>
          <div className="banner" style={{ display: 'flex' }}>
            <Heading level="1" size="xlarge">
              {t(`soknadvisning.tittel.${behovsmeldingType}`, { navnBruker })}
            </Heading>
            <Button variant="secondary" onClick={handlePrint} style={{ whiteSpace: 'nowrap' }}>
              {t('soknadsoversikt.soknadVisningFeil.skrivUt')}
            </Button>
          </div>
          <Avstand marginBottom={6} />
          <div className="customPanel">
            <Box.New background="default" padding="4" borderRadius="large">
              <Tag variant={hentTagVariant(status, valgteÅrsaker)}>{t(status as string)}</Tag>
              <Avstand marginBottom={3} />
              <BodyShort>
                {t('dato.innsendt')} {formaterDato(datoOpprettet)}
                <span style={{ whiteSpace: 'pre', color: 'var(--ax-border-neutral-subtleA)' }}> | </span>
                {t('dato.oppdatert')} {formaterDato(datoOppdatert)}
              </BodyShort>
            </Box.New>
          </div>
        </header>

        <main>
          <div className="customPanel">
            <Soknad ref={printRef} status={status} valgteÅrsaker={valgteÅrsaker} behovsmelding={behovsmelding} />
          </div>
        </main>
      </div>
    </>
  )
}

export default SoknadVisning
