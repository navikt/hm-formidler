import React from 'react'
import { FormSummary, Link } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { type Vedlegg } from '../interfaces/Innsenderbehovsmelding'
import { Avstand } from '../components/Avstand'
import { ExternalLinkIcon } from '@navikt/aksel-icons'
import { SOKNAD_API_PATH } from '../services/rest-service'

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
            {vedlegg.map((vedlegg, i) => (
              <Avstand key={i} marginBottom={2}>
                <Link href={`${SOKNAD_API_PATH}/soknad/vedlegg/${vedlegg.id}`} target="_blank" inlineText>
                  <ExternalLinkIcon aria-hidden="true" />
                  {vedlegg.navn}
                </Link> {t('oppsummering.vedlegg.åpnerINyFane')}
              </Avstand>
            ))}
          </FormSummary.Answer>
        </FormSummary.Answers>
      </FormSummary>
    </>
  )
}

export default VedleggOppsummering
