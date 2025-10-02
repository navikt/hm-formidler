import { ChevronLeftIcon } from '@navikt/aksel-icons'
import { Button, type ButtonProps } from '@navikt/ds-react'

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
