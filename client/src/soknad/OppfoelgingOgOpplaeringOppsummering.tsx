import React from 'react'
import { FormSummary } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { type AnnenOppfølgingsansvarlig, type Hjelpemiddelformidler, type Levering } from '../interfaces/Leveringinfo'
import { type Bruker } from '../interfaces/Innsenderbehovsmelding'
import UtleveringOppsummering from './UtleveringOppsummering'
import HjelpemiddelFormidler from './HjelpemiddelFormidlerOppsummering'
import OpplæringsAnsvarlig from './OpplæringsAnsvarligOppsummering'

type FormidlerProps = {
  hjelpemiddelformidler: Hjelpemiddelformidler
  annnenOppfølgingsansvarlig: AnnenOppfølgingsansvarlig | undefined
  levering: Levering
  bruker: Bruker
}

const OppfoelgingOgOpplaeringOppsummering: React.FC<FormidlerProps> = (props: FormidlerProps) => {
  const { t } = useTranslation()
  const { hjelpemiddelformidler: formidler, annnenOppfølgingsansvarlig: oppfolgingsansvarlig, levering, bruker } = props

  return (
    <FormSummary>
      <FormSummary.Header>
        <FormSummary.Heading level="2">
          {t('oppsummering.leveringOgOpplaring')}
        </FormSummary.Heading>
      </FormSummary.Header>
      <FormSummary.Answers>
        <OpplæringsAnsvarlig
          formidler={formidler}
          oppfolgingsansvarlig={oppfolgingsansvarlig}
        />
        <HjelpemiddelFormidler formidler={formidler} />
        <UtleveringOppsummering
          levering={levering}
          formidler={formidler}
          bruker={bruker}
        />
      </FormSummary.Answers>
    </FormSummary>
  )
}

export default OppfoelgingOgOpplaeringOppsummering
