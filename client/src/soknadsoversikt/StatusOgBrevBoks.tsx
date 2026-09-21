import { FilePdfIcon, PencilWritingIcon } from '@navikt/aksel-icons'
import { BodyShort, Box, Button, InlineMessage, Link, Tag, VStack } from '@navikt/ds-react'
import { t } from 'i18next'
import { useEffect, useMemo } from 'react'
import { useRoller } from '../statemanagement/ApplicationContext'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { hentTagVariant } from '../Utils'

type StatusOgBrevBoksProps = {
  brevpdf: Blob | undefined
  tidspunkterTekst?: React.ReactNode
  status?: SoknadStatus | undefined
  valgteÅrsaker?: string[] | undefined
  handleOpenEndreSigneringModal: () => void
}

export default function StatusOgBrevBoks({
  brevpdf,
  tidspunkterTekst,
  status,
  valgteÅrsaker,
  handleOpenEndreSigneringModal,
}: StatusOgBrevBoksProps) {
  const { erFormidler } = useRoller()

  const brevpdfUrl = useMemo(() => (brevpdf ? URL.createObjectURL(brevpdf) : undefined), [brevpdf])

  useEffect(() => {
    return () => {
      if (brevpdfUrl) URL.revokeObjectURL(brevpdfUrl)
    }
  }, [brevpdfUrl])

  return (
    <Box
      borderRadius="8"
      padding="space-20"
      background="default"
      borderColor="neutral"
      borderWidth="1"
      width="100%"
      marginBlock="space-0 space-8"
    >
      <VStack gap={'space-12'} align="start">
        <Tag variant="moderate" data-color={hentTagVariant(status, valgteÅrsaker)}>
          {t(status as string)}
        </Tag>
        {status === SoknadStatus.VENTER_GODKJENNING && (
          <VStack gap={'space-8'} align="start">
            <BodyShort>{t('soknadsoversikt.soknadVisning.sakenErIkkeSendtInn')}</BodyShort>
            <Button
              variant="tertiary"
              onClick={handleOpenEndreSigneringModal}
              icon={<PencilWritingIcon title="a11y-title" />}
              style={{ whiteSpace: 'nowrap' }}
            >
              {t('endreSignering.tittel')}
            </Button>
          </VStack>
        )}
        {tidspunkterTekst}
        {brevpdf && erFormidler && window.appSettings.NAIS_CLUSTER_NAME === 'dev-gcp' && (
          <>
            <Link href={brevpdfUrl} target="_blank">
              <FilePdfIcon fontSize="1.5rem" />
              {t('soknadsoversikt.soknadVisning.kopiAvVedtaksbrev')}
            </Link>
            <InlineMessage status="info">{t('soknadsoversikt.soknadVisning.mottattKopiAvVedtaksbrev')}</InlineMessage>
          </>
        )}
      </VStack>
    </Box>
  )
}
