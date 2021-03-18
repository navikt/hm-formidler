import React from 'react'
import './../stylesheet/styles.scss'
import { Normaltekst, Undertittel } from 'nav-frontend-typografi'
import { SoknadKortInfo } from '../interfaces/SoknadTilGodkjenning'
import { BASE_PATH } from '../App'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { beregnFrist } from '../Utils'
import Etikett from 'nav-frontend-etiketter'
import { LenkepanelBase } from 'nav-frontend-lenkepanel'
import { FileContent } from '@navikt/ds-icons'

type OppgaveProps = {
    soknadTilGodkjenning: SoknadKortInfo
  }

const OppgaveKort = (props: OppgaveProps) => {
    const { t } = useTranslation()
  
    const oppgave = props.soknadTilGodkjenning
    const frist = beregnFrist(oppgave.datoOpprettet)
  
    return (
      <LenkepanelBase href={`${BASE_PATH}/soknad/${oppgave.soknadId}`} border>
        <div className="soknadsKort">
          <div style={{width: "50px"}}>
            <span style={{ fontSize: '1.5rem', paddingRight: '1rem', paddingLeft: '0.5rem' }}>
              <FileContent aria-label="Fil ikon" role="img" focusable="false" />
            </span>
          </div>
          <div style = {{flexGrow: 1}}>
            <Undertittel className="lenkepanel__heading">{t('soknadsoversikt.soknadTittel')}</Undertittel>
            <Normaltekst>
              {t(`Du må bekrefte innen ${frist}`)}
              <br />
              {t(`Fylt ut av ${oppgave.formidlerNavn} på dine vegne`)}
            </Normaltekst>
          </div>
          <div>
            <Etikett type="fokus">
              <Normaltekst>{t(oppgave.status)}</Normaltekst>
            </Etikett>
          </div>
        </div>
      </LenkepanelBase>
    )
  }

  export default OppgaveKort