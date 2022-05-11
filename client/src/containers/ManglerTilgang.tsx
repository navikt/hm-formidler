import React from 'react'
import '../stylesheet/styles.scss'
import { Heading } from '@navikt/ds-react'

import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import Banner from '../components/Banner'
import { GuidePanel } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'

const ManglerTilgang: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <header>
        <Banner />
      </header>
      <main style={{ paddingTop: '2rem' }}>
        <div className="customPanel">
          <GuidePanel poster illustration={<SpotIllustration />} className="warning">
            <Heading size="medium" level="2" className="centeredElement">
              {t('feilside.manglerTilgang')}
            </Heading>
          </GuidePanel>
        </div>
      </main>
    </>
  )
}

export default ManglerTilgang
