import React from 'react'
import '../stylesheet/styles.scss'
import { useTranslation } from 'react-i18next'
import environment from '../environment'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import { Button, Heading } from '@navikt/ds-react'

const Banner: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="banner">
      <Heading size="xlarge">{t('dine.hjelpemiddelsoknader')}</Heading>
      <a href={environment.SOKNAD_URL}>
        <Button
          onClick={() => {
            logCustomEvent(digihot_customevents.KLIKK_NY_SØKNAD, { steg: -1 })
          }}
        >
          Ny Søknad
        </Button>
      </a>
    </div>
  )
}

export default Banner
