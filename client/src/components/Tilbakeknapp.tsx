import React from 'react'
import { ButtonProps, Button } from '@navikt/ds-react'
import { ChevronLeftIcon } from '@navikt/aksel-icons'

const Tilbakeknapp = ({ children, title = 'Forrige', ...rest }: ButtonProps) => {
  return (
    <Button
      variant="tertiary"
      {...rest}
      aria-label={title}
      icon={<ChevronLeftIcon title={title} />}
      iconPosition="left"
    >
      {children}
    </Button>
  )
}

export default Tilbakeknapp
