import { Loader } from '@navikt/ds-react'
import React, { useContext } from 'react'
import SoknadsOversikt from '../soknadsoversikt/SoknadsOversikt'
import { ApplicationContext, useRoller } from '../statemanagement/ApplicationContext'
import './../stylesheet/styles.scss'
import ManglerTilgang from './ManglerTilgang'

const Tilgangside: React.FC = () => {
  const { roller } = useContext(ApplicationContext)
  const { harGyldigRolle } = useRoller()

  if (!roller) {
    return (
      <div className="content centeredElement">
        <Loader size="large" />
      </div>
    )
  }

  if (harGyldigRolle) {
    return <SoknadsOversikt />
  }

  return <ManglerTilgang />
}

export default Tilgangside
