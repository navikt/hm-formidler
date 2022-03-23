import React from 'react'
import './../stylesheet/styles.scss'
import { Normaltekst } from 'nav-frontend-typografi'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import { beregnFrist, formaterDato } from '../Utils'
import Etikett, { EtikettBaseProps } from 'nav-frontend-etiketter'
import { LinkPanel, Panel } from '@navikt/ds-react'
import { BASE_PATH } from '../App'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import * as Sentry from '@sentry/browser'

type SoknadProps = {
  soknadInfo: SoknadInfo
}

const SoknadKort: React.FC<SoknadProps> = (props: SoknadProps) => {
  const { t } = useTranslation()

  const soknad = props.soknadInfo
  let kanViseSoknad = true
  let etikettType: EtikettBaseProps['type']
  switch (soknad.status) {
    case SoknadStatus.SLETTET:
    case SoknadStatus.UTLØPT:
    case SoknadStatus.VEDTAKSRESULTAT_AVSLÅTT:
      etikettType = 'advarsel'
      kanViseSoknad = false
      break
    case SoknadStatus.VENTER_GODKJENNING:
    case SoknadStatus.VEDTAKSRESULTAT_DELVIS_INNVILGET:
      etikettType = 'fokus'
      break
    case SoknadStatus.VEDTAKSRESULTAT_INNVILGET:
    case SoknadStatus.VEDTAKSRESULTAT_MUNTLIG_INNVILGET:
      etikettType = 'suksess'
      break
    case SoknadStatus.GODKJENT:
    case SoknadStatus.GODKJENT_MED_FULLMAKT:
    case SoknadStatus.ENDELIG_JOURNALFØRT:
    case SoknadStatus.VEDTAKSRESULTAT_HENLAGTBORTFALT:
    case SoknadStatus.VEDTAKSRESULTAT_ANNET:
    case SoknadStatus.UTSENDING_STARTET:
    default:
      etikettType = 'info'
  }

  const panelInnhold = (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div className="fontBold">
            <Normaltekst>{soknad.navnBruker ? soknad.navnBruker : soknad.fnrBruker}</Normaltekst>
          </div>
          <Normaltekst>
            {soknad.status === SoknadStatus.VENTER_GODKJENNING
              ? `Frist:  ${beregnFrist(soknad.datoOpprettet)}`
              : formaterDato(soknad.datoOppdatert)}
          </Normaltekst>
        </div>
        <div>
          {/* Legger på margin her for å få etikketter for ikke-klikkbare panel inline vertikalt 
          med etiketter for klikkbare panel (som har en 'chevron next' fra LinkPanel) */}
          <Etikett type={etikettType} style={kanViseSoknad ? {} : { marginRight: '2rem' }}>
            <Normaltekst>{t(soknad.status)}</Normaltekst>
          </Etikett>
        </div>
      </div>
    </>
  )

  if (kanViseSoknad) {
    return (
      <div style={{ marginBottom: '0.5rem' }}>
        <LinkPanel
          href={`${BASE_PATH}/soknad/${soknad.søknadId}`}
          onClick={() => {
            Sentry.addBreadcrumb({ message: `Formidler klikket på åpne søknad ${soknad.søknadId}` })
            logCustomEvent(digihot_customevents.KLIKK_ÅPNE_SØKNAD)
          }}
          border
        >
          {panelInnhold}
        </LinkPanel>
      </div>
    )
  } else {
    return (
      <div style={{ marginBottom: '0.5rem' }}>
        <Panel>{panelInnhold}</Panel>
      </div>
    )
  }
}

export default SoknadKort
