import React from 'react'
import { Heading, Label, BodyShort } from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { KontaktPersonType, Leveringsinfo, Leveringsmaate } from '../interfaces/Leveringinfo'
import { Formidlerinfo } from '../interfaces/Formidlerinfo'
import { Brukerinfo } from '../interfaces/Brukerinfo'
import { Hast, Hasteårsak } from '../interfaces/Hast'

type LeveringProps = {
  levering: Leveringsinfo
  formidler: Formidlerinfo
  bruker: Brukerinfo
  hast: Hast | null
}

const UtleveringOppsummering: React.FC<LeveringProps> = (props: LeveringProps) => {
  const { t } = useTranslation()
  console.log('props:', props)

  const { levering, formidler, bruker, hast } = props

  return (
    <>
      <div className="contentBlock">
        <div className="contentBlock">
          <Heading size="small" level="3">
            {t('oppsummering.utlevering')}
          </Heading>
        </div>
        <div className="contentBlock">
          <div className={'infoTable'}>
            {hast && <HastOppsummering hast={hast} />}

            {levering.tilleggsinfo?.map((tilleggsinfo) => {
              return (
                <div className={'infoRow'} key={tilleggsinfo}>
                  <Label className={'infoRowCell fixedWidthLabel'}>
                    {t(`oppsummering.levering.tilleggsinfo.${tilleggsinfo}.label`)}
                  </Label>
                  <BodyShort className={'infoRowCell'}>
                    {t(`oppsummering.levering.tilleggsinfo.${tilleggsinfo}.tekst`)}
                  </BodyShort>
                </div>
              )
            })}
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
            ) : levering.leveringsmaate === Leveringsmaate.ANNEN_ADRESSE ? (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.leveringsadresse')}</Label>
                <BodyShort className={'infoRowCell'}>{levering.adresse}</BodyShort>
              </div>
            ) : (
              <></>
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

const HastOppsummering = ({ hast }: { hast: Hast }) => {
  const { t } = useTranslation()

  const årsaker = hast.hasteårsaker
    .filter((årsak) => årsak !== Hasteårsak.ANNET) // Trenger ikke vise denne i oppsummering
    .map((årsak) => t(`hasteårsak.${årsak}`))

  if (hast.hastBegrunnelse) {
    årsaker.push(hast.hastBegrunnelse)
  }

  return (
    <>
      <div className={'infoRow'}>
        <Label className={'infoRowCell fixedWidthLabel'}>{t('hast.prioritet')}</Label>
        <BodyShort className={'infoRowCell'}>{t('hast.sakenHaster')}</BodyShort>
      </div>
      <div className={'infoRow'}>
        <Label className={'infoRowCell fixedWidthLabel'}>{t('hast.årsakenTilHast')}</Label>
        {årsaker.length === 1 && <>{årsaker[0]}</>}
        {årsaker.length > 1 && (
          <ul style={{ padding: 0, margin: 0, marginLeft: '20px' }}>
            {årsaker.map((årsak, i) => (
              <li key={i}>{årsak}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default UtleveringOppsummering
