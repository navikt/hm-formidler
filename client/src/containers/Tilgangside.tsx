import { Loader } from '@navikt/ds-react'
import * as Sentry from '@sentry/browser'
import React, { useContext } from 'react'
import SoknadsOversikt from '../soknadsoversikt/SoknadsOversikt'
import { ApplicationContext, useRoller } from '../statemanagement/ApplicationContext'
import './../stylesheet/styles.scss'
import Feilside from './Feilside'
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

  if (roller.formidlerRolle.feil.length > 0) {
    Sentry.captureMessage(`Feil fra hm-roller for formidlerrolle: <${roller.formidlerRolle.feil}>`)
    return <Feilside />
  }

  if ((roller.bestillerRolle?.feil ?? []).length > 0) {
    Sentry.captureMessage(`Feil fra hm-roller for bestillerrolle: <${roller.bestillerRolle?.feil}>`)
    return <Feilside />
  }

  Sentry.captureMessage(`Innsender mangler tilgang. Respons fra hm-roller<${JSON.stringify(roller)}>`)
  return <ManglerTilgang />
}

export default Tilgangside
