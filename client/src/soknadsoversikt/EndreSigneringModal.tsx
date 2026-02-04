import { BodyLong, Button, Checkbox, CheckboxGroup, Heading, Link, Modal } from '@navikt/ds-react'
import { Avstand } from '../components/Avstand'
import { t } from 'i18next'
import { Trans } from 'react-i18next'
import { useState } from 'react'

type EndreSigneringModalProps = {
  isOpen: boolean
  setModalIsOpen(isOpen: boolean): void
}

export const EndreSigneringModal = (props: EndreSigneringModalProps) => {
  const { isOpen, setModalIsOpen } = props
  const [bekreftetSignertFullmakt, setBekreftetSignertFullmakt] = useState(false)
  const [harForsøktÅSendeInn, setHarForsøktÅSendeInn] = useState(false)

  const onClickSendSoknad = () => {
    if (!bekreftetSignertFullmakt) {
      setHarForsøktÅSendeInn(true)
      return
    }
    setModalIsOpen(false)
  }

  const onClickAvbryt = () => {
    setBekreftetSignertFullmakt(false)
    setHarForsøktÅSendeInn(false)
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
              harForsøktÅSendeInn && !bekreftetSignertFullmakt ? t('endreSignering.bekrefteSignertFullmakt.error') : undefined
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
          >
            {t('endreSignering.sendSoknad')}
          </Button>
          <Button variant="secondary" onClick={() => onClickAvbryt()}>
            {t('endreSignering.avbryt')}
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}
