import React from 'react'
import './../stylesheet/styles.scss'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import 'nav-frontend-tabell-style'
import { ReactComponent as SpotIllustration } from '../assets/svg/ingenSoknader.svg'
import Veilederpanel from 'nav-frontend-veilederpanel'

const IngenSoknader: React.FC = () => {
  return (
    <div className="customPanel">
      <Veilederpanel type="plakat" veilederProps={{ transparent: true }} svg={<SpotIllustration />}>
        <Systemtittel className="centeredElement">
          Vi finner ingen søknader om hjelpemidler innsendt av deg
        </Systemtittel>
        <Normaltekst className="centeredElement">
          På denne siden kan du få oversikt over digitale søknader du har sendt inn på vegne av brukere.{' '}
        </Normaltekst>
      </Veilederpanel>
    </div>
  )
}

export default IngenSoknader
