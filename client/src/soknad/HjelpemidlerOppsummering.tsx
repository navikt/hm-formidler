import React from 'react'
import { BodyShort, HStack, FormSummary } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import Hjelpemiddelinfo from '../components/Hjelpemiddel'
import { Hjelpemiddel, Tilbehør } from '../interfaces/Innsenderbehovsmelding'
import TilbehørVisning from '../components/TilbehørVisning'
import FixedWidthLabel from '../components/FixedWidthLabel'
import { BehovsmeldingType } from '../interfaces/CommonTypes'

type HjelpemidlerProps = {
  hjelpemiddelTotalAntall: number
  hjelpemidler: Hjelpemiddel[]
  tilbehør: Tilbehør[]
  behovsmeldingType: BehovsmeldingType
}

const HjelpemidlerOppsummering: React.FC<HjelpemidlerProps> = (props: HjelpemidlerProps) => {
  const { t } = useTranslation()
  const { hjelpemiddelTotalAntall, hjelpemidler, tilbehør, behovsmeldingType } = props

  return (
    <>
      <FormSummary>
        <FormSummary.Header><FormSummary.Heading level="2">{t('felles.hjelpemidler')}</FormSummary.Heading></FormSummary.Header>
        <FormSummary.Answers>
          {hjelpemidler.map((hm: Hjelpemiddel, hmsIdx) => (
            <Hjelpemiddelinfo hm={hm} behovsmeldingType={behovsmeldingType} />
          ))}
          {tilbehør.map((tilbehør: Tilbehør, index) => (
            <TilbehørVisning tilbehør={tilbehør} />
          ))}
        </FormSummary.Answers>
        <HStack wrap={false} gap="2" marginInline="5 5" marginBlock="0 4">
          <BodyShort>
            {t('felles.tilsvarendeProdukt')}
          </BodyShort>
          <FixedWidthLabel width={6}>
            {t('felles.totalt') +
              ' ' +
              t('felles.antallHjelpemidler.total', {
                antall: hjelpemiddelTotalAntall,
              })}
          </FixedWidthLabel>
        </HStack>
      </FormSummary>
    </>
  )
}

export default HjelpemidlerOppsummering
