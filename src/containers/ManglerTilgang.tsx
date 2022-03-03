import React from 'react'
import '../stylesheet/styles.scss'
import { Systemtittel } from 'nav-frontend-typografi'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import Banner from '../components/Banner'
import Veilederpanel from 'nav-frontend-veilederpanel'
import * as Sentry from '@sentry/browser'

const ManglerTilgang: React.FC = () => {
  const infoSideTittel = 'Du mangler tilgang til å se dine innsendte digitale søknader'

  Sentry.captureException(new Error('Tmp test for å trigge Sentry i prod-gcp'))

  return (
    <>
      <header>
        <Banner />
      </header>
      <main style={{ paddingTop: '2rem' }}>
        <div className="customPanel">
          <Veilederpanel fargetema="advarsel" type="plakat" svg={<SpotIllustration />}>
            <Systemtittel className="centeredElement">{infoSideTittel}</Systemtittel>
          </Veilederpanel>
        </div>
      </main>
    </>
  )
}

export default ManglerTilgang
