import React from 'react'
import { Sidetittel } from 'nav-frontend-typografi'
import '../stylesheet/styles.scss'
import { useTranslation } from 'react-i18next'
import environment from '../environment'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import { Button } from '@navikt/ds-react'

const Banner: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="banner">
      <Sidetittel>{t('dine.hjelpemiddelsoknader')}</Sidetittel>
      <a href={environment.SOKNAD_URL}>
        <Button
          onClick={() => {
            logCustomEvent(digihot_customevents.KLIKK_NY_SØKNAD)
          }}
        >
          Ny Søknad
        </Button>
      </a>
    </div>
  )
}

export default Banner
