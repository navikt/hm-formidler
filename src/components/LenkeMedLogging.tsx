import React from 'react'
import Lenke from 'nav-frontend-lenker'
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
      <Lenke
        href={props.href}
        target={props.target}
        className={props.className}
        ariaLabel={props.ariaLabel}
        onClick={() => {
          logNavigeringLenke(props.skjemaId, props.href)
        }}
      >
        {props.children}
      </Lenke>
    </>
  )
}

export default LenkeMedLogging
