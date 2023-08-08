import { BodyShort, Heading, LinkPanel, Tag, TagProps } from '@navikt/ds-react'
import * as Sentry from '@sentry/browser'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../App'
import { BehovsmeldingType, SoknadInfo } from '../interfaces/SoknadInfo'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { beregnFrist, formaterDato, hentTagVariant } from '../Utils'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import './../stylesheet/styles.scss'
import { Avstand } from '../components/Avstand'

interface Props {
  soknad: SoknadInfo
}

const SoknadKort: React.FC<Props> = ({ soknad }: Props) => {
  const { t } = useTranslation()

  // let etikettType: TagProps['variant']
  // switch (soknad.status) {
  //   case SoknadStatus.SLETTET:
  //   case SoknadStatus.UTLØPT:
  //     etikettType = 'error'
  //     break
  //   case SoknadStatus.VEDTAKSRESULTAT_AVSLÅTT:
  //     etikettType = 'error'
  //     break
  //   case SoknadStatus.VENTER_GODKJENNING:
  //   case SoknadStatus.VEDTAKSRESULTAT_DELVIS_INNVILGET:
  //     etikettType = 'warning'
  //     break
  //   case SoknadStatus.VEDTAKSRESULTAT_INNVILGET:
  //   case SoknadStatus.VEDTAKSRESULTAT_MUNTLIG_INNVILGET:
  //   case SoknadStatus.BESTILLING_FERDIGSTILT:
  //   case SoknadStatus.UTSENDING_STARTET:
  //     etikettType = 'success'
  //     break
  //   case SoknadStatus.BESTILLING_AVVIST:
  //     if (soknad.valgteÅrsaker && soknad.valgteÅrsaker.includes(ValgtÅrsak.DUPLIKAT)) {
  //       etikettType = 'info'
  //     } else {
  //       etikettType = 'warning'
  //     }
  //     break
  //   case SoknadStatus.GODKJENT:
  //   case SoknadStatus.GODKJENT_MED_FULLMAKT:
  //   case SoknadStatus.ENDELIG_JOURNALFØRT:
  //   case SoknadStatus.VEDTAKSRESULTAT_HENLAGTBORTFALT:
  //   case SoknadStatus.VEDTAKSRESULTAT_ANNET:
  //   default:
  //     etikettType = 'info'
  // }

  const panelInnhold = (
    <>
      <Heading size="small" level="3">
        {soknad.navnBruker ? soknad.navnBruker : soknad.fnrBruker}
      </Heading>

      <BodyShort spacing size="small">
        {t(soknad.behovsmeldingType ?? BehovsmeldingType.SØKNAD)}
      </BodyShort>

      <Tag variant={hentTagVariant(soknad.status, soknad.valgteÅrsaker)} size="small">
        {t(soknad.status)}
      </Tag>

      <Avstand marginBottom={2} />

      {soknad.status === SoknadStatus.VENTER_GODKJENNING && (
        <BodyShort spacing>
          {t('frist.for.å.bekrefte')} {beregnFrist(soknad.datoOpprettet)}
        </BodyShort>
      )}

      <BodyShort>
        Innsendt {formaterDato(soknad.datoOpprettet)}
        <span style={{ whiteSpace: 'pre', color: 'var(--a-border-divider)' }}> | </span>
        Sist oppdatert {formaterDato(soknad.datoOppdatert)}
      </BodyShort>
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
