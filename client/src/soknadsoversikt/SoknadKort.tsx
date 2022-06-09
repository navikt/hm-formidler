import { BodyShort, LinkPanel, Panel, Tag, TagProps } from "@navikt/ds-react";
import * as Sentry from "@sentry/browser";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BASE_PATH } from "../App";
import { SoknadInfo, ValgtÅrsak } from "../interfaces/SoknadInfo";
import { SoknadStatus } from "../statemanagement/SoknadStatus";
import { beregnFrist, formaterDato } from "../Utils";
import { digihot_customevents, logCustomEvent } from "../utils/amplitude";
import "./../stylesheet/styles.scss";

interface Props {
  soknad: SoknadInfo
}

const SoknadKort: React.FC<Props> = ({ soknad }: Props) => {
  const { t } = useTranslation()

  let kanViseSoknad = true
  let etikettType: TagProps['variant']
  switch (soknad.status) {
    case SoknadStatus.SLETTET:
    case SoknadStatus.UTLØPT:
      etikettType = 'error'
      kanViseSoknad = false
      break
    case SoknadStatus.VEDTAKSRESULTAT_AVSLÅTT:
      etikettType = 'error'
      break
    case SoknadStatus.VENTER_GODKJENNING:
    case SoknadStatus.VEDTAKSRESULTAT_DELVIS_INNVILGET:
      etikettType = 'warning'
      break
    case SoknadStatus.VEDTAKSRESULTAT_INNVILGET:
    case SoknadStatus.VEDTAKSRESULTAT_MUNTLIG_INNVILGET:
    case SoknadStatus.BESTILLING_FERDIGSTILT:
      etikettType = 'success'
      break
    case SoknadStatus.BESTILLING_AVVIST:
      if (soknad.valgteÅrsaker && soknad.valgteÅrsaker.includes(ValgtÅrsak.DUPLIKAT)) {
        etikettType = 'info'
      }
      else {
        etikettType = 'warning'
      }
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
            <BodyShort>{soknad.navnBruker ? soknad.navnBruker : soknad.fnrBruker}</BodyShort>
          </div>
          <BodyShort>
            {soknad.status === SoknadStatus.VENTER_GODKJENNING
              ? `Frist:  ${beregnFrist(soknad.datoOpprettet)}`
              : formaterDato(soknad.datoOppdatert)}
          </BodyShort>
        </div>
        <div>
          {/* Legger på margin her for å få etikketter for ikke-klikkbare panel inline vertikalt
          med etiketter for klikkbare panel (som har en 'chevron next' fra LinkPanel) */}
          <Tag variant={etikettType} style={kanViseSoknad ? {} : { marginRight: '2rem' }}>
            <BodyShort>{t(soknad.status)}</BodyShort>
          </Tag>
        </div>
      </div>
    </>
  )

  if (kanViseSoknad) {
    return (
      <div style={{ marginBottom: '0.5rem' }}>
        <LinkPanel
          as={Link}
          to={`${BASE_PATH}/soknad/${soknad.søknadId}`}
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
