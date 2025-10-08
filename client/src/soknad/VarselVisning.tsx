import { Alert, FormSummary } from '@navikt/ds-react'
import { lokaliser } from './OpplysningVisning'
import { type Varsel, Varseltype } from '../interfaces/Innsenderbehovsmelding'
import { useTranslation } from 'react-i18next'

type VarselProps = {
  varsel: Varsel
}

const VarselVisning: React.FC<VarselProps> = ({ varsel }: VarselProps) => {
  const { t } = useTranslation()

  return (
    <FormSummary.Answer>
      <FormSummary.Label className="screenreaderOnly">{t('oppsummering.alert')}</FormSummary.Label>
      <FormSummary.Value>
        <Alert inline variant={varsel.type === Varseltype.INFO ? 'info' : 'warning'}>
          {lokaliser(varsel.tekst)}
        </Alert>
      </FormSummary.Value>
    </FormSummary.Answer>
  )
}

export default VarselVisning
