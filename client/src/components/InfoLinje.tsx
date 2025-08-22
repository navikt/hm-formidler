import { ReactNode } from 'react'
import InfoElement from './InfoElement'
import { BodyShort } from '@navikt/ds-react'

interface Props {
  overskrift: string | ReactNode
  info: string | ReactNode
}
const InfoLinje = ({ overskrift, info }: Props) => {
  return (
    <InfoElement label={typeof overskrift === 'string' ? overskrift : undefined}>
      {typeof overskrift !== 'string' && overskrift}
      <BodyShort>
        {info}
      </BodyShort>
    </InfoElement>
  )
}

export default InfoLinje

