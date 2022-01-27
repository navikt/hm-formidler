import { Normaltekst, Undertittel } from 'nav-frontend-typografi'

type StatusBeskrivelseProps = {
  tittel: string
  beskrivelse: string
}

const StatusBeskrivelse = (props: StatusBeskrivelseProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Undertittel tag={'h3'}>{props.tittel}</Undertittel>
      <Normaltekst>{props.beskrivelse}</Normaltekst>
    </div>
  )
}

export default StatusBeskrivelse
