import React from 'react'
import { Heading, BodyShort } from '@navikt/ds-react'

type StatusBeskrivelseProps = {
  tittel: string
  beskrivelse: string
}

const StatusBeskrivelse: React.FC<StatusBeskrivelseProps> = (props: StatusBeskrivelseProps) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Heading size="small" level="3">
        {props.tittel}
      </Heading>
      <BodyShort>{props.beskrivelse}</BodyShort>
    </div>
  )
}

export default StatusBeskrivelse
