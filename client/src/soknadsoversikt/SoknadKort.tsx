import { BodyShort, Label, LinkPanel, Panel, Tag, TagProps } from '@navikt/ds-react'
import * as Sentry from '@sentry/browser'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../App'
import { BehovsmeldingType, SoknadInfo, ValgtÅrsak } from '../interfaces/SoknadInfo'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { beregnFrist, formaterDato } from '../Utils'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import './../stylesheet/styles.scss'

interface Props {
  soknad: SoknadInfo
}

const SoknadKort: React.FC<Props> = ({ soknad }: Props) => {
  const { t } = useTranslation()

  let etikettType: TagProps['variant']
  switch (soknad.status) {
    case SoknadStatus.SLETTET:
    case SoknadStatus.UTLØPT:
      etikettType = 'error'
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
    case SoknadStatus.UTSENDING_STARTET:
      etikettType = 'success'
      break
    case SoknadStatus.BESTILLING_AVVIST:
      if (soknad.valgteÅrsaker && soknad.valgteÅrsaker.includes(ValgtÅrsak.DUPLIKAT)) {
        etikettType = 'info'
      } else {
        etikettType = 'warning'
      }
      break
    case SoknadStatus.GODKJENT:
    case SoknadStatus.GODKJENT_MED_FULLMAKT:
    case SoknadStatus.ENDELIG_JOURNALFØRT:
    case SoknadStatus.VEDTAKSRESULTAT_HENLAGTBORTFALT:
    case SoknadStatus.VEDTAKSRESULTAT_ANNET:
    default:
      etikettType = 'info'
  }

  const panelInnhold = (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div className="fontBold">
            <Label>{soknad.navnBruker ? soknad.navnBruker : soknad.fnrBruker}</Label>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <BodyShort>
              {t(soknad.behovsmeldingType ?? BehovsmeldingType.SØKNAD)}
              <span style={{ whiteSpace: 'pre', color: 'gray' }}> | </span>
            </BodyShort>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <BodyShort>
                {soknad.status === SoknadStatus.VENTER_GODKJENNING ? t('frist.for.å.bekrefte') : t('oppdatert')}
                <span style={{ whiteSpace: 'pre' }}>: </span>
              </BodyShort>
              <BodyShort>
                {soknad.status === SoknadStatus.VENTER_GODKJENNING
                  ? beregnFrist(soknad.datoOpprettet)
                  : formaterDato(soknad.datoOppdatert)}
              </BodyShort>
            </div>
          </div>
        </div>
        <div>
          {/* Legger på margin her for å få etikketter for ikke-klikkbare panel inline vertikalt
          med etiketter for klikkbare panel (som har en 'chevron next' fra LinkPanel) */}
          <Tag variant={etikettType} size="small">
            {t(soknad.status)}
          </Tag>
        </div>
      </div>
    </>
  )

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
}

export default SoknadKort
