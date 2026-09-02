import React from 'react'
import { FormSummary } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { type Vedlegg } from '../interfaces/Innsenderbehovsmelding'
import VedleggListe from '../components/VedleggListe'

type VedleggProps = {
  vedlegg: Vedlegg[]
}

const VedleggOppsummering: React.FC<VedleggProps> = (props: VedleggProps) => {
  const { t } = useTranslation()

  const { vedlegg } = props

  return (
    <>
      <FormSummary>
        <FormSummary.Header>
          <FormSummary.Heading level="2">{t('oppsummering.vedlegg.tittel')}</FormSummary.Heading>
        </FormSummary.Header>
        <FormSummary.Answers>
          <FormSummary.Answer>
            <VedleggListe vedlegg={vedlegg} />
          </FormSummary.Answer>
        </FormSummary.Answers>
      </FormSummary>
    </>
  )
}

export default VedleggOppsummering
