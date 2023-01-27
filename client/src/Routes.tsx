import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Route } from 'react-router-dom'
import { BASE_PATH } from './App'
import RolleSwitcher from './components/RolleSwitcher'
import Feilside from './containers/Feilside'
import Tilgangside from './containers/Tilgangside'
import SoknadVisning from './soknadsoversikt/SoknadVisning'

const Routes: React.FC = () => {

  return (
    <>
      <Route exact path={['/', `${BASE_PATH}/`]}><SettTittel title="helmet.title.forsiden"><Tilgangside /></SettTittel></Route>
      <Route exact path={['/', `${BASE_PATH}/soknad/:soknadsid`]}><SettTittel title="helmet.title.sak"><SoknadVisning /></SettTittel></Route>
      <Route exact path={`${BASE_PATH}/feilside`}><SettTittel title="helmet.title.feilside"><Feilside /></SettTittel></Route>
    </>
  )
}

export default Routes

const SettTittel = ({ title, children }: { title: string, children?: React.ReactNode }) => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'no' }}>
        <title>{t(title)}</title>
      </Helmet>
      {(window.appSettings.USE_MSW) && <RolleSwitcher />}
      {children}
    </>
  )
};
