import { useTranslation } from 'react-i18next'
import { Brukersituasjon, Funksjonsbeskrivelse, Innsender, Innsenderrolle } from '../interfaces/Innsenderbehovsmelding'
import { FormSummary } from '@navikt/ds-react'
import { lokaliser } from './OpplysningVisning'

interface Props {
  funksjonsbeskrivelse?: Funksjonsbeskrivelse
  brukersituasjon: Brukersituasjon
  innsender: Innsender
}

const FunksjonsbeskrivelseOppsummering = ({ funksjonsbeskrivelse, brukersituasjon, innsender }: Props) => {
  const { t } = useTranslation()

  const {
    innbyggersVarigeFunksjonsnedsettelse,
    diagnose,
    beskrivelse
  } = funksjonsbeskrivelse ?? {}

  return (
    <FormSummary>
      <FormSummary.Header><FormSummary.Heading level="2">{t('funksjonsbeskrivelse.personensSituasjon')}</FormSummary.Heading></FormSummary.Header>
      <FormSummary.Answers>
        {funksjonsbeskrivelse && (
          <>
            <FormSummary.Answer>
              <FormSummary.Label>{t('funksjonsbeskrivelse.sykdomSkadeLyte')}</FormSummary.Label>
              <FormSummary.Value>{t(`funksjonsbeskrivelse.innbyggersVarigeFunksjonsnedsettelse.${innbyggersVarigeFunksjonsnedsettelse}`)}</FormSummary.Value>
            </FormSummary.Answer>
            {diagnose && (
              <FormSummary.Answer>
                <FormSummary.Label>{t('funksjonsbeskrivelse.diagnose')}</FormSummary.Label>
                <FormSummary.Value>{diagnose}</FormSummary.Value>
              </FormSummary.Answer>
            )}
            <FormSummary.Answer>
              <FormSummary.Label>{t('funksjonsbeskrivelse.funksjonsbeskrivelse')}</FormSummary.Label>
              <FormSummary.Value>{beskrivelse}</FormSummary.Value>
            </FormSummary.Answer>
          </>
        )}
        <FormSummary.Answer>
          <FormSummary.Label>{innsender.rolle === Innsenderrolle.FORMIDLER
            ? t('oppsummering.formidlerVurdert')
            : t('oppsummering.bestillerVurdert')}</FormSummary.Label>
          <FormSummary.Value>
            <ul>
              {brukersituasjon.vilkår.map((vilkår, i) => {
                return <li key={i}>{lokaliser(vilkår.tekst)}</li>
              })}
            </ul>
          </FormSummary.Value>
        </FormSummary.Answer>
      </FormSummary.Answers>
    </FormSummary>
  )
}

export default FunksjonsbeskrivelseOppsummering
