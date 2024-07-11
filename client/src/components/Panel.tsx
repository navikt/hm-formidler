import React from 'react'
import { Box, BoxProps } from '@navikt/ds-react'
import { BackgroundColorToken, SurfaceColorToken } from '@navikt/ds-react/esm/layout/utilities/types'

export interface PanelProps {
  border?: boolean
  background?: BackgroundColorToken | SurfaceColorToken
  children?: React.ReactNode
}

type BorderProps = Pick<BoxProps, 'borderColor' | 'borderWidth'>

const Panel = ({ children, border, ...rest }: PanelProps) => {
  const borderProps: BorderProps | undefined = border
    ? {
        borderColor: 'border-default',
        borderWidth: '1',
      }
    : undefined

  return (
    <Box padding="4" background="bg-default" {...borderProps} {...rest}>
      {children}
    </Box>
  )
}

export default Panel
