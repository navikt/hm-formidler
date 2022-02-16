import React from 'react'
import { Element, Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import { useState } from 'react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { Brukerinfo } from '../interfaces/Brukerinfo'

type BrukerProps = {
  bruker: Brukerinfo
}

function BrukerOppsummering(props: BrukerProps): JSX.Element {
  const { t } = useTranslation()
  const [className] = useState<string>('')

  const { bruker } = props

  return (
    <>
      <div className="contentBlock categoryRow">
        <Systemtittel tag="h3"> {t('oppsummering.hjelpemiddelbruker')}</Systemtittel>
      </div>
      <div className="contentBlock">
        <div className={className}>
          <div className="infoTable">
            <div className={'infoRow'}>
              <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Element>
              <Normaltekst className={'infoRowCell'}>{`${bruker.fornavn} ${bruker.etternavn}`}</Normaltekst>
            </div>
            <div className={'infoRow'}>
              <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.fodselsnummer')}</Element>
              <Normaltekst className={'infoRowCell'}>{bruker.fnummer}</Normaltekst>
            </div>
            {bruker.adresse && (
              <div className={'infoRow'}>
                <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.FolkeregistrertAdresse')}</Element>
                <Normaltekst className={'infoRowCell'}>{bruker.adresse}</Normaltekst>
              </div>
            )}
          </div>
        </div>

        <div className={'infoTable'}>
          <div className={'infoRow'}>
            <Element className={'infoRowCell fixedWidthLabel'}>{t('felles.tlf')}</Element>
            <Normaltekst className={'infoRowCell'}>{bruker.telefonNummer}</Normaltekst>
          </div>
          <div className={'infoRow'}>
            <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.boform')}</Element>
            <Normaltekst className={'infoRowCell'}>{bruker.boform}</Normaltekst>
          </div>
          <div className={'infoRow'}>
            <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.bruksarena')}</Element>
            <Normaltekst className={'infoRowCell'}>
              {bruker.bruksarena === 'DAGLIGLIVET' ? t('oppsummering.dagliglivet') : ''}
            </Normaltekst>
          </div>
          <div className={'infoRow'}>
            <Element className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.funksjonsnedsettelser')}</Element>
            <Normaltekst className={'infoRowCell'}>
              {/* eslint-disable-next-line */} {/* i18n testen knekker uten linjeskift her... */}
              {bruker.funksjonsnedsettelser
              .map((funksjonsnedsettelse) => t(funksjonsnedsettelse.valueOf()))
              .join(', ')}
            </Normaltekst>
          </div>
        </div>
      </div>
      <hr aria-hidden="true" />
    </>
  )
}

export default BrukerOppsummering
