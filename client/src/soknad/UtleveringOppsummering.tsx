import React from 'react'
import { Heading, Label, BodyShort } from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { Hast, Hasteårsak } from '../interfaces/Hast'
import { Hjelpemiddelformidler, Kontaktperson, Levering, Utleveringsmåte } from '../interfaces/Leveringinfo'
import { Bruker } from '../interfaces/Innsenderbehovsmelding'
import { formaterPersonnavn, formaterVeiadresse } from '../interfaces/CommonTypes'
import { formaterTlf } from '../Utils'

type LeveringProps = {
  levering: Levering
  formidler: Hjelpemiddelformidler
  bruker: Bruker
}

const UtleveringOppsummering: React.FC<LeveringProps> = (props: LeveringProps) => {
  const { t } = useTranslation()

  const { levering, formidler, bruker } = props

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
            {levering.hast && <HastOppsummering hast={levering.hast} />}

            {levering.automatiskUtledetTilleggsinfo?.map((tilleggsinfo) => {
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
            {levering.utleveringsmåte === Utleveringsmåte.FOLKEREGISTRERT_ADRESSE && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.leveringsadresse')}</Label>
                <BodyShort className={'infoRowCell'}>{t('oppsummering.FolkeregistrertAdresse')}</BodyShort>
              </div>
            )}
            {levering.utleveringsmåte === Utleveringsmåte.HJELPEMIDDELSENTRALEN && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.leveringsadresse')}</Label>
                <BodyShort className={'infoRowCell'}>{t('oppsummering.hentesHjelpemiddelsentral')}</BodyShort>
              </div>
            )}
            {levering.utleveringsmåte === Utleveringsmåte.ALLEREDE_UTLEVERT_AV_NAV && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.obs')}</Label>
                <BodyShort className={'infoRowCell'}>{t('oppsummering.alleredeUtlevertFraNav')}</BodyShort>
              </div>
            )}
            {levering.utleveringsmåte === Utleveringsmåte.ANNEN_BRUKSADRESSE && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.leveringsadresse')}</Label>
                <BodyShort className={'infoRowCell'}>{formaterVeiadresse(levering.annenUtleveringsadresse)}</BodyShort>
              </div>
            )}

            {levering.utleveringKontaktperson === Kontaktperson.HJELPEMIDDELBRUKER && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.kontaktperson')}</Label>
                <BodyShort className={'infoRowCell'}>{formaterPersonnavn(bruker.navn)} (Hjelpemiddelbruker)</BodyShort>
              </div>
            )}
            {levering.utleveringKontaktperson === Kontaktperson.HJELPEMIDDELFORMIDLER && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.kontaktperson')}</Label>
                <BodyShort className={'infoRowCell'}>
                  {formaterPersonnavn(formidler.navn)} {t('oppsummering.hjelpemiddelformidler')}
                </BodyShort>
              </div>
            )}
            {levering.utleveringKontaktperson === Kontaktperson.ANNEN_KONTAKTPERSON && levering.annenKontaktperson && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.kontaktperson')}</Label>
                <BodyShort className={'infoRowCell'}>
                  {formaterPersonnavn(levering.annenKontaktperson.navn)} {formaterTlf(levering.annenKontaktperson.telefon)}
                </BodyShort>
              </div>
            )}

            {levering.utleveringMerknad && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.merknadTilUtlevering')}</Label>
                <BodyShort className={'infoRowCell'}>{levering.utleveringMerknad}</BodyShort>
              </div>
            )}
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
