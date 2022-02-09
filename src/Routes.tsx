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
      <Helmet htmlAttributes={{ lang: 'no' }}>
        <title>{t('helmet.title')}</title>
      </Helmet>
      <Route exact path={['/', `${BASE_PATH}/`]} component={SoknadsOversikt} />
      <Route exact path={['/', `${BASE_PATH}/soknad/:soknadsid`]} component={SoknadVisning} />
      <Route exact path={`${BASE_PATH}/feilside`} component={Feilside} />
    </>
  )
}

export default Routes
