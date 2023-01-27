import React, { useEffect, useState } from 'react'
import './../stylesheet/styles.scss'
import Banner from '../components/Banner'
import useSWR from 'swr'
import { API_PATH, fetcher } from '../services/rest-service'
import { Loader } from '@navikt/ds-react'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import IngenSoknader from './IngenSoknader'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { BASE_PATH } from '../App'
import { useHistory } from 'react-router-dom'
import SoknadsOversiktVeileder from './SoknadsOversiktVeileder'
import SoknadListe from './SoknadListe'
import * as Sentry from '@sentry/browser'
import { ApiError } from '../types/errors'
import { useRoller } from '../statemanagement/ApplicationContext'

const SoknadsOversikt: React.FC = () => {

  const {erFormidler} = useRoller()

  let mswQuery = ''
  if (window.appSettings.USE_MSW) {
    // MSW må vite hvilken rolle brukeren har for å fungere med RolleSwitcher
    mswQuery = `?formidler=${erFormidler}`
  }

  const { data, error } = useSWR<SoknadInfo[]>(`${API_PATH}/soknad/formidler${mswQuery}`, fetcher)
  const history = useHistory()
  const [soknader, setSoknader] = useState<SoknadInfo[] | undefined>(undefined)

  if (error) {
    if (error instanceof ApiError && error.statusCode == 401) {
      // Session expired. Ignore
    } else {
      Sentry.captureException(new Error(error))
      history.push({ pathname: `${BASE_PATH}/feilside` })
    }
  }

  useEffect(() => {
    if (data !== undefined) {
      const venterGodkjenning = data
        .filter((soknad) => {
          return soknad.status === SoknadStatus.VENTER_GODKJENNING
        })
        .sort(function (a, b) {
          return new Date(b.datoOpprettet).getTime() - new Date(a.datoOpprettet).getTime()
        })

      const ikkeVenterGodkjenning = data
        .filter((soknad) => {
          return soknad.status !== SoknadStatus.VENTER_GODKJENNING
        })
        .sort(function (a, b) {
          return new Date(b.datoOppdatert).getTime() - new Date(a.datoOppdatert).getTime()
        })

      const alleSoknader = venterGodkjenning.concat(ikkeVenterGodkjenning)
      Sentry.addBreadcrumb({ message: `Filtrerte ut ${alleSoknader.length} søknader som kan vises for formidler` })
      setSoknader(alleSoknader)
    }
  }, [data])

  if (soknader === undefined)
    return (
      <div className="content centeredElement">
        <Loader size="large" />
      </div>
    )

  return (
    <>
      <header>
        <Banner />
      </header>

      <main style={{ paddingTop: '2rem' }}>
        <SoknadsOversiktVeileder />
        {soknader.length === 0 ? <IngenSoknader /> : <SoknadListe alleSoknader={soknader} />}
      </main>
    </>
  )
}

export default SoknadsOversikt
