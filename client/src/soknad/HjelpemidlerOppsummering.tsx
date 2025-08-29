import React from 'react'
import { Heading, BodyShort, Box, HStack } from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import Hjelpemiddelinfo from '../components/Hjelpemiddel'
import { Hjelpemiddel, Tilbehør } from '../interfaces/Innsenderbehovsmelding'
import TilbehørVisning from '../components/TilbehørVisning'
import { Avstand } from '../components/Avstand'
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
  const { hjelpemiddelTotalAntall, hjelpemidler, tilbehør , behovsmeldingType} = props

  return (
    <>
      <div className="contentBlock">
        <div className="contentBlock categoryRow">
          <Heading size="medium" level="2">
            {t('felles.hjelpemidler')}
          </Heading>
        </div>
      </div>

      <ul style={{ paddingLeft: '0', margin: '0', listStyle: 'none' }}>
        {hjelpemidler.map((hm: Hjelpemiddel, hmsIdx) => (
          <li key={`${hmsIdx}.${hm.produkt.hmsArtNr}`} style={{ marginBottom: '16px' }}>
            <Hjelpemiddelinfo hm={hm} behovsmeldingType={behovsmeldingType}/>
          </li>
        ))}
        {tilbehør.map((tilbehør: Tilbehør, index) => (
          <li key={`${index}.${tilbehør.hmsArtNr}`} style={{ marginBottom: '16px' }}>
            <TilbehørVisning tilbehør={tilbehør} />
          </li>
        ))}
      </ul>

      <Avstand marginTop={6} marginBottom={6}>
        <HStack wrap={false} align={'center'}>
          <BodyShort>
            {t('felles.tilsvarendeProdukt')}
          </BodyShort>
          <FixedWidthLabel width={7}>
            {t('felles.totalt') +
              ' ' +
              t('felles.antallHjelpemidler.total', {
                antall: hjelpemiddelTotalAntall,
              })}
          </FixedWidthLabel>
        </HStack>
      </Avstand>
    </>
  )
}

export default HjelpemidlerOppsummering
