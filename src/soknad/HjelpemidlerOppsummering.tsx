import React from 'react'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'
import Hjelpemiddel from '../components/Hjelpemiddel'
import { Kroppsmaal } from '../interfaces/Brukerinfo'

type HjelpemidlerProps = {
  hjelpemidler: HjelpemiddelItem[]
  hjelpemiddelTotalAntall: number
  kroppsmaal: Kroppsmaal | undefined
}

const HjelpemidlerOppsummering = (props: HjelpemidlerProps) => {
  const { t } = useTranslation()
  const { hjelpemidler, hjelpemiddelTotalAntall, kroppsmaal } = props

  return (
    <>
      <div className="contentBlock">
        <div className="contentBlock categoryRow">
          <Systemtittel tag="h3"> {t('felles.hjelpemidler')}</Systemtittel>
        </div>
      </div>

      <hr aria-hidden="true" />

      <ul style={{ paddingLeft: '0', margin: '0', listStyle: 'none' }}>
        {hjelpemidler.map((hm: HjelpemiddelItem, hmsIdx) => (
          <li key={hmsIdx} style={{ width: '95%' }}>
            <Hjelpemiddel hm={hm} kroppsmaal={kroppsmaal} />
            <hr aria-hidden="true" style={{ color: '#78706A' }} />
          </li>
        ))}
      </ul>

      <div className="contentBlock">
        <div className={'infoTable'}>
          <div className={'infoRow infoRowReverse'}>
            <Normaltekst className={'infoRowCell'}>{t('felles.tilsvarendeProdukt')}</Normaltekst>
            <Normaltekst className={'alignRight fixedWidthLabel'}>
              {t('felles.totalt') +
                ' ' +
                t('felles.antallHjelpemidler.total', {
                  antall: hjelpemiddelTotalAntall,
                })}
            </Normaltekst>
          </div>
        </div>
      </div>
    </>
  )
}

export default HjelpemidlerOppsummering
