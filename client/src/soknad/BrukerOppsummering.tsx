import { FormSummary } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { type Bruker, type Brukersituasjon } from '../interfaces/Innsenderbehovsmelding'
import { formaterPersonnavn } from '../interfaces/CommonTypes'
import { formaterFnr, formaterTlf } from '../Utils'
import { lokaliser } from './OpplysningVisning'

type BrukerProps = {
  bruker: Bruker
  brukersituasjon: Brukersituasjon
}

function BrukerOppsummering(props: BrukerProps) {
  const { t } = useTranslation()
  const { bruker, brukersituasjon } = props

  return (
    <FormSummary>
      <FormSummary.Header><FormSummary.Heading level="2">{t('oppsummering.hjelpemiddelbruker')}</FormSummary.Heading></FormSummary.Header>
      <FormSummary.Answers>
        <FormSummary.Answer>
          <FormSummary.Label>{t('oppsummering.navn')}</FormSummary.Label>
          <FormSummary.Value>{formaterPersonnavn(bruker.navn)}</FormSummary.Value>
        </FormSummary.Answer>
        <FormSummary.Answer>
          <FormSummary.Label>{t('felles.fodselsnummer')}</FormSummary.Label>
          <FormSummary.Value>{formaterFnr(bruker.fnr)}</FormSummary.Value>
        </FormSummary.Answer>
        {bruker.veiadresse && (
          <FormSummary.Answer>
            <FormSummary.Label>{t('oppsummering.FolkeregistrertAdresse')}</FormSummary.Label>
            <FormSummary.Value>{bruker.veiadresse.adresse}</FormSummary.Value>
            <FormSummary.Value>{`${bruker.veiadresse.postnummer} ${bruker.veiadresse.poststed}`}</FormSummary.Value>
          </FormSummary.Answer>
        )}
        {bruker.telefon && (
          <FormSummary.Answer>
            <FormSummary.Label>{t('felles.tlf')}</FormSummary.Label>
            <FormSummary.Value>{formaterTlf(bruker.telefon)}</FormSummary.Value>
          </FormSummary.Answer>
        )}
        {bruker.legacyopplysninger.map((opplysning, index) => (
          <FormSummary.Answer key={index}>
            <FormSummary.Label>{lokaliser(opplysning.ledetekst)}</FormSummary.Label>
            <FormSummary.Value>{lokaliser(opplysning.innhold)}</FormSummary.Value>
          </FormSummary.Answer>
        ))}
        <FormSummary.Answer>
          <FormSummary.Label>{t('oppsummering.funksjonsnedsettelser')}</FormSummary.Label>
          <FormSummary.Value>{brukersituasjon.funksjonsnedsettelser.map((funksjonsnedsettelse) => t(funksjonsnedsettelse)).join(', ')}</FormSummary.Value>
        </FormSummary.Answer>
        {bruker.brukernummer && (
          <FormSummary.Answer>
            <FormSummary.Label>{t('oppsummering.brukernummer')}</FormSummary.Label>
            <FormSummary.Value>{bruker.brukernummer}</FormSummary.Value>
          </FormSummary.Answer>
        )}
      </FormSummary.Answers>
    </FormSummary>
  )
}

export default BrukerOppsummering
