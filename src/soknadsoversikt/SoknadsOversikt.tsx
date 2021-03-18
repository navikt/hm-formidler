import React from 'react'
import './../stylesheet/styles.scss'
import Banner from '../components/Banner'
import { Systemtittel } from 'nav-frontend-typografi'
import Panel from 'nav-frontend-paneler'
import useSWR from 'swr'
import { API_PATH, fetcher } from '../services/rest-service'
import NavFrontendSpinner from 'nav-frontend-spinner'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { Soknadsside } from '../interfaces/CommonTypes'
import SoknadKort from './SoknadKort'
import { SoknadKortInfo } from '../interfaces/SoknadTilGodkjenning'
import IngenSoknader from './IngenSoknader'

const SoknadsOversikt = () => {
  const { data, error } = useSWR(`${API_PATH}/soknad/bruker`, fetcher)

  if (error) return <div>Noe gikk feil: {error}</div>
  if (!data)
    return (
      <div className="content centeredElement">
        <NavFrontendSpinner type="L" />
      </div>
    )

  return (
    <>
      <header>
        <Banner soknadsside={Soknadsside.Soknadsoversikt} />
      </header>

      <main style={{ paddingTop: '4rem' /*, backgroundColor: '#F2F2F2'*/ }}>
        <div className="customPanel" >
            {data.length === 0 ? <IngenSoknader/> :
            (<><Saker soknaderTilGodkjenning={data} /></>)}

        </div>
      </main>
    </>
  )
}

type SoknaderProps = {
  soknaderTilGodkjenning: SoknadKortInfo[]
}


const Saker = (props: SoknaderProps) => {
  const { t } = useTranslation()

  const soknader = props.soknaderTilGodkjenning

  if (soknader.length === 0) {
    return null
  }

  return (
    <Panel border>
      <Systemtittel style={{ color: '#3E3832', paddingBottom: '2rem' }}>{t('soknadsoversikt.utfylteSoknader')}</Systemtittel>
      {soknader.map(function (sak, idx) {
        return <SoknadKort key={idx} soknadTilGodkjenning={sak} />
      })}
    </Panel>
  )
}

export default SoknadsOversikt
