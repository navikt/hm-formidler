import React from 'react'
import './../stylesheet/styles.scss'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import SoknadKort from './SoknadKort'
import { useTranslation } from 'react-i18next'
import { Button, Heading } from '@navikt/ds-react'
import environment from '../environment'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'

interface Props {
  alleSoknader: SoknadInfo[]
}

const SoknadListe: React.FC<Props> = ({ alleSoknader }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="customPanel">
      <div className="sakerNySakWrapper">
        <Heading level="2" size="small">
          {t('soknadsoversikt.soknadListe.saker')}
        </Heading>
        <a href={environment.SOKNAD_URL}>
          <Button
            variant="secondary"
            onClick={() => {
              logCustomEvent(digihot_customevents.KLIKK_NY_SAK, { steg: -1 })
            }}
          >
            Ny sak
          </Button>
        </a>
      </div>
      {alleSoknader.map((soknad: SoknadInfo) => {
        return (
          <div key={soknad.søknadId}>
            <SoknadKort soknad={soknad} />
          </div>
        )
      })}
    </div>
  )
}

export default SoknadListe
