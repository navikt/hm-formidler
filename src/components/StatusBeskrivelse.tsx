import React from 'react'
import { Normaltekst, Undertittel } from 'nav-frontend-typografi'

type StatusBeskrivelseProps = {
  tittel: string
  beskrivelse: string
}

const StatusBeskrivelse: React.FC<StatusBeskrivelseProps> = (props: StatusBeskrivelseProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Undertittel tag={'h3'}>{props.tittel}</Undertittel>
      <Normaltekst>{props.beskrivelse}</Normaltekst>
    </div>
  )
}

export default StatusBeskrivelse
