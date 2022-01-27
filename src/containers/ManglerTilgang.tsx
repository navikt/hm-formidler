import '../stylesheet/styles.scss'
import { Systemtittel } from 'nav-frontend-typografi'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import Banner from '../components/Banner'
import Veilederpanel from 'nav-frontend-veilederpanel'

const ManglerTilgang = () => {
  const infoSideTittel = 'Du mangler tilgang til å se dine innsendte digitale søknader'

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
