import React from 'react'
import './../stylesheet/styles.scss'
import { Undertittel } from 'nav-frontend-typografi'
import 'nav-frontend-tabell-style'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import SoknadKort from './SoknadKort'
import { useTranslation } from 'react-i18next'

type SoknadListeProps = {
  alleSoknader: SoknadInfo[]
}

const SoknadListe: React.FC<SoknadListeProps> = (props: SoknadListeProps) => {
  const { t } = useTranslation()
  const { alleSoknader } = props
  return (
    <div className="customPanel">
      <div style={{ marginBottom: '1rem' }}>
        <Undertittel>{t('soknadsoversikt.soknadListe.utfylteSoknader')}</Undertittel>
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
