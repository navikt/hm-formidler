import { Button, GuidePanel, Heading, Ingress } from '@navikt/ds-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import SpotIllustration from '../assets/svg/information_circle.svg?react'
import './../stylesheet/styles.scss'

const Feilside: React.FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <>
      <main>
        <div className="customPanel feilside">
          <GuidePanel poster illustration={<SpotIllustration />}>
            <div className="contentBlock">
              <Heading size="large" level="1" className="titleCenter">
                {t('feilside.ikkeTilgjengelig')}
              </Heading>
            </div>
            <div className="contentBlock">
              <div className="contentBlock">
                <Ingress className="centeredElement"> {t('feilside.proevIgjen')}</Ingress>
              </div>
            </div>
            <div className="knappepanel">
              <Button variant="secondary" onClick={() => navigate('/')}>
                {t('kvittering.tilbake')}
              </Button>
            </div>
          </GuidePanel>
        </div>
      </main>
    </>
  )
}

export default Feilside
