import React from 'react'
import './../stylesheet/styles.scss'
import { Normaltekst,Undertittel } from 'nav-frontend-typografi'
import { BASE_PATH } from '../App'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import Etikett from 'nav-frontend-etiketter'
import { LenkepanelBase } from 'nav-frontend-lenkepanel'
import { FileContent } from '@navikt/ds-icons'
import { SoknadKortInfo } from '../interfaces/SoknadTilGodkjenning'

type SoknadProps = {
    soknadTilGodkjenning: SoknadKortInfo
  }

const SoknadKort = (props: SoknadProps) => {
    const { t } = useTranslation()
  
    const soknad = props.soknadTilGodkjenning
    const sistOppdatert = moment(soknad.datoOppdatert).format('DD.MM.YYYY')
    const etikettType = soknad.status === SoknadStatus.SLETTET || soknad.status === SoknadStatus.UTLØPT ? 'advarsel' : 'info'
  
    return (
      <LenkepanelBase href={`${BASE_PATH}/soknad/${soknad.soknadId}`} border>
        <div className="soknadsKort">
          <div>
            <span style={{ fontSize: '1.5rem', paddingRight: '1rem', paddingLeft: '0.5rem' }}>
              <FileContent aria-label="Fil ikon" role="img" focusable="false" />
            </span>
          </div>
          <div>
            <Undertittel className="lenkepanel__heading">{t('soknadsoversikt.soknadTittel')}</Undertittel>
            <Normaltekst>
              {t(`Oppdatert ${sistOppdatert}`)}
              <br />
              {t(`Fylt ut av ${soknad.formidlerNavn} på dine vegne`)}
            </Normaltekst>
          </div>
          <div>
            <Etikett type={etikettType}>
              <Normaltekst>{t(soknad.status)}</Normaltekst>
            </Etikett>
          </div>
        </div>
      </LenkepanelBase>
    )
  }

  export default SoknadKort