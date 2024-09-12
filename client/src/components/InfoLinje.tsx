import { ReactNode } from 'react'
import { BodyShort as UnstyledBodyShort } from '@navikt/ds-react'
import styled from 'styled-components'

const BodyShort = styled(UnstyledBodyShort)`
  display: flex;
  flex-direction: column;
`

interface Props {
  overskrift: string | ReactNode
  info: string | ReactNode
}
const InfoLinje = ({ overskrift, info }: Props) => {
  return (
    <BodyShort>
      <b>{overskrift}</b>
      {info}
    </BodyShort>
  )
}

export default InfoLinje
