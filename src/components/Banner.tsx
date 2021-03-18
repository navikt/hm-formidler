import React from 'react'
import { Sidetittel } from 'nav-frontend-typografi'
import '../stylesheet/styles.scss'
import { useTranslation } from 'react-i18next'
import { Soknadsside } from '../interfaces/CommonTypes'

type BannerProps = {
  soknadsside?: Soknadsside
}

const Banner = (props: BannerProps) => {
  const { t } = useTranslation()

  const tittel = props.soknadsside === Soknadsside.Soknadsoversikt ? t('dine.hjelpemidler') : t('banner.tekst')

  return (
        <div className="banner centeredElement">
          <Sidetittel>{tittel}</Sidetittel>
        </div>
  )
}

export default Banner
