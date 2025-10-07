import { BodyShort, GuidePanel, Heading } from '@navikt/ds-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import SpotIllustration from '../assets/svg/ingenSoknader.svg?react'
import './../stylesheet/styles.scss'

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
