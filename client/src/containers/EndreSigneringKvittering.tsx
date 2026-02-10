import { Alert, BodyLong, Button, Heading, HStack, Link, LinkCard, Loader, VStack } from '@navikt/ds-react'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import useSWR from 'swr'
import './../stylesheet/styles.scss'
import { Avstand } from '../components/Avstand'
import { Trans, useTranslation } from 'react-i18next'
import { BASE_PATH } from '../App'
import environment from '../environment'
import { API_PATH, fetcher, SOKNAD_API_PATH } from '../services/rest-service'

interface FullmaktStatus {
  behovsmeldingId: string
  status: string
}

const EndreSigneringKvittering: React.FC = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const { soknadsid } = useParams()
  const { navnBruker, behovsmeldingId } = location.state || {}
  const [pdfTimeout, setPdfTimeout] = useState(false)
  const [startTime] = useState(Date.now())

  const id = behovsmeldingId || soknadsid

  const { data: statusData } = useSWR<FullmaktStatus>(
    id ? `${API_PATH}/behovsmelding/${id}/brukerbekreftelse-til-fullmakt/status` : null,
    fetcher,
    {
      refreshInterval: (data) => {
        if (data?.status && data.status !== 'FULLMAKT_AVVENTER_PDF') return 0
        return 3000
      },
      revalidateOnFocus: false,
      dedupingInterval: 1000,
    }
  )

  const pdfKlar = statusData?.status !== undefined && statusData.status !== 'FULLMAKT_AVVENTER_PDF'

  useEffect(() => {
    if (pdfKlar) return

    const timeoutId = setTimeout(() => {
      if (!pdfKlar) {
        setPdfTimeout(true)
      }
    }, 30000)

    return () => clearTimeout(timeoutId)
  }, [pdfKlar, startTime])

  const pdfVisning = () => {
    if (pdfTimeout && !pdfKlar) {
      return <Alert variant="warning">{t('endreSignering.kvittering.genererPdfFeil')}</Alert>
    }

    if (!pdfKlar) {
      return (
        <HStack gap="2" align="center">
          <Loader size="small" title={t('endreSignering.kvittering.genererPdf')} />
          <BodyLong>{t('endreSignering.kvittering.genererPdf')}</BodyLong>
        </HStack>
      )
    }

    return (
      <BodyLong spacing>
        <Trans
          i18nKey="endreSignering.kvittering.informasjon.pdf"
          components={{
            lenke: (
              <Link href={`${SOKNAD_API_PATH}/soknad/kvittering/${soknadsid}`} target="_blank">
                {' '}
              </Link>
            ),
          }}
        ></Trans>
      </BodyLong>
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

        <Avstand marginBottom={6}>{pdfVisning()}</Avstand>

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
            <Button variant="secondary">{t('endreSignering.kvittering.gåTilBehovsmelding.knapp')}</Button>
          </a>
        </VStack>
      </Avstand>
    </main>
  )
}

export default EndreSigneringKvittering
