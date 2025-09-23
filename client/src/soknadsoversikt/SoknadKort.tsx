import { BodyShort, Box, Heading, LinkCard, Tag } from '@navikt/ds-react'
import * as Sentry from '@sentry/browser'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../App'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { beregnFrist, formaterDato, hentTagVariant } from '../Utils'
import { digihot_customevents, logCustomEvent } from '../utils/amplitude'
import './../stylesheet/styles.scss'
import { Avstand } from '../components/Avstand'
import { BehovsmeldingType } from '../interfaces/CommonTypes'

interface Props {
  soknad: SoknadInfo
}

const SoknadKort: React.FC<Props> = ({ soknad }: Props) => {
  const { t } = useTranslation()

  const erSlettet = soknad.status === SoknadStatus.SLETTET || soknad.status === SoknadStatus.UTLØPT

  const panelInnhold = (
    <>
      <LinkCard style={{ border: '1px solid' }}>
        <LinkCard.Title>{soknad.navnBruker ? soknad.navnBruker : soknad.fnrBruker}</LinkCard.Title>

        <LinkCard.Description>
          {soknad.soknadGjelder ?? t(soknad.behovsmeldingType ?? BehovsmeldingType.SØKNAD)}
        </LinkCard.Description>

        <LinkCard.Footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Tag variant={hentTagVariant(soknad.status, soknad.valgteÅrsaker)} size="small">
            {t(soknad.status)}
          </Tag>

          {soknad.status === SoknadStatus.VENTER_GODKJENNING && (
            <BodyShort spacing>
              {t('frist.for.å.bekrefte')} {beregnFrist(soknad.datoOpprettet)}
            </BodyShort>
          )}

          <BodyShort>
            {t('dato.innsendt')} {formaterDato(soknad.datoOpprettet)}
            <span style={{ whiteSpace: 'pre', color: 'var(--ax-border-neutral-subtleA)' }}> | </span>
            {t('dato.oppdatert')} {formaterDato(soknad.datoOppdatert)}
          </BodyShort>
        </LinkCard.Footer>
      </LinkCard>
    </>
  )

  const panelInnholdSlettet = (
    <>
      <Heading size="small" level="3">
        {soknad.navnBruker ? soknad.navnBruker : soknad.fnrBruker}
      </Heading>

      <BodyShort spacing size="small">
        {soknad.soknadGjelder ?? t(soknad.behovsmeldingType ?? BehovsmeldingType.SØKNAD)}
      </BodyShort>

      <Avstand marginBottom={6} />

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
        {t('dato.innsendt')} {formaterDato(soknad.datoOpprettet)}
        <span style={{ whiteSpace: 'pre', color: 'var(--a-border-divider)' }}> | </span>
        {t('dato.oppdatert')} {formaterDato(soknad.datoOppdatert)}
      </BodyShort>
    </>
  )

  return (
    <div style={{ marginBottom: '0.5rem' }}>
      {erSlettet ? (
        <Box.New borderWidth="1" borderRadius="xlarge" padding="4" background="default">
          {panelInnholdSlettet}
        </Box.New>
      ) : (
        <Link
          to={`${BASE_PATH}/soknad/${soknad.søknadId}`}
          onClick={() => {
            Sentry.addBreadcrumb({ message: `Formidler klikket på åpne søknad ${soknad.søknadId}` })
            logCustomEvent(digihot_customevents.KLIKK_ÅPNE_SØKNAD)
          }}
          style={{ textDecoration: 'none' }}
        >
          {panelInnhold}
        </Link>
      )}
    </div>
  )
}

export default SoknadKort
