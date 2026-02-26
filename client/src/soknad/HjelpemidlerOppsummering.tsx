import React from 'react'
import { BodyShort, HStack, FormSummary } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import Hjelpemiddelinfo from '../components/Hjelpemiddel'
import { type Hjelpemiddel, type Tilbehør } from '../interfaces/Innsenderbehovsmelding'
import FixedWidthLabel from '../components/FixedWidthLabel'
import TilbehørVisning from '../components/TilbehørVisning'

type HjelpemidlerProps = {
  hjelpemiddelTotalAntall: number
  hjelpemidler: Hjelpemiddel[]
  tilbehør: Tilbehør[]
}

const HjelpemidlerOppsummering: React.FC<HjelpemidlerProps> = (props: HjelpemidlerProps) => {
  const { t } = useTranslation()
  const { hjelpemiddelTotalAntall, hjelpemidler, tilbehør } = props

  return (
    <FormSummary>
      <FormSummary.Header><FormSummary.Heading level="2">{t('felles.hjelpemidler')}</FormSummary.Heading></FormSummary.Header>
      <FormSummary.Answers>
        {hjelpemidler.map((hm: Hjelpemiddel, hmsIdx) => (
          <Hjelpemiddelinfo hm={hm} key={hmsIdx} />
        ))}
        {tilbehør.map((tilbehør: Tilbehør, index) => (
          <TilbehørVisning tilbehør={tilbehør} key={index} />
        ))}
      </FormSummary.Answers>
      <HStack wrap={false} gap="space-2" marginInline="space-20" marginBlock="space-0 space-16">
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
  )
}

export default HjelpemidlerOppsummering
