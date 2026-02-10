import { ChevronLeftIcon } from '@navikt/aksel-icons'
import { BodyShort, Box, Button, Heading, HStack, Loader, Tag } from '@navikt/ds-react'
import * as Sentry from '@sentry/browser'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import useSWRImmutable from 'swr/immutable'
import { formaterDato, hentTagVariant } from '../Utils'
import { Avstand } from '../components/Avstand'
import type { Innsenderbehovsmelding } from '../interfaces/Innsenderbehovsmelding'
import { API_PATH, fetcher } from '../services/rest-service'
import Soknad from '../soknad/Soknad'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { DIGIHOT_TAXONOMY, logEvent } from '../utils/analytics'
import './../stylesheet/styles.scss'
import SoknadVisningFeil from './SoknadVisningFeil'
import { EndreSigneringModal } from './EndreSigneringModal'

interface ParamTypes extends Record<string, string> {
  soknadsid: string
}

const SoknadVisning: React.FC = () => {
  const { t } = useTranslation()

  const { soknadsid = '' } = useParams<ParamTypes>()
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
    logEvent(DIGIHOT_TAXONOMY.SØKNAD_ÅPNET)
  }, [])

  const printRef = useRef(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleOpenEndreSigneringModal = () => {
    setModalIsOpen(true)
  }

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: data && t(`soknadvisning.tittel.${data.behovsmeldingType}`, { navnBruker: data.navnBruker }),
    onBeforePrint: async () => logEvent(DIGIHOT_TAXONOMY.KLIKK_SKRIV_UT),
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
      <header>
        <div className="customPanel">
          <Link to="/" style={{ marginBottom: '0.5rem' }}>
            <ChevronLeftIcon title={t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')} />
            {t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')}
          </Link>
        </div>
        <div className="banner">
          <Heading level="1" size="xlarge">
            {t(`soknadvisning.tittel.${behovsmeldingType}`, { navnBruker })}
          </Heading>
        </div>
        <Avstand marginBottom={6} />
        <div className="customPanel">
          <Box.New>
            <Tag variant={hentTagVariant(status, valgteÅrsaker)}>{t(status as string)}</Tag>
            <Avstand marginTop={3} marginBottom={3}>
              {status === SoknadStatus.VENTER_GODKJENNING && (
                <BodyShort>{t('soknadsoversikt.soknadVisning.sakenErIkkeSendtInn')}</BodyShort>
              )}
            </Avstand>
            <BodyShort>
              {t('dato.innsendt')} {formaterDato(datoOpprettet)}
              <span style={{ whiteSpace: 'pre', color: 'var(--ax-border-neutral-subtleA)' }}> | </span>
              {t('dato.oppdatert')} {formaterDato(datoOppdatert)}
            </BodyShort>
          </Box.New>
        </div>
        <HStack className="customPanel" gap={'4'}>
          {status === SoknadStatus.VENTER_GODKJENNING && (
            <Button variant="secondary" onClick={handleOpenEndreSigneringModal} style={{ whiteSpace: 'nowrap' }}>
              {t('endreSignering.tittel')}
            </Button>
          )}
          <Button variant="secondary" onClick={handlePrint} style={{ whiteSpace: 'nowrap' }}>
            {t('soknadsoversikt.soknadVisningFeil.skrivUt')}
          </Button>
        </HStack>
        {status === SoknadStatus.VENTER_GODKJENNING && (
          <EndreSigneringModal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} navnBruker={navnBruker} />
        )}
      </header>

      <main>
        <div className="customPanel">
          <Soknad ref={printRef} status={status} valgteÅrsaker={valgteÅrsaker} behovsmelding={behovsmelding} />
        </div>
      </main>
    </>
  )
}

export default SoknadVisning
