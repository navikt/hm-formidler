import React from 'react'
import { Sidetittel } from 'nav-frontend-typografi'
import '../stylesheet/styles.scss'
import { useTranslation } from 'react-i18next'
import environment from '../environment'

const Banner = () => {
  const { t } = useTranslation()

  return (


        <div className="banner">
          <Sidetittel>{t('dine.hjelpemiddelsoknader')}</Sidetittel>
          <a href={environment.SOKNAD_URL} className="knapp knapp--hoved">Ny Søknad</a>
        </div>
  )
}

export default Banner
