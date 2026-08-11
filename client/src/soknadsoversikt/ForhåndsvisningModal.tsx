import { Button, Modal } from '@navikt/ds-react'
import { useState } from 'react'
import { BASE_PATH } from '../App'
import type { DokumentInfo } from './Journalpost'

type ForhandsvisningModalProps = {
  journalpostId: string
  vedlegg: DokumentInfo
}

export default function ForhandsvisningModal({ journalpostId, vedlegg }: ForhandsvisningModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const href = `${BASE_PATH}/api/bruker/arkiv-dokumenter/${journalpostId}/${vedlegg.dokumentInfoId}/ARKIV`
  const tittel = vedlegg.tittel || 'Vedlegg'

  const kanViseDokument =
    vedlegg.dokumentvarianter.filter((variant) => variant.variantformat === 'ARKIV' && variant.brukerHarTilgang)
      .length > 0

  return (
    <>
      {kanViseDokument && (
        <>
          <Button variant="secondary" onClick={() => setIsOpen(true)}>
            {`Forhåndsvis ${tittel}`}
          </Button>
          <Modal aria-label={tittel} open={isOpen} onClose={() => setIsOpen(false)} width="60%">
            <Modal.Header>{tittel}</Modal.Header>
            <Modal.Body>
              <iframe title={tittel} src={href} style={{ width: '100%', height: '75vh', border: 0 }} />
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  )
}
