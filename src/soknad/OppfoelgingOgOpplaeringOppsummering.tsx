import React from 'react'
import { Heading, Label, BodyShort } from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { Formidlerinfo } from '../interfaces/Formidlerinfo'
import { Oppfolgingsansvarliginfo } from '../interfaces/Oppfolgingsansvarliginfo'

type FormidlerProps = {
  formidler: Formidlerinfo
  oppfolgingsansvarlig: Oppfolgingsansvarliginfo
}

const OppfoelgingOgOpplaeringOppsummering: React.FC<FormidlerProps> = (props: FormidlerProps) => {
  const { t } = useTranslation()
  const { formidler, oppfolgingsansvarlig } = props

  return (
    <>
      <div className="contentBlock categoryRow">
        <Heading size="medium" level="3">
          {' '}
          {t('oppsummering.leveringOgOpplaring')}
        </Heading>
      </div>
      <div className="contentBlock">
        <div className="contentBlock">
          <Heading size="small" level="4">
            {t('felles.hjelpemiddelFormidler')}
          </Heading>
        </div>
        <div className="contentBlock">
          <div className={'infoTable'}>
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Label>
              <BodyShort className={'infoRowCell'}>{formidler.navn}</BodyShort>
            </div>
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.arbeidssted')}</Label>
              <BodyShort className={'infoRowCell'}>{formidler.arbeidssted}</BodyShort>
            </div>
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.stilling')}</Label>
              <BodyShort className={'infoRowCell'}>{formidler.stilling}</BodyShort>
            </div>
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.adresse')}</Label>
              <BodyShort className={'infoRowCell'}>{formidler.adresse}</BodyShort>
            </div>
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.tlf')}</Label>
              <BodyShort className={'infoRowCell'}>{formidler.telefon}</BodyShort>
            </div>
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.treffesEnklest')}</Label>
              <BodyShort className={'infoRowCell'}>{formidler.treffesEnklest}</BodyShort>
            </div>
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.epost')}</Label>
              <BodyShort className={'infoRowCell'}>{formidler.epost}</BodyShort>
            </div>
          </div>
        </div>
      </div>
      <div className="contentBlock">
        <div className="contentBlock">
          <Heading size="small" level="4">
            {t('oppsummering.ansvarlig')}
          </Heading>
        </div>
        <div className="contentBlock">
          {!oppfolgingsansvarlig ? (
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Label>
              <BodyShort className={'infoRowCell'}>
                {formidler.navn} {t('oppsummering.hjelpemiddelformidler')}
              </BodyShort>
            </div>
          ) : (
            <div className={'infoTable'}>
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Label>
                <BodyShort className={'infoRowCell'}>{oppfolgingsansvarlig.navn}</BodyShort>
              </div>
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.arbeidssted')}</Label>
                <BodyShort className={'infoRowCell'}>{oppfolgingsansvarlig.arbeidssted}</BodyShort>
              </div>
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.stilling')}</Label>
                <BodyShort className={'infoRowCell'}>{oppfolgingsansvarlig.stilling}</BodyShort>
              </div>
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.tlf')}</Label>
                <BodyShort className={'infoRowCell'}>{oppfolgingsansvarlig.telefon}</BodyShort>
              </div>
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.ansvar')}</Label>
                <BodyShort className={'infoRowCell'}>{oppfolgingsansvarlig.ansvarFor}</BodyShort>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default OppfoelgingOgOpplaeringOppsummering
