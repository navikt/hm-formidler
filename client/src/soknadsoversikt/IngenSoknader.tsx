import React from 'react'
import './../stylesheet/styles.scss'
import { Heading, BodyShort } from '@navikt/ds-react'
import { ReactComponent as SpotIllustration } from '../assets/svg/ingenSoknader.svg'
import { GuidePanel } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'

const IngenSoknader: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="customPanel">
      <GuidePanel poster illustration={<SpotIllustration />}>
        <Heading size="medium" className="centeredElement">
          {t('soknadsoversikt.ingenSoknader.finnerIngen')}
        </Heading>
        <BodyShort className="centeredElement">{t('soknadsoversikt.ingenSoknader.paDenneSiden')} </BodyShort>
      </GuidePanel>
    </div>
  )
}

export default IngenSoknader
