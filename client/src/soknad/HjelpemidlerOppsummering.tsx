import React from 'react'
import { Heading, BodyShort, Box } from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import Hjelpemiddelinfo from '../components/Hjelpemiddel'
import { Hjelpemiddel } from '../interfaces/Formidlerbehovsmelding'

type HjelpemidlerProps = {
  hjelpemiddelTotalAntall: number
  hjelpemidler: Hjelpemiddel[]
}

const HjelpemidlerOppsummering: React.FC<HjelpemidlerProps> = (props: HjelpemidlerProps) => {
  const { t } = useTranslation()
  const { hjelpemiddelTotalAntall, hjelpemidler } = props

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
          <li key={hmsIdx} style={{ width: '95%', marginBottom: '16px' }}>
            <Hjelpemiddelinfo hm={hm} />
          </li>
        ))}
      </ul>

      <div className="contentBlock">
        <div className={'infoTable'}>
          <div className={'infoRow infoRowReverse'}>
            <BodyShort className={'infoRowCell'}>{t('felles.tilsvarendeProdukt')}</BodyShort>
            <BodyShort className={'alignRight fixedWidthLabel'}>
              {t('felles.totalt') +
                ' ' +
                t('felles.antallHjelpemidler.total', {
                  antall: hjelpemiddelTotalAntall,
                })}
            </BodyShort>
          </div>
        </div>
      </div>
    </>
  )
}

export default HjelpemidlerOppsummering
