import { Box, Detail, Heading, HStack, Modal } from '@navikt/ds-react';
import { t } from 'i18next';
import { useMemo, useState } from 'react';
import { BASE_PATH } from '../App';
import { Avstand } from '../components/Avstand';
import { formaterDato } from '../Utils';
import type { DokumentInfo, Journalpost } from './Journalpost';

type VisVedtaksbrevProps = {
  journalposter: Journalpost[]
}

export default function VisVedtaksbrev({ journalposter }: VisVedtaksbrevProps) {
  const [isOpen, setIsOpen] = useState(false)

  const href = (journalpostId: string, dokumentInfoId: string) =>
    `${BASE_PATH}/api/bruker/arkiv-dokumenter/${journalpostId}/${dokumentInfoId}/ARKIV`
  const tittel = (vedlegg: DokumentInfo) => vedlegg.tittel || 'Vedlegg'

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

  if (visbareVedtaksbrev.length === 0) {
    return null
  }

  const valgtVedtaksbrev = visbareVedtaksbrev[0]

  return (
    <>
      <div className="customPanel">
        <Heading size="small">{t('soknadsoversikt.soknadVisning.forhandsvisning')}</Heading>
        <Avstand marginBottom={3} />
        <HStack gap={'space-8'}>
          <Box borderRadius="8" padding="space-16" background="default" borderColor="neutral" borderWidth="1" width="100%" onClick={() => setIsOpen(true)} style={{ cursor: 'pointer' }}>
            <Heading size="small">{tittel(valgtVedtaksbrev.vedlegg)}</Heading>
            <Detail>{valgtVedtaksbrev.dato ? `${formaterDato(valgtVedtaksbrev.dato)} | Fra Nav` : ""}</Detail>
          </Box>
          <Modal
            aria-label={tittel(valgtVedtaksbrev.vedlegg)}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            width="60%"
          >
            <Modal.Header>{tittel(valgtVedtaksbrev.vedlegg)}</Modal.Header>
            <Modal.Body>
              <iframe
                title={tittel(valgtVedtaksbrev.vedlegg)}
                src={href(valgtVedtaksbrev.journalpostId, valgtVedtaksbrev.vedlegg.dokumentInfoId)}
                style={{ width: '100%', height: '75vh', border: 0 }}
              />
            </Modal.Body>
          </Modal>
        </HStack>
      </div>
    </>
  )
}
