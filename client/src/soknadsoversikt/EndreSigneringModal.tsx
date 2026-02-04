import { Alert, BodyLong, Button, Checkbox, CheckboxGroup, Heading, Link, Modal } from '@navikt/ds-react'
import { Avstand } from '../components/Avstand'
import { t } from 'i18next'
import { Trans } from 'react-i18next'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_PATH } from '../services/rest-service'

type EndreSigneringModalProps = {
  isOpen: boolean
  setModalIsOpen(isOpen: boolean): void
  navnBruker: string | undefined
}

export const EndreSigneringModal = (props: EndreSigneringModalProps) => {
  const { isOpen, setModalIsOpen, navnBruker } = props
  const [bekreftetSignertFullmakt, setBekreftetSignertFullmakt] = useState(false)
  const [harForsøktÅSendeInn, setHarForsøktÅSendeInn] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const { soknadsid } = useParams()

  const onClickSendSoknad = async () => {
    if (!bekreftetSignertFullmakt) {
      setHarForsøktÅSendeInn(true)
      return
    }

    if (!soknadsid) return

    setIsSending(true)
    setError(null)
    try {
      const response = await fetch(`${API_PATH}/brukerbekreftelse-til-fullmakt`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        body: JSON.stringify({ behovsmeldingId: soknadsid }),
      })

      if (!response.ok) {
        throw new Error('Kunne ikke starte endring til fullmakt')
      }

      setModalIsOpen(false)
      navigate(`/soknad/${soknadsid}/kvittering`, { state: { navnBruker, behovsmeldingId: soknadsid } })
    } catch (error) {
      console.error('Feil ved endring til fullmakt:', error)
      setError(t('endreSignering.feil.generell'))
    } finally {
      setIsSending(false)
    }
  }

  const onClickAvbryt = () => {
    setBekreftetSignertFullmakt(false)
    setHarForsøktÅSendeInn(false)
    setError(null)
    setModalIsOpen(false)
  }

  return (
    <Modal
      aria-label={t('endreSignering.tittel')}
      open={isOpen}
      onClose={() => setModalIsOpen(false)}
      closeOnBackdropClick
    >
      <Modal.Header closeButton={false}>
        <Heading level="1" size="medium" spacing>
          {t('endreSignering.tittel')}
        </Heading>
      </Modal.Header>
      <Modal.Body>
        {error && (
          <Avstand marginBottom={4}>
            <Alert variant="error">{error}</Alert>
          </Avstand>
        )}
        <BodyLong spacing>{t('endreSignering.informasjon')}</BodyLong>
        <BodyLong>
          <Trans
            i18nKey="endreSignering.informasjon.fullmaktsskjema"
            components={{
              lenke: (
                <Link target="_blank" href="https://www.nav.no/om-hjelpemidler">
                  {' '}
                </Link>
              ),
            }}
          />
        </BodyLong>

        <Avstand marginTop={4} marginBottom={4}>
          <CheckboxGroup
            legend={''}
            error={
              harForsøktÅSendeInn && !bekreftetSignertFullmakt
                ? t('endreSignering.bekrefteSignertFullmakt.error')
                : undefined
            }
          >
            <Checkbox
              checked={bekreftetSignertFullmakt}
              onChange={(e) => setBekreftetSignertFullmakt(e.target.checked)}
            >
              {t('endreSignering.bekrefteSignertFullmakt')}
            </Checkbox>
          </CheckboxGroup>
        </Avstand>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              onClickSendSoknad()
            }}
            loading={isSending}
            disabled={isSending}
          >
            {t('endreSignering.sendSoknad')}
          </Button>
          <Button variant="secondary" onClick={() => onClickAvbryt()} disabled={isSending}>
            {t('endreSignering.avbryt')}
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}
