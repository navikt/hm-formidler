import { Alert, BodyLong, Button, Heading, Link, LinkCard, VStack } from '@navikt/ds-react'
import React from 'react'
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom'
import './../stylesheet/styles.scss'
import { Avstand } from '../components/Avstand'
import { Trans, useTranslation } from 'react-i18next'
import { BASE_PATH } from '../App'
import environment from '../environment'

const EndreSigneringKvittering: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const { soknadsid } = useParams()
  const { navnBruker } = location.state || {}

  return (
    <main className="customPanel">
      <Heading size="large" level="1" className="titleCenter">
        {t('endreSignering.kvittering.tittel')}
      </Heading>
      <Alert variant="success">{t('endreSignering.kvittering.mottatt', { navnBruker })}</Alert>

      <Avstand marginTop={6}>
        <BodyLong spacing>{t('endreSignering.kvittering.informasjon.saksbehandlingstid')}</BodyLong>

        {/* TODO: Åpne PDF */}
        <BodyLong spacing>
          <Trans
            i18nKey="endreSignering.kvittering.informasjon.pdf"
            components={{
              lenke: (
                <Link target="_blank" as={RouterLink} to={`/soknad/${soknadsid}`}>
                  {' '}
                </Link>
              ),
            }}
          ></Trans>
        </BodyLong>

        <BodyLong>{t('endreSignering.kvittering.informasjon.statusSøknader')}</BodyLong>
      </Avstand>
      <Avstand marginTop={4}>
        <VStack gap={'6'} align="center">
          <LinkCard>
            <LinkCard.Title>
              <LinkCard.Anchor href={`${BASE_PATH}/`}>{t('endreSignering.kvittering.dineSaker.lenke')}</LinkCard.Anchor>
            </LinkCard.Title>
          </LinkCard>

          <a href={environment.SOKNAD_URL}>
            <Button variant="secondary">Start ny sak</Button>
          </a>
        </VStack>
      </Avstand>
    </main>
  )
}

export default EndreSigneringKvittering
