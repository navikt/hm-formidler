import React from 'react'
import './../stylesheet/styles.scss'
import { Ingress, Heading } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { GuidePanel } from '@navikt/ds-react'
import { ReactComponent as SpotIllustration } from '../assets/svg/information_circle.svg'
import { Button } from '@navikt/ds-react'
import { useHistory } from 'react-router-dom'
import { BASE_PATH } from '../App'

const Feilside: React.FC = () => {
  const { t } = useTranslation()
  const history = useHistory()

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
              <Button variant="secondary" onClick={() => history.push({ pathname: `${BASE_PATH}/` })}>
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
