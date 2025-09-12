import { Heading } from '@navikt/ds-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import type { SoknadInfo } from '../interfaces/SoknadInfo'
import './../stylesheet/styles.scss'
import SoknadKort from './SoknadKort'

interface Props {
  alleSoknader: SoknadInfo[]
}

const SoknadListe: React.FC<Props> = ({ alleSoknader }: Props) => {
  const { t } = useTranslation()

  return (
    <div className="customPanel">
      <div style={{ marginBottom: '1rem' }}>
        <Heading level="2" size="small">{t('soknadsoversikt.soknadListe.saker')}</Heading>
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
