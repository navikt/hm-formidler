import React from 'react'
import { FormSummary } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { type AnnenOppfølgingsansvarlig, type Hjelpemiddelformidler } from '../interfaces/Leveringinfo'
import { formaterPersonnavn } from '../interfaces/CommonTypes'
import { formaterTlf } from '../Utils'

type OpplæringsAnsvarligProps = {
  formidler: Hjelpemiddelformidler
  oppfolgingsansvarlig: AnnenOppfølgingsansvarlig | undefined
}

const OpplæringsAnsvarlig: React.FC<OpplæringsAnsvarligProps> = (props: OpplæringsAnsvarligProps) => {
  const { t } = useTranslation()

  const { formidler, oppfolgingsansvarlig } = props

  return (
    <FormSummary.Answer>
      <FormSummary.Label>{t('oppsummering.ansvarlig')}</FormSummary.Label>
      <FormSummary.Value>
        <FormSummary.Answers>
          {!oppfolgingsansvarlig ? (
            <FormSummary.Answer>
              <FormSummary.Label>{t('oppsummering.navn')}</FormSummary.Label>
              <FormSummary.Value>{`${formaterPersonnavn(formidler.navn)} ${t('oppsummering.hjelpemiddelformidler')}`}</FormSummary.Value>
            </FormSummary.Answer>
          ) : (
            <>
              <FormSummary.Answer>
                <FormSummary.Label>{t('oppsummering.navn')}</FormSummary.Label>
                <FormSummary.Value>{formaterPersonnavn(oppfolgingsansvarlig.navn)}</FormSummary.Value>
              </FormSummary.Answer>
              <FormSummary.Answer>
                <FormSummary.Label>{t('felles.arbeidssted')}</FormSummary.Label>
                <FormSummary.Value>{oppfolgingsansvarlig.arbeidssted}</FormSummary.Value>
              </FormSummary.Answer>
              <FormSummary.Answer>
                <FormSummary.Label>{t('felles.stilling')}</FormSummary.Label>
                <FormSummary.Value>{oppfolgingsansvarlig.stilling}</FormSummary.Value>
              </FormSummary.Answer>
              <FormSummary.Answer>
                <FormSummary.Label>{t('felles.tlf')}</FormSummary.Label>
                <FormSummary.Value>{formaterTlf(oppfolgingsansvarlig.telefon)}</FormSummary.Value>
              </FormSummary.Answer>
              <FormSummary.Answer>
                <FormSummary.Label>{t('oppsummering.ansvar')}</FormSummary.Label>
                <FormSummary.Value>{oppfolgingsansvarlig.ansvarFor}</FormSummary.Value>
              </FormSummary.Answer>
            </>
          )}
        </FormSummary.Answers>
      </FormSummary.Value>
    </FormSummary.Answer>
  )
}

export default OpplæringsAnsvarlig
