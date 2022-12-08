import React from 'react'
import { Route } from 'react-router-dom'
import SoknadsOversikt from './soknadsoversikt/SoknadsOversikt'
import { BASE_PATH } from './App'
import Feilside from './containers/Feilside'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import SoknadVisning from './soknadsoversikt/SoknadVisning'

const Routes: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Route exact path={['/', `${BASE_PATH}/`]}><SettTittel title="helmet.title.forsiden"><SoknadsOversikt /></SettTittel></Route>
      <Route exact path={['/', `${BASE_PATH}/soknad/:soknadsid`]}><SettTittel title="helmet.title.sak"><SoknadVisning /></SettTittel></Route>
      <Route exact path={`${BASE_PATH}/feilside`}><SettTittel title="helmet.title.feilside"><Feilside /></SettTittel></Route>
    </>
  )
}

export default Routes

const SettTittel = ({title, children}: {title: string, children?: React.ReactNode}) => {
    const { t } = useTranslation()
    return (
        <>
            <Helmet htmlAttributes={{ lang: 'no' }}>
                <title>{t(title)}</title>
            </Helmet>
            {children}
        </>
    )
};
