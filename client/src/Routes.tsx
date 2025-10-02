import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'
import RolleSwitcher from './components/RolleSwitcher'
import Feilside from './containers/Feilside'
import Tilgangside from './containers/Tilgangside'
import SoknadVisning from './soknadsoversikt/SoknadVisning'

const Routes: React.FC = () => {
  return (
    <ReactRouterRoutes>
      <Route
        path="/"
        element={
          <SettTittel title="helmet.title.forsiden">
            <Tilgangside />
          </SettTittel>
        }
      />
      <Route
        path="/soknad/:soknadsid"
        element={
          <SettTittel title="helmet.title.sak">
            <SoknadVisning />
          </SettTittel>
        }
      />
      <Route
        path="/feilside"
        element={
          <SettTittel title="helmet.title.feilside">
            <Feilside />
          </SettTittel>
        }
      />
    </ReactRouterRoutes>
  )
}

export default Routes

const SettTittel = ({ title, children }: { title: string; children?: React.ReactNode }) => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'no' }}>
        <title>{t(title)}</title>
      </Helmet>
      {window.appSettings.USE_MSW && <RolleSwitcher />}
      {children}
    </>
  )
}
