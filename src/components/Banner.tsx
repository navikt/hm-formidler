import { Sidetittel } from 'nav-frontend-typografi'
import '../stylesheet/styles.scss'
import { useTranslation } from 'react-i18next'
import environment from '../environment'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'

const Banner: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="banner">
      <Sidetittel>{t('dine.hjelpemiddelsoknader')}</Sidetittel>
      <a
        href={environment.SOKNAD_URL}
        className="knapp knapp--hoved"
        onClick={() => {
          logCustomEvent(digihot_customevents.NY_SØKNAD)
        }}
      >
        Ny Søknad
      </a>
    </div>
  )
}

export default Banner
