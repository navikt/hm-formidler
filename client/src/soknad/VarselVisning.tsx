import { ReactNode } from 'react'
import { Alert } from '@navikt/ds-react'
import { lokaliser } from './OpplysningVisning'
import { Varsel, Varseltype } from '../interfaces/Formidlerbehovsmelding'

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
