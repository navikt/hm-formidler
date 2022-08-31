import React from 'react'
import { ButtonProps, Button } from '@navikt/ds-react'
import { Back } from '@navikt/ds-icons'

const Tilbakeknapp = ({ children, title = 'Forrige', ...rest }: ButtonProps) => {
  return (
    <Button variant="tertiary" {...rest} aria-label={title} icon={<Back title={title} />} iconPosition="left">
      {children}
    </Button>
  )
}

export default Tilbakeknapp
