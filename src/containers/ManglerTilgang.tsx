import React from 'react'
import '../stylesheet/styles.scss'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import Banner from '../components/Banner'
import Veilederpanel from 'nav-frontend-veilederpanel'

type ManglerTilgangProps = {
  harAltInnRettighet: boolean
  harAllowlistTilgang: boolean
}

const ManglerTilgang = (props: ManglerTilgangProps) => {
  const { harAltInnRettighet, harAllowlistTilgang } = props

  const infoSideTittel = 'Du mangler tilgang til å se dine innsendte søknader'

  return (
    <>
      <header>
        <Banner />
      </header>
      <main style={{ paddingTop: '2rem' }}>
        <div className="customPanel">
          <Veilederpanel fargetema="advarsel" type="plakat" svg={<SpotIllustration />}>
            <Systemtittel className="centeredElement">{infoSideTittel}</Systemtittel>
            <VeilederTekst harAltInnRettighet={harAltInnRettighet} harAllowlistTilgang={harAllowlistTilgang} />
          </Veilederpanel>
        </div>
      </main>
    </>
  )
}

const VeilederTekst = (props: ManglerTilgangProps) => {
  const { harAltInnRettighet, harAllowlistTilgang } = props

  if (!harAllowlistTilgang && harAltInnRettighet) {
    return (
      <Normaltekst>
        Ifølge Altinn har du tilgang til å søke om hjelpemidler, men tilgangen er foreløpig ikke godkjent av NAV.
      </Normaltekst>
    )
  } else {
    return <Normaltekst>Ifølge Altinn mangler du tilgang til å søke om hjelpemidler for en kommune</Normaltekst>
  }
}

export default ManglerTilgang
