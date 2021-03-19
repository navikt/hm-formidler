import React from 'react'
import { Sidetittel } from 'nav-frontend-typografi'
import '../stylesheet/styles.scss'
import { useTranslation } from 'react-i18next'

const Banner = () => {
  const { t } = useTranslation()

  return (
        <div className="banner centeredElement">
          <Sidetittel>{t('dine.hjelpemiddelsoknader')}</Sidetittel>
        </div>
  )
}

export default Banner
