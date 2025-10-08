import React from 'react'
import { FormSummary } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { formaterPersonnavn, formaterVeiadresse } from '../interfaces/CommonTypes'
import { type Hast, Hasteårsak } from '../interfaces/Hast'
import { type Bruker } from '../interfaces/Innsenderbehovsmelding'
import { type Hjelpemiddelformidler, Kontaktperson, type Levering, Utleveringsmåte } from '../interfaces/Leveringinfo'
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
    <FormSummary.Answer>
      <FormSummary.Label>{t('oppsummering.utlevering')}</FormSummary.Label>
      <FormSummary.Value>
        <FormSummary.Answers>
          {levering.hast && <HastOppsummering hast={levering.hast} />}

          {levering.automatiskUtledetTilleggsinfo?.map((tilleggsinfo) => {
            return (
              <FormSummary.Answer key={tilleggsinfo}>
                <FormSummary.Label>{t(`oppsummering.levering.tilleggsinfo.${tilleggsinfo}.label`)}</FormSummary.Label>
                <FormSummary.Value>{t(`oppsummering.levering.tilleggsinfo.${tilleggsinfo}.tekst`)}</FormSummary.Value>
              </FormSummary.Answer>
            )
          })}
          {levering.utleveringsmåte === Utleveringsmåte.FOLKEREGISTRERT_ADRESSE && (
            <FormSummary.Answer>
              <FormSummary.Label>{t('oppsummering.leveringsadresse')}</FormSummary.Label>
              <FormSummary.Value>{t('oppsummering.FolkeregistrertAdresse')}</FormSummary.Value>
            </FormSummary.Answer>
          )}
          {levering.utleveringsmåte === Utleveringsmåte.HJELPEMIDDELSENTRALEN && (
            <FormSummary.Answer>
              <FormSummary.Label>{t('oppsummering.leveringsadresse')}</FormSummary.Label>
              <FormSummary.Value>{t('oppsummering.hentesHjelpemiddelsentral')}</FormSummary.Value>
            </FormSummary.Answer>
          )}
          {levering.utleveringsmåte === Utleveringsmåte.ALLEREDE_UTLEVERT_AV_NAV && (
            <FormSummary.Answer>
              <FormSummary.Label>{t('oppsummering.obs')}</FormSummary.Label>
              <FormSummary.Value>{t('oppsummering.alleredeUtlevertFraNav')}</FormSummary.Value>
            </FormSummary.Answer>
          )}
          {levering.utleveringsmåte === Utleveringsmåte.ANNEN_BRUKSADRESSE && (
            <FormSummary.Answer>
              <FormSummary.Label>{t('oppsummering.leveringsadresse')}</FormSummary.Label>
              <FormSummary.Value>{formaterVeiadresse(levering.annenUtleveringsadresse)}</FormSummary.Value>
            </FormSummary.Answer>
          )}
          {levering.utleveringKontaktperson === Kontaktperson.HJELPEMIDDELBRUKER && (
            <FormSummary.Answer>
              <FormSummary.Label>{t('oppsummering.kontaktperson')}</FormSummary.Label>
              <FormSummary.Value>{formaterPersonnavn(bruker.navn) + ' (Hjelpemiddelbruker)'}</FormSummary.Value>
            </FormSummary.Answer>
          )}
          {levering.utleveringKontaktperson === Kontaktperson.HJELPEMIDDELFORMIDLER && (
            <FormSummary.Answer>
              <FormSummary.Label>{t('oppsummering.kontaktperson')}</FormSummary.Label>
              <FormSummary.Value>{formaterPersonnavn(formidler.navn) + ' ' + t('oppsummering.hjelpemiddelformidler')}</FormSummary.Value>
            </FormSummary.Answer>
          )}
          {levering.utleveringKontaktperson === Kontaktperson.ANNEN_KONTAKTPERSON && levering.annenKontaktperson && (
            <FormSummary.Answer>
              <FormSummary.Label>{t('oppsummering.kontaktperson')}</FormSummary.Label>
              <FormSummary.Value>{
                formaterPersonnavn(levering.annenKontaktperson.navn) +
                ' ' +
                formaterTlf(levering.annenKontaktperson.telefon)
              }
              </FormSummary.Value>
            </FormSummary.Answer>
          )}
          {levering.utleveringMerknad && (
            <FormSummary.Answer>
              <FormSummary.Label>{t('felles.merknadTilUtlevering')}</FormSummary.Label>
              <FormSummary.Value>{levering.utleveringMerknad}</FormSummary.Value>
            </FormSummary.Answer>
          )}
        </FormSummary.Answers>
      </FormSummary.Value>
    </FormSummary.Answer>
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
      <FormSummary.Answer>
        <FormSummary.Label>{t('hast.prioritet')}</FormSummary.Label>
        <FormSummary.Value>{t('hast.sakenHaster')}</FormSummary.Value>
      </FormSummary.Answer>
      <FormSummary.Answer>
        <FormSummary.Label>{t('hast.årsakenTilHast')}</FormSummary.Label>
        <FormSummary.Value>
          {årsaker.length === 1 ? (
            årsaker[0]
          ) : (
            <ul style={{ padding: 0, margin: 0, marginLeft: '20px' }}>
              {årsaker.map((årsak, i) => (
                <li key={i}>{årsak}</li>
              ))}
            </ul>
          )}
        </FormSummary.Value>
      </FormSummary.Answer>
    </>
  )
}

export default UtleveringOppsummering
