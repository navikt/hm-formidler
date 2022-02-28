import React from 'react'
import './../stylesheet/styles.scss'
import useSWRImmutable from 'swr/immutable'
import { API_PATH, fetcher } from '../services/rest-service'
import NavFrontendSpinner from 'nav-frontend-spinner'
import 'nav-frontend-tabell-style'
import { BASE_PATH } from '../App'
import { useHistory, useParams } from 'react-router-dom'
import Soknad from '../soknad/Soknad'
import { Sidetittel } from 'nav-frontend-typografi'
import { useTranslation } from 'react-i18next'
import { Tilbakeknapp } from 'nav-frontend-ikonknapper'
import SoknadVisningFeil from './SoknadVisningFeil'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import { useEffect } from 'react'
import * as Sentry from '@sentry/browser'

interface ParamTypes {
  soknadsid: string
}

const SoknadVisning: React.FC = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const { soknadsid } = useParams<ParamTypes>()
  const { data, error } = useSWRImmutable(`${API_PATH}/soknad/formidler/${soknadsid}`, fetcher)

  useEffect(() => {
    logCustomEvent(digihot_customevents.SØKNAD_ÅPNET)
  }, [])

  if (error) {
    Sentry.addBreadcrumb({ message: `Vising av søknad ${soknadsid} feilet` })
    Sentry.captureMessage('Dette er en captureMessage()')
    // Sentry.captureException(new Error(error))
    return <SoknadVisningFeil soknadsid={soknadsid} />
  }
  if (!data)
    return (
      <div className="content centeredElement">
        <NavFrontendSpinner type="L" />
      </div>
    )

  const { søknadsdata, navnBruker } = data

  if (!søknadsdata) {
    return <SoknadVisningFeil soknadsid={soknadsid} />
  }

  return (
    <>
      <header>
        <div className="banner" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <Sidetittel>{t('soknadvisning.tittel', { navnBruker })}</Sidetittel>
        </div>
      </header>

      <main style={{ paddingTop: '2rem' }}>
        <div className="customPanel">
          <Tilbakeknapp
            onClick={() => {
              history.push({
                pathname: `${BASE_PATH}`,
              })
            }}
            style={{ marginBottom: '0.5rem' }}
          >
            Tilbake til oversikt
          </Tilbakeknapp>
          <Soknad soknad={søknadsdata} />
        </div>
      </main>
    </>
  )
}

export default SoknadVisning
