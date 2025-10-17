import { Loader } from '@navikt/ds-react'
import * as Sentry from '@sentry/browser'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import Banner from '../components/Banner'
import type { SoknadInfo } from '../interfaces/SoknadInfo'
import { API_PATH, fetcher } from '../services/rest-service'
import { useRoller } from '../statemanagement/ApplicationContext'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { ApiError } from '../types/errors'
import './../stylesheet/styles.scss'
import IngenSoknader from './IngenSoknader'
import SoknadListe from './SoknadListe'
import SoknadsOversiktVeileder from './SoknadsOversiktVeileder'

const SoknadsOversikt: React.FC = () => {
  const { erFormidler } = useRoller()

  let mswQuery = ''
  if (window.appSettings.USE_MSW) {
    // MSW må vite hvilken rolle brukeren har for å fungere med RolleSwitcher
    mswQuery = `?formidler=${erFormidler}`
  }

  const { data, error } = useSWR<SoknadInfo[]>(`${API_PATH}/soknad/innsender${mswQuery}`, fetcher)
  const navigate = useNavigate()
  const [soknader, setSoknader] = useState<SoknadInfo[] | undefined>(undefined)

  if (error) {
    if (error instanceof ApiError && error.statusCode == 401) {
      // Session expired. Ignore
    } else {
      Sentry.captureException(new Error(error))
      navigate('/feilside')
    }
  }

  useEffect(() => {
    if (data !== undefined) {
      const venterGodkjenning = data
        .filter((soknad) => {
          return soknad.status === SoknadStatus.VENTER_GODKJENNING
        })
        .sort(function (a, b) {
          // Saker til godkjenning sorteres med kortest frist først (dvs. eldste saker først)
          return new Date(a.datoOpprettet).getTime() - new Date(b.datoOpprettet).getTime()
        })

      const ikkeVenterGodkjenning = data
        .filter((soknad) => {
          return soknad.status !== SoknadStatus.VENTER_GODKJENNING
        })
        .sort(function (a, b) {
          // Saker som IKKE venter på godkjenning sorteres med sist oppdatert først
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
      <div>
        <header>
          <Banner />
        </header>

        <main style={{ paddingTop: '2rem' }}>
          <SoknadsOversiktVeileder />
          {soknader.length === 0 ? <IngenSoknader /> : <SoknadListe alleSoknader={soknader} />}
        </main>
      </div>
    </>
  )
}

export default SoknadsOversikt
