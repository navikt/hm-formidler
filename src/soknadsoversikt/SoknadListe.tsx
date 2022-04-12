import React from 'react'
import './../stylesheet/styles.scss'
import 'nav-frontend-tabell-style'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import SoknadKort from './SoknadKort'
import { useTranslation } from 'react-i18next'
import { Heading } from '@navikt/ds-react'

type SoknadListeProps = {
  alleSoknader: SoknadInfo[]
}

const SoknadListe: React.FC<SoknadListeProps> = (props: SoknadListeProps) => {
  const { t } = useTranslation()
  const { alleSoknader } = props
  return (
    <div className="customPanel">
      <div style={{ marginBottom: '1rem' }}>
        <Heading size="small">{t('soknadsoversikt.soknadListe.utfylteSoknader')}</Heading>
      </div>
      {alleSoknader.map((soknad: SoknadInfo) => {
        return (
          <div key={soknad.søknadId}>
            <SoknadKort soknadInfo={soknad} />
          </div>
        )
      })}
    </div>
  )
}

export default SoknadListe
