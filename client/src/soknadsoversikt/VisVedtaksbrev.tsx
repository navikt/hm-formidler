import { FilePdfIcon } from '@navikt/aksel-icons'
import { Box, HStack, InlineMessage, Link, Tag } from '@navikt/ds-react'
import { t } from 'i18next'
import { useMemo } from 'react'
import { BASE_PATH } from '../App'
import type { SoknadStatus } from '../statemanagement/SoknadStatus'
import { hentTagVariant } from '../Utils'
import type { DokumentInfo, Journalpost } from './Journalpost'
import { useRoller } from '../statemanagement/ApplicationContext'

type VisVedtaksbrevProps = {
  journalposter: Journalpost[]
  tidspunkterTekst?: React.ReactNode
  status?: SoknadStatus | undefined
  valgteÅrsaker?: string[] | undefined
}

export default function VisVedtaksbrev({
  journalposter,
  tidspunkterTekst,
  status,
  valgteÅrsaker,
}: VisVedtaksbrevProps) {
  const { erFormidler } = useRoller()
  const href = (journalpostId: string, dokumentInfoId: string) =>
    `${BASE_PATH}/api/bruker/arkiv-dokumenter/${journalpostId}/${dokumentInfoId}/ARKIV`

  const kanViseDokument = (vedlegg: DokumentInfo) =>
    vedlegg.dokumentvarianter.some((variant) => variant.variantformat === 'ARKIV' && variant.brukerHarTilgang)

  const vedtaksbrevDokumenter = useMemo(
    () =>
      journalposter.flatMap((journalpost) =>
        journalpost.dokumenter
          .filter((dokument) => dokument.brevkode === 'vedtaksbrev_hotsak_breveditor')
          .map((vedlegg) => ({ journalpostId: journalpost.journalpostId, dato: journalpost.dato, vedlegg }))
      ),
    [journalposter]
  )

  const visbareVedtaksbrev = useMemo(
    () => vedtaksbrevDokumenter.filter(({ vedlegg }) => kanViseDokument(vedlegg)),
    [vedtaksbrevDokumenter]
  )

  const valgtVedtaksbrev = visbareVedtaksbrev[0]

  return (
    <>
      <div className="customPanel">
        <HStack gap={'space-8'}>
          <Box
            borderRadius="8"
            padding="space-20"
            background="default"
            borderColor="neutral"
            borderWidth="1"
            width="100%"
            style={{ cursor: 'pointer' }}
          >
            <HStack gap={'space-12'}>
              <Tag variant="moderate" data-color={hentTagVariant(status, valgteÅrsaker)}>
                {t(status as string)}
              </Tag>
              {tidspunkterTekst}
              {valgtVedtaksbrev && erFormidler && (
                <>
                  <Link
                    href={href(valgtVedtaksbrev.journalpostId, valgtVedtaksbrev.vedlegg.dokumentInfoId)}
                    target="_blank"
                  >
                    <FilePdfIcon title="a11y-title" fontSize="1.5rem" />
                    Kopi av vedtaksbrev (PDF åpner i ny fane)
                  </Link>
                  <InlineMessage status="info">
                    Du har mottat en kopi av vedtaksbrevet. Vedtaksbrevet er også sendt til personen du har søkt på
                    vegne av.
                  </InlineMessage>
                </>
              )}
            </HStack>
          </Box>
        </HStack>
      </div>
    </>
  )
}
