import { ChevronLeftIcon } from '@navikt/aksel-icons'
import { BodyShort, Box, Button, Heading, HStack, Loader, VStack } from '@navikt/ds-react'
import * as Sentry from '@sentry/browser'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import { formaterDato } from '../Utils'
import type { Innsenderbehovsmelding } from '../interfaces/Innsenderbehovsmelding'
import { API_PATH, fetcher } from '../services/rest-service'
import Soknad from '../soknad/Soknad'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { DIGIHOT_TAXONOMY, logEvent } from '../utils/analytics'
import './../stylesheet/styles.scss'
import { EndreSigneringModal } from './EndreSigneringModal'
import type { Journalpost } from './Journalpost'
import type { SøknadForBruker } from './SoknadForBruker'
import SoknadVisningFeil from './SoknadVisningFeil'
import StatusOgBrevBoks from './StatusOgBrevBoks'

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
    soknadGjelder: string
  }>(`${API_PATH}/soknad/innsender/${soknadsid}`, fetcher)

  const { data: soknadData } = useSWR<SøknadForBruker>(`${API_PATH}/soknad/bruker/${soknadsid}`, fetcher, {
    revalidateOnFocus: false,
  })

  const dokumenterKey = soknadData?.fagsakId
    ? `/hjelpemidler/dinehjelpemidler/api/bruker/dokumenter/${soknadData.fagsakId}`
    : null
  let { data: journalposter } = useSWR<Journalpost[]>(dokumenterKey, fetcher, {
    revalidateOnFocus: false,
  })
  if (!journalposter) journalposter = []

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

  const innsendtTekst =
    status === SoknadStatus.VENTER_GODKJENNING ? t('dato.sendtTilBrukerbekreftelse') : t('dato.innsendt')

  const tidspunkterTekst = (
    <BodyShort>
      {innsendtTekst} {formaterDato(datoOpprettet)}
      <span style={{ whiteSpace: 'pre', color: 'var(--ax-border-neutral-subtleA)' }}> | </span>
      {t('dato.oppdatert')} {formaterDato(datoOppdatert)}
    </BodyShort>
  )
  return (
    <>
      <header>
        <div style={{ margin: '0 auto', maxWidth: '600px' }}>
          <VStack gap="space-8">
            <Link to="/">
              <ChevronLeftIcon title={t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')} />
              {t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')}
            </Link>
            <div className="banner">
              <Heading level="1" size="xlarge">
                {t(`soknadvisning.tittel.${behovsmeldingType}`, { navnBruker })}
              </Heading>
            </div>
            <Box>
              <HStack justify="space-between" align="center">
                <Heading level="2" size="small">
                  {data.soknadGjelder}
                </Heading>
                <Button variant="secondary" onClick={handlePrint} style={{ whiteSpace: 'nowrap' }}>
                  {t('soknadsoversikt.soknadVisningFeil.skrivUt')}
                </Button>
              </HStack>
            </Box>
            {window.appSettings.NAIS_CLUSTER_NAME === 'dev-gcp' && (
              <StatusOgBrevBoks
                journalposter={journalposter}
                tidspunkterTekst={tidspunkterTekst}
                status={status}
                valgteÅrsaker={valgteÅrsaker}
                handleOpenEndreSigneringModal={handleOpenEndreSigneringModal}
              />
            )}
          </VStack>
          {status === SoknadStatus.VENTER_GODKJENNING && (
            <EndreSigneringModal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} navnBruker={navnBruker} />
          )}
        </div>
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
