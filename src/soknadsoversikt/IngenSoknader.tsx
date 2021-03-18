
import React from 'react'
import './../stylesheet/styles.scss'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { ReactComponent as SpotIllustration } from '../assets/svg/ingenSoknader.svg'
import Lenke from 'nav-frontend-lenker'
import Veilederpanel from 'nav-frontend-veilederpanel'

const IngenSoknader = () => {
    const { t } = useTranslation()
  
    return (
        <Veilederpanel type="plakat"  veilederProps={{transparent: true}} svg={<SpotIllustration/>}>
        <Systemtittel className="centeredElement">{t('soknadsoversikt.ingensoknader.tittel')}</Systemtittel>
        <Normaltekst className="centeredElement">{t('soknadsoversikt.ingensoknader')}<Lenke href={t('saksoversikt.href')}>{t('saksoversikt.lenketekst')}</Lenke>{t('saksoversikt.ingensoknader.2')}</Normaltekst>
      </Veilederpanel>
    )
  }

  export default IngenSoknader