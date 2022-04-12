import React from 'react'
import { Heading, Label, BodyShort } from '@navikt/ds-react'
import { useState } from 'react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { Brukerinfo } from '../interfaces/Brukerinfo'

type BrukerProps = {
  bruker: Brukerinfo
}

function BrukerOppsummering(props: BrukerProps) {
  const { t } = useTranslation()
  const [className] = useState<string>('')

  const { bruker } = props

  return (
    <>
      <div className="contentBlock categoryRow">
        <Heading size="medium" level="3">
          {t('oppsummering.hjelpemiddelbruker')}
        </Heading>
      </div>
      <div className="contentBlock">
        <div className={className}>
          <div className="infoTable">
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Label>
              <BodyShort className={'infoRowCell'}>{`${bruker.fornavn} ${bruker.etternavn}`}</BodyShort>
            </div>
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.fodselsnummer')}</Label>
              <BodyShort className={'infoRowCell'}>{bruker.fnummer}</BodyShort>
            </div>
            {bruker.adresse && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.FolkeregistrertAdresse')}</Label>
                <BodyShort className={'infoRowCell'}>{bruker.adresse}</BodyShort>
              </div>
            )}
          </div>
        </div>

        <div className={'infoTable'}>
          <div className={'infoRow'}>
            <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.tlf')}</Label>
            <BodyShort className={'infoRowCell'}>{bruker.telefonNummer}</BodyShort>
          </div>
          <div className={'infoRow'}>
            <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.boform')}</Label>
            <BodyShort className={'infoRowCell'}>{bruker.boform}</BodyShort>
          </div>
          <div className={'infoRow'}>
            <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.bruksarena')}</Label>
            <BodyShort className={'infoRowCell'}>
              {bruker.bruksarena === 'DAGLIGLIVET' ? t('oppsummering.dagliglivet') : ''}
            </BodyShort>
          </div>
          <div className={'infoRow'}>
            <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.funksjonsnedsettelser')}</Label>
            <BodyShort className={'infoRowCell'}>
              {/* eslint-disable-next-line */} {/* i18n testen knekker uten linjeskift her... */}
              {bruker.funksjonsnedsettelser.map((funksjonsnedsettelse) => t(funksjonsnedsettelse.valueOf())).join(', ')}
            </BodyShort>
          </div>
        </div>
      </div>
      <hr aria-hidden="true" />
    </>
  )
}

export default BrukerOppsummering
