import { BodyShort, GuidePanel, Heading, Link } from '@navikt/ds-react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import SpotIllustration from '../assets/svg/illu_veileder_HMS.svg?react'
import Tilbakeknapp from '../components/Tilbakeknapp'
import '../stylesheet/styles.scss'
import { DIGIHOT_TAXONOMY, logEvent } from '../utils/analytics'

interface Props {
  soknadsid: string
}

const SoknadVisningFeil = ({ soknadsid }: Props) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    logEvent(DIGIHOT_TAXONOMY.SØKNAD_VISNING_FEILET)
  }, [])

  return (
    <>
      <main style={{ paddingTop: '2rem' }}>
        <div className="customPanel">
          <Tilbakeknapp
            onClick={() => {
              navigate('/')
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
