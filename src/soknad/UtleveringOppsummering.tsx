import React from 'react'
import { Heading, Label, BodyShort } from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { KontaktPersonType, Leveringsinfo, Leveringsmaate } from '../interfaces/Leveringinfo'
import { Formidlerinfo } from '../interfaces/Formidlerinfo'
import { Brukerinfo } from '../interfaces/Brukerinfo'

type LeveringProps = {
  levering: Leveringsinfo
  formidler: Formidlerinfo
  bruker: Brukerinfo
}

const UtleveringOppsummering: React.FC<LeveringProps> = (props: LeveringProps) => {
  const { t } = useTranslation()

  const { levering, formidler, bruker } = props

  return (
    <>
      <div className="contentBlock">
        <div className="contentBlock">
          <Heading size="small" level="4">
            {t('oppsummering.utlevering')}
          </Heading>
        </div>
        <div className="contentBlock">
          <div className={'infoTable'}>
            {levering.leveringsmaate === Leveringsmaate.FOLKEREGISTRERT_ADRESSE ? (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.leveringsadresse')}</Label>
                <BodyShort className={'infoRowCell'}>{t('oppsummering.FolkeregistrertAdresse')}</BodyShort>
              </div>
            ) : levering.leveringsmaate === Leveringsmaate.HJELPEMIDDELSENTRAL ? (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.leveringsadresse')}</Label>
                <BodyShort className={'infoRowCell'}>{t('oppsummering.hentesHjelpemiddelsentral')}</BodyShort>
              </div>
            ) : levering.leveringsmaate === Leveringsmaate.ALLEREDE_LEVERT ? (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.obs')}</Label>
                <BodyShort className={'infoRowCell'}>{t('oppsummering.alleredeUtlevertFraNav')}</BodyShort>
              </div>
            ) : (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.leveringsadresse')}</Label>
                <BodyShort className={'infoRowCell'}>{levering.adresse}</BodyShort>
              </div>
            )}
            {levering.kontaktPerson.kontaktpersonType === KontaktPersonType.HJELPEMIDDELBRUKER ? (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.kontaktperson')}</Label>
                <BodyShort className={'infoRowCell'}>
                  {bruker.fornavn} {bruker.etternavn} (Hjelpemiddelbruker)
                </BodyShort>
              </div>
            ) : levering.kontaktPerson.kontaktpersonType === KontaktPersonType.HJELPEMIDDELFORMIDLER ? (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.kontaktperson')}</Label>
                <BodyShort className={'infoRowCell'}>
                  {formidler.navn} {t('oppsummering.hjelpemiddelformidler')}
                </BodyShort>
              </div>
            ) : levering.kontaktPerson.kontaktpersonType === KontaktPersonType.ANNEN_KONTAKTPERSON ? (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.kontaktperson')}</Label>
                <BodyShort className={'infoRowCell'}>
                  {levering.kontaktPerson.navn} {levering.kontaktPerson.telefon}
                </BodyShort>
              </div>
            ) : null}
            {levering.merknad ? (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.merknadTilUtlevering')}</Label>
                <BodyShort className={'infoRowCell'}>{levering.merknad}</BodyShort>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default UtleveringOppsummering
