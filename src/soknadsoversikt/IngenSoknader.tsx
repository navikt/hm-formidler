import React from 'react'
import './../stylesheet/styles.scss'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import 'nav-frontend-tabell-style'
import { ReactComponent as SpotIllustration } from '../assets/svg/ingenSoknader.svg'
import Veilederpanel from 'nav-frontend-veilederpanel'
import { useTranslation } from 'react-i18next'

const IngenSoknader: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="customPanel">
      <Veilederpanel type="plakat" veilederProps={{ transparent: true }} svg={<SpotIllustration />}>
        <Systemtittel className="centeredElement">{t('soknadsoversikt.ingenSoknader.finnerIngen')}</Systemtittel>
        <Normaltekst className="centeredElement">{t('soknadsoversikt.ingenSoknader.paDenneSiden')} </Normaltekst>
      </Veilederpanel>
    </div>
  )
}

export default IngenSoknader
