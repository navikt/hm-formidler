import { Alert, BodyLong, Button, Heading, Link, LinkCard, Loader, VStack } from '@navikt/ds-react'
import React, { useEffect, useState, useCallback } from 'react'
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom'
import './../stylesheet/styles.scss'
import { Avstand } from '../components/Avstand'
import { Trans, useTranslation } from 'react-i18next'
import { BASE_PATH } from '../App'
import environment from '../environment'
import { API_PATH } from '../services/rest-service'

interface FullmaktStatus {
  behovsmeldingId: string
  status: 'PENDING' | 'FULLMAKT'
  pdfKlar: boolean
}

const EndreSigneringKvittering: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const { soknadsid } = useParams()
  const { navnBruker, behovsmeldingId } = location.state || {}
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const checkStatus = useCallback(async (): Promise<boolean> => {
    const id = behovsmeldingId || soknadsid
    if (!id) return false

    try {
      const response = await fetch(`${API_PATH}/brukerbekreftelse-til-fullmakt/${id}/status`, {
        credentials: 'same-origin',
      })

      if (!response.ok) {
        throw new Error('Kunne ikke hente status')
      }

      const data: FullmaktStatus = await response.json()
      return data.pdfKlar
    } catch (err) {
      console.error('Feil ved statussjekk:', err)
      return false
    }
  }, [behovsmeldingId, soknadsid])

  useEffect(() => {
    let isMounted = true
    let retryCount = 0
    const maxRetries = 10
    const retryInterval = 1000

    const pollStatus = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000))

      while (isMounted && retryCount < maxRetries) {
        const isReady = await checkStatus()
        if (isReady) {
          if (isMounted) {
            setIsLoading(false)
          }
          return
        }
        retryCount++
        await new Promise((resolve) => setTimeout(resolve, retryInterval))
      }

      if (isMounted) {
        setError('timeout')
        setIsLoading(false)
      }
    }

    pollStatus()

    return () => {
      isMounted = false
    }
  }, [checkStatus])

  if (isLoading) {
    return (
      <main className="customPanel">
        <Heading size="large" level="1" className="titleCenter">
          {t('endreSignering.kvittering.tittel')}
        </Heading>
        <Avstand marginTop={6}>
          <VStack gap="4" align="center">
            <Loader size="xlarge" title={t('endreSignering.kvittering.genererPdf')} />
            <BodyLong>{t('endreSignering.kvittering.genererPdf')}</BodyLong>
          </VStack>
        </Avstand>
      </main>
    )
  }

  if (error) {
    return (
      <main className="customPanel">
        <Heading size="large" level="1" className="titleCenter">
          {t('endreSignering.kvittering.tittel')}
        </Heading>
        <Alert variant="warning">{t('endreSignering.kvittering.genererPdfFeil')}</Alert>
        <Avstand marginTop={4}>
          <VStack gap="6" align="center">
            <LinkCard>
              <LinkCard.Title>
                <LinkCard.Anchor href={`${BASE_PATH}/`}>
                  {t('endreSignering.kvittering.dineSaker.lenke')}
                </LinkCard.Anchor>
              </LinkCard.Title>
            </LinkCard>
          </VStack>
        </Avstand>
      </main>
    )
  }

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
        <VStack gap="6" align="center">
          <LinkCard>
            <LinkCard.Title>
              <LinkCard.Anchor href={`${BASE_PATH}/`}>{t('endreSignering.kvittering.dineSaker.lenke')}</LinkCard.Anchor>
            </LinkCard.Title>
          </LinkCard>

          <a href={environment.SOKNAD_URL}>
            <Button variant="secondary">{t('endreSignering.kvittering.startNySak.knapp')}</Button>
          </a>
        </VStack>
      </Avstand>
    </main>
  )
}

export default EndreSigneringKvittering
