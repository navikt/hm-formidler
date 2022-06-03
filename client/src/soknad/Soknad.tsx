import React from 'react'
import { Panel, Heading } from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import BrukerOppsummering from './BrukerOppsummering'
import OppfoelgingOgOpplaeringOppsummering from './OppfoelgingOgOpplaeringOppsummering'
import HjelpemidlerOppsummering from './HjelpemidlerOppsummering'
import UtleveringOppsummering from './UtleveringOppsummering'
import FullmaktOgVilkaarOppsummering from './FullmaktOgVilkaarOppsummering'
import { useTranslation } from 'react-i18next'
import { Soknadsdata } from '../interfaces/SoknadInfo'

type SoknadProps = {
  soknad: Soknadsdata
  behovsmeldingType: string | undefined
}

const Soknad: React.FC<SoknadProps> = (props: SoknadProps) => {
  const { t } = useTranslation()
  const { soknad, behovsmeldingType } = props

  return (
    <div className="customPanel soknadPanel">
      <div>
        <Panel>
          <div className="contentBlock">
            <Heading className="titleCenter" level="2" size="large">
              {behovsmeldingType === 'BESTILLING' ? 'Bestilling' : 'Søknad'}
            </Heading>
          </div>
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
