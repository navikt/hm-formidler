import React from 'react'
import './../stylesheet/styles.scss'
import { Normaltekst } from 'nav-frontend-typografi'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import Etikett from 'nav-frontend-etiketter'
import { SoknadInfo } from '../interfaces/SoknadInfo'

type SoknadProps = {
    soknadInfo: SoknadInfo
  }

const SoknadKort = (props: SoknadProps) => {
    const { t } = useTranslation()

    const soknad = props.soknadInfo
    const sistOppdatert = moment(soknad.datoOpprettet).format('DD.MM.YYYY')
    const etikettType = soknad.status === SoknadStatus.SLETTET || soknad.status === SoknadStatus.UTLØPT ? 'advarsel' : 'info'

    return (
      <div className="contentBlock">
        <div className="soknadsKort">
          <div>
            <Normaltekst>
              {t(`${soknad.navnBruker}`)}
            </Normaltekst>
          </div>
          <div>
            <Normaltekst>
              {t(`Frist ${sistOppdatert} + 2 uker`)}
            </Normaltekst>
          </div>
          <div>
            <Etikett type={etikettType}>
              <Normaltekst>{t(soknad.status)}</Normaltekst>
            </Etikett>
          </div>
        </div>
      </div>
    )
  }

  export default SoknadKort
