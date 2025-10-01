import React from 'react'
import { Heading, VStack } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { AnnenOppfølgingsansvarlig, Hjelpemiddelformidler } from '../interfaces/Leveringinfo'
import { formaterPersonnavn, formaterVeiadresse } from '../interfaces/CommonTypes'
import { formaterTlf } from '../Utils'
import InfoRow from '../components/InfoRow'

type FormidlerProps = {
  hjelpemiddelformidler: Hjelpemiddelformidler
  annnenOppfølgingsansvarlig: AnnenOppfølgingsansvarlig | undefined
}

const OppfoelgingOgOpplaeringOppsummering: React.FC<FormidlerProps> = (props: FormidlerProps) => {
  const { t } = useTranslation()
  const { hjelpemiddelformidler: formidler, annnenOppfølgingsansvarlig: oppfolgingsansvarlig } = props

  return (
    <VStack gap="6" style={{ marginBottom: '2rem' }}>
      <Heading size="medium" level="2">
        {t('oppsummering.leveringOgOpplaring')}
      </Heading>
      <VStack gap="6">
        <Heading size="small" level="3">
          {t('felles.hjelpemiddelFormidler')}
        </Heading>
        <VStack gap="2">
          <InfoRow label={t('oppsummering.navn')} body={formaterPersonnavn(formidler.navn)} />
          <InfoRow label={t('felles.arbeidssted')} body={formidler.arbeidssted} />
          <InfoRow label={t('felles.stilling')} body={formidler.stilling} />
          <InfoRow label={t('felles.adresse')} body={formaterVeiadresse(formidler.adresse)} />
          <InfoRow label={t('felles.tlf')} body={formaterTlf(formidler.telefon)} />
          <InfoRow label={t('felles.treffesEnklest')} body={formidler.treffesEnklest} />
          <InfoRow label={t('felles.epost')} body={formidler.epost} />
        </VStack>
      </VStack>
      <VStack gap="6">
        <Heading size="small" level="3">
          {t('oppsummering.ansvarlig')}
        </Heading>
        <VStack gap="2">
          {!oppfolgingsansvarlig ? (
            <InfoRow
              label={t('oppsummering.navn')}
              body={`${formaterPersonnavn(formidler.navn)} ${t('oppsummering.hjelpemiddelformidler')}`}
            />
          ) : (
            <>
              <InfoRow label={t('oppsummering.navn')} body={formaterPersonnavn(oppfolgingsansvarlig.navn)} />
              <InfoRow label={t('felles.arbeidssted')} body={oppfolgingsansvarlig.arbeidssted} />
              <InfoRow label={t('felles.stilling')} body={oppfolgingsansvarlig.stilling} />
              <InfoRow label={t('felles.tlf')} body={formaterTlf(oppfolgingsansvarlig.telefon)} />
              <InfoRow label={t('oppsummering.ansvar')} body={oppfolgingsansvarlig.ansvarFor} />
            </>
          )}
        </VStack>
      </VStack>
    </VStack>
  )
}

export default OppfoelgingOgOpplaeringOppsummering
