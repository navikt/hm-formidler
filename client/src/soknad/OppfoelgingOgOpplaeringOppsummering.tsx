import React from 'react'
import { Heading, Label, BodyShort } from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { AnnenOppfølgingsansvarlig, Hjelpemiddelformidler } from '../interfaces/Leveringinfo'
import { formaterPersonnavn, formaterVeiadresse } from '../interfaces/CommonTypes'

type FormidlerProps = {
  hjelpemiddelformidler: Hjelpemiddelformidler
  annnenOppfølgingsansvarlig: AnnenOppfølgingsansvarlig | undefined
}

const OppfoelgingOgOpplaeringOppsummering: React.FC<FormidlerProps> = (props: FormidlerProps) => {
  const { t } = useTranslation()
  const { hjelpemiddelformidler: formidler, annnenOppfølgingsansvarlig: oppfolgingsansvarlig } = props

  return (
    <>
      <div className="contentBlock categoryRow">
        <Heading size="medium" level="2">
          {' '}
          {t('oppsummering.leveringOgOpplaring')}
        </Heading>
      </div>
      <div className="contentBlock">
        <div className="contentBlock">
          <Heading size="small" level="3">
            {t('felles.hjelpemiddelFormidler')}
          </Heading>
        </div>
        <div className="contentBlock">
          <div className={'infoTable'}>
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Label>
              <BodyShort className={'infoRowCell'}>{formaterPersonnavn(formidler.navn)}</BodyShort>
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
              <BodyShort className={'infoRowCell'}>{formaterVeiadresse(formidler.adresse)}</BodyShort>
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
          <Heading size="small" level="3">
            {t('oppsummering.ansvarlig')}
          </Heading>
        </div>
        <div className="contentBlock">
          {!oppfolgingsansvarlig ? (
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Label>
              <BodyShort className={'infoRowCell'}>
                {formaterPersonnavn(formidler.navn)} {t('oppsummering.hjelpemiddelformidler')}
              </BodyShort>
            </div>
          ) : (
            <div className={'infoTable'}>
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Label>
                <BodyShort className={'infoRowCell'}>{formaterPersonnavn(oppfolgingsansvarlig.navn)}</BodyShort>
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
