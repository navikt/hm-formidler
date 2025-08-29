import { Label } from '@navikt/ds-react'
import styled from 'styled-components'

interface Props {
  width?: number
}

const FixedWidthLabel = styled(Label)<Props>`
  width: ${(props) => (props.width ? props.width : '12')}em;
  flex-shrink: 0;
`
export default FixedWidthLabel
