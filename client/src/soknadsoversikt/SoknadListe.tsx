import { Button, Heading } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import environment from '../environment'
import type { SoknadInfo } from '../interfaces/SoknadInfo'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import './../stylesheet/styles.scss'
import SoknadKort from './SoknadKort'

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
