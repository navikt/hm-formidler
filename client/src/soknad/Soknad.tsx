import React from 'react'
import {Panel, Heading, Alert} from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import BrukerOppsummering from './BrukerOppsummering'
import OppfoelgingOgOpplaeringOppsummering from './OppfoelgingOgOpplaeringOppsummering'
import HjelpemidlerOppsummering from './HjelpemidlerOppsummering'
import UtleveringOppsummering from './UtleveringOppsummering'
import FullmaktOgVilkaarOppsummering from './FullmaktOgVilkaarOppsummering'
import { useTranslation } from 'react-i18next'
import {BehovsmeldingType, Soknadsdata, ValgtÅrsak} from '../interfaces/SoknadInfo'
import {SoknadStatus} from "../statemanagement/SoknadStatus";

type SoknadProps = {
  soknad: Soknadsdata
  behovsmeldingType: string | undefined
  status: SoknadStatus | undefined
  valgteÅrsaker?: String[] | undefined
}

const Soknad: React.FC<SoknadProps> = (props: SoknadProps) => {
  const { t } = useTranslation()
  const { soknad, status, valgteÅrsaker } = props

  const erAvvistBestilling = status === SoknadStatus.BESTILLING_AVVIST
  const varDuplikat = valgteÅrsaker && valgteÅrsaker.includes(ValgtÅrsak.DUPLIKAT)
  const brukersNavn = `${soknad.bruker.fornavn} ${soknad.bruker.etternavn}`

  return (
    <div className="customPanel soknadPanel">
      {erAvvistBestilling && (
        <div style={{ marginBottom: '1rem' }}>
          <Alert variant={varDuplikat ? 'info' : 'warning'} size="medium">
            <Heading spacing size="xsmall" level="6">
              {t('statuser.bestilling.avvist.heading')}
            </Heading>
            {varDuplikat && (
              <>{t('statuser.bestilling.avvist.årsak.duplikat', {brukersNavn: brukersNavn})}</>
            )}
            {!varDuplikat && (
              <>{t('statuser.bestilling.avvist.årsak.annet')}</>
            )}
          </Alert>
        </div>
      )}
      <div>
        <Panel>
          <div className="contentBlock" data-testid="oppsummering">
            <BrukerOppsummering bruker={soknad.bruker} />
            {
              <HjelpemidlerOppsummering
                hjelpemidler={soknad.hjelpemidler}
                hjelpemiddelTotalAntall={soknad.hjelpemiddelTotalAntall}
                kroppsmaal={soknad.bruker.kroppsmaal}
              />
            }
            {
              <OppfoelgingOgOpplaeringOppsummering
                formidler={soknad.formidler}
                oppfolgingsansvarlig={soknad.oppfolgingsansvarlig}
              />
            }
            {<UtleveringOppsummering levering={soknad.levering} formidler={soknad.formidler} bruker={soknad.bruker} />}
            {<FullmaktOgVilkaarOppsummering bruker={soknad.bruker} />}
          </div>
        </Panel>
      </div>
      <span className="sr-only">{t('oppsummering.soknadSlutt')}</span>
    </div>
  )
}

export default Soknad
