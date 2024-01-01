import {ReactNode} from "react";
import {BodyShort as UnstyledBodyShort } from "@navikt/ds-react";
import styled from "styled-components";

const BodyShort = styled(UnstyledBodyShort)`
  display: flex;
  flex-direction: column;
`

interface Props {
  overskrift: string | ReactNode
  info: string | ReactNode
  gammelStil?: boolean
}
const InfoLinje = ({
  overskrift,
  info,
  gammelStil = true
}: Props) => {
  if (gammelStil) {
    return (
      <UnstyledBodyShort>
        <b>{overskrift}</b>:
        {info}
      </UnstyledBodyShort>
    )
  }
  return (
    <BodyShort>
      <b>{overskrift}</b>
      {info}
    </BodyShort>
  )
}

export default InfoLinje
