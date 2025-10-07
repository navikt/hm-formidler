import { Heading } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import '../stylesheet/styles.scss'

const Banner: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="banner">
      <Heading size="xlarge">{t('dine.hjelpemiddelsaker')}</Heading>
    </div>
  )
}

export default Banner
