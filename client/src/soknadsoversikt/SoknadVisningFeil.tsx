import React from 'react'
import '../stylesheet/styles.scss'
import { Heading, BodyShort } from '@navikt/ds-react'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import { GuidePanel, Link } from '@navikt/ds-react'
import Tilbakeknapp from '../components/Tilbakeknapp'
import { useHistory } from 'react-router-dom'
import { BASE_PATH } from '../App'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
  soknadsid: string
}

const SoknadVisningFeil = ({ soknadsid }: Props) => {
  const history = useHistory()
  const { t } = useTranslation()

  useEffect(() => {
    logCustomEvent(digihot_customevents.SØKNAD_VISNING_FEILET)
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
            <Heading size="medium" className="centeredElement" style={{ marginBottom: '2rem' }}>
              {t('soknadsoversikt.soknadVisningFeil.kanIkkeVise')}
            </Heading>

            <BodyShort style={{ marginBottom: '0.5rem' }}>
              {t('soknadsoversikt.soknadVisningFeil.vennligstForsok')}
              <Link href={`./${soknadsid}`}>{t('soknadsoversikt.soknadVisningFeil.lastInnPaNytt')}</Link>
            </BodyShort>
          </GuidePanel>
        </div>
      </main>
    </>
  )
}

export default SoknadVisningFeil
