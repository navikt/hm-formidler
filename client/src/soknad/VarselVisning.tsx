import { Alert } from '@navikt/ds-react'
import { type Varsel, Varseltype } from '../interfaces/Innsenderbehovsmelding'
import { lokaliser } from './OpplysningVisning'

type VarselProps = {
  varsel: Varsel
}

const VarselVisning: React.FC<VarselProps> = ({ varsel }: VarselProps) => {
  return (
    <Alert inline variant={varsel.type === Varseltype.INFO ? 'info' : 'warning'}>
      {lokaliser(varsel.tekst)}
    </Alert>
  )
}

export default VarselVisning
