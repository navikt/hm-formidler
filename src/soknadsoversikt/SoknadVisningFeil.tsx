import React from 'react'
import '../stylesheet/styles.scss'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import { GuidePanel } from '@navikt/ds-react'
import Lenke from 'nav-frontend-lenker'
import Tilbakeknapp from '../components/Tilbakeknapp'
import { useHistory } from 'react-router-dom'
import { BASE_PATH } from '../App'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface SoknadVisningFeilProps {
  soknadsid: string
}

const SoknadVisningFeil: React.FC<SoknadVisningFeilProps> = (props: SoknadVisningFeilProps) => {
  const history = useHistory()
  const { t } = useTranslation()

  const { soknadsid } = props

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
      <main style={{ paddingTop: '2rem' }}>
        <div className="customPanel">
          <Tilbakeknapp
            onClick={() => {
              history.push({
                pathname: `${BASE_PATH}`,
              })
            }}
            style={{ marginBottom: '0.5rem' }}
          >
            {t('soknadsoversikt.soknadVisning.tilbakeTilOversikt')}
          </Tilbakeknapp>
          <GuidePanel poster illustration={<SpotIllustration />} className="warning">
            <Systemtittel className="centeredElement" style={{ marginBottom: '2rem' }}>
              {t('soknadsoversikt.soknadVisningFeil.kanIkkeVise')}
            </Systemtittel>

            <Normaltekst style={{ marginBottom: '0.5rem' }}>
              {t('soknadsoversikt.soknadVisningFeil.vennligstForsok')}
              <Lenke href={`./${soknadsid}`}>{t('soknadsoversikt.soknadVisningFeil.lastInnPaNytt')}</Lenke>
            </Normaltekst>
          </GuidePanel>
        </div>
      </main>
    </>
  )
}

export default SoknadVisningFeil
