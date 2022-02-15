import './../stylesheet/styles.scss'
import { Ingress, Innholdstittel } from 'nav-frontend-typografi'
import { useTranslation } from 'react-i18next'
import Veilederpanel from 'nav-frontend-veilederpanel'
import { ReactComponent as SpotIllustration } from '../assets/svg/information_circle.svg'
import { Knapp } from 'nav-frontend-knapper'
import { useHistory } from 'react-router-dom'
import { BASE_PATH } from '../App'
import { useEffect } from 'react'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'

const Feilside: React.FC = () => {
  const { t } = useTranslation()
  const history = useHistory()

  useEffect(() => {
    logCustomEvent(digihot_customevents.SØKNAD_VISNING_FEILET)

    window.hj =
      window.hj ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        ;(window.hj.q = window.hj.q || []).push(arguments)
      }
    if (window.appSettings.MILJO !== 'labs-gcp' && window.appSettings.MILJO !== 'dev-gcp') {
      window.hj('event', 'digihot_behovsmelding_feilmelding')
    }
  }, [])

  return (
    <>
      <main>
        <div className="customPanel feilside">
          <Veilederpanel type={'plakat'} kompakt svg={<SpotIllustration />}>
            <div className="contentBlock">
              <Innholdstittel className="titleCenter">{t('feilside.ikkeTilgjengelig')}</Innholdstittel>
            </div>
            <div className="contentBlock">
              <div className="contentBlock">
                <Ingress className="centeredElement"> {t('feilside.proevIgjen')}</Ingress>
              </div>
            </div>
            <div className="knappepanel">
              <Knapp onClick={() => history.push({ pathname: `${BASE_PATH}/` })}>{t('kvittering.tilbake')}</Knapp>
            </div>
          </Veilederpanel>
        </div>
      </main>
    </>
  )
}

export default Feilside
