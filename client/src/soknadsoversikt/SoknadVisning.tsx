import React from 'react'
import './../stylesheet/styles.scss'
import useSWRImmutable from 'swr/immutable'
import { API_PATH, fetcher } from '../services/rest-service'
import {Link, Loader} from '@navikt/ds-react'
import { BASE_PATH } from '../App'
import { useHistory, useParams } from 'react-router-dom'
import Soknad from '../soknad/Soknad'
import { Heading } from '@navikt/ds-react'

import { useTranslation } from 'react-i18next'
import SoknadVisningFeil from './SoknadVisningFeil'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import { useEffect } from 'react'
import * as Sentry from '@sentry/browser'
import { Soknadsdata } from '../interfaces/SoknadInfo'
import {Back} from "@navikt/ds-icons";
import {SoknadStatus} from "../statemanagement/SoknadStatus";

interface ParamTypes {
  soknadsid: string
}

const SoknadVisning: React.FC = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const { soknadsid } = useParams<ParamTypes>()
  const { data, error } = useSWRImmutable<{ søknadsdata: Soknadsdata | undefined; navnBruker: string | undefined; behovsmeldingType: string | undefined; status: SoknadStatus | undefined, valgteÅrsaker?: String[] | undefined }>(
    `${API_PATH}/soknad/formidler/${soknadsid}`,
    fetcher
  )

  useEffect(() => {
    logCustomEvent(digihot_customevents.SØKNAD_ÅPNET)
  }, [])

  if (error) {
    Sentry.captureException(new Error(error))
    return <SoknadVisningFeil soknadsid={soknadsid} />
  }
  if (!data)
    return (
      <div className="content centeredElement">
        <Loader size="large" />
      </div>
    )

  const { søknadsdata, navnBruker, behovsmeldingType, status, valgteÅrsaker } = data

  if (!søknadsdata) {
    Sentry.captureMessage(`Vising av søknad ${soknadsid} feilet. Responsen inneholdt ikke søknadsdata.`)
    return <SoknadVisningFeil soknadsid={soknadsid} />
  }

  return (
    <>
      <header>
        <div className="customPanel">
          <Link
              onClick={() => {
                history.push({
                  pathname: `${BASE_PATH}/`,
                })
              }}
              style={{ marginBottom: '0.5rem' }}
              href=""
          >
            <Back title={t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')} />
            {t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')}
          </Link>
        </div>
        <div className="banner" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <Heading level="1" size="xlarge">
            {t('soknadvisning.tittel' + (behovsmeldingType === 'BESTILLING' ? '.bestilling' : ''), { navnBruker })}
          </Heading>
        </div>
      </header>

      <main style={{ paddingTop: '2rem' }}>
        <div className="customPanel">
          <Soknad soknad={søknadsdata} behovsmeldingType={behovsmeldingType} status={status} valgteÅrsaker={valgteÅrsaker} />
        </div>
      </main>
    </>
  )
}

export default SoknadVisning
