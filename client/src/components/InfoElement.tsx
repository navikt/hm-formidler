import { BodyShort } from '@navikt/ds-react'
import type { ReactNode } from 'react'
import { Avstand } from './Avstand'

type InfoElementProps = {
  label?: string
  children: ReactNode
}

const InfoElement: React.FC<InfoElementProps> = ({ label, children }) => {
  return (
    <Avstand marginBottom={6}>
      <BodyShort weight="semibold">{label}</BodyShort>
      {children}
    </Avstand>
  )
}

export default InfoElement
