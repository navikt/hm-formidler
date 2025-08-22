import React, { ReactNode } from 'react'
import { BodyShort } from '@navikt/ds-react'
import { Avstand } from './Avstand'

type InfoElementProps = {
  label?: string
  children: ReactNode
}

const InfoElement: React.FC<InfoElementProps> = ({ label, children }) => {
  return (
    <Avstand marginBottom={4}>
      <BodyShort>
        <strong>{label}</strong>
      </BodyShort>
      {children}
    </Avstand>
  )
}

export default InfoElement
