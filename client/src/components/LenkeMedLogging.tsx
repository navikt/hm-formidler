import React from 'react'
import { Link } from '@navikt/ds-react'
import { logNavigeringLenke } from '../utils/amplitude'

type LenkeMedLoggingProps = {
  href: string
  target?: string
  skjemaId: string
  className?: string
  ariaLabel?: string
  children?: React.ReactNode
}

const LenkeMedLogging = (props: LenkeMedLoggingProps) => {
  return (
    <>
      <Link
        href={props.href}
        target={props.target}
        className={props.className}
        onClick={() => {
          logNavigeringLenke(props.skjemaId, props.href)
        }}
      >
        {props.children}
      </Link>
    </>
  )
}

export default LenkeMedLogging
