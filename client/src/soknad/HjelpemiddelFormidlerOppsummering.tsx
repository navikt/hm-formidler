import React from 'react'
import { FormSummary } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { type Hjelpemiddelformidler } from '../interfaces/Leveringinfo'
import { formaterPersonnavn } from '../interfaces/CommonTypes'
import { formaterTlf } from '../Utils'

type HjelpemiddelFormidlerProps = {
  formidler: Hjelpemiddelformidler
}

const HjelpemiddelFormidler: React.FC<HjelpemiddelFormidlerProps> = (props: HjelpemiddelFormidlerProps) => {
  const { t } = useTranslation()

  const { formidler } = props

  return (
    <FormSummary.Answer>
      <FormSummary.Label>{t('felles.hjelpemiddelFormidler')}</FormSummary.Label>
      <FormSummary.Value>
        <FormSummary.Answers>
          <FormSummary.Answer>
            <FormSummary.Label>{t('oppsummering.navn')}</FormSummary.Label>
            <FormSummary.Value>{formaterPersonnavn(formidler.navn)}</FormSummary.Value>
          </FormSummary.Answer>
          <FormSummary.Answer>
            <FormSummary.Label>{t('felles.arbeidssted')}</FormSummary.Label>
            <FormSummary.Value>{formidler.arbeidssted}</FormSummary.Value>
          </FormSummary.Answer>
          <FormSummary.Answer>
            <FormSummary.Label>{t('felles.stilling')}</FormSummary.Label>
            <FormSummary.Value>{formidler.stilling}</FormSummary.Value>
          </FormSummary.Answer>
          <FormSummary.Answer>
            <FormSummary.Label>{t('felles.adresse')}</FormSummary.Label>
            <FormSummary.Value>{formidler.adresse.adresse}</FormSummary.Value>
            <FormSummary.Value>{`${formidler.adresse.postnummer} ${formidler.adresse.poststed}`}</FormSummary.Value>
          </FormSummary.Answer>
          <FormSummary.Answer>
            <FormSummary.Label>{t('felles.tlf')}</FormSummary.Label>
            <FormSummary.Value>{formaterTlf(formidler.telefon)}</FormSummary.Value>
          </FormSummary.Answer>
          <FormSummary.Answer>
            <FormSummary.Label>{t('felles.treffesEnklest')}</FormSummary.Label>
            <FormSummary.Value>{formidler.treffesEnklest}</FormSummary.Value>
          </FormSummary.Answer>
          <FormSummary.Answer>
            <FormSummary.Label>{t('felles.epost')}</FormSummary.Label>
            <FormSummary.Value>{formidler.epost}</FormSummary.Value>
          </FormSummary.Answer>
        </FormSummary.Answers>
      </FormSummary.Value>
    </FormSummary.Answer>
  )
}

export default HjelpemiddelFormidler
