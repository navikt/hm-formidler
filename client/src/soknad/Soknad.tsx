import React from 'react'
import { Heading, Alert } from '@navikt/ds-react'
import BrukerOppsummering from './BrukerOppsummering'
import OppfoelgingOgOpplaeringOppsummering from './OppfoelgingOgOpplaeringOppsummering'
import HjelpemidlerOppsummering from './HjelpemidlerOppsummering'
import FullmaktOgVilkaarOppsummering from './FullmaktOgVilkaarOppsummering'
import { useTranslation } from 'react-i18next'
import { ValgtÅrsak } from '../interfaces/SoknadInfo'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import { Innsenderbehovsmelding } from '../interfaces/Innsenderbehovsmelding'
import { formaterPersonnavn } from '../interfaces/CommonTypes'
import FunksjonsbeskrivelseOppsummering from './FunksjonsbeskrivelseOppsummering'
import { Avstand } from '../components/Avstand'

type SoknadProps = {
  status: SoknadStatus | undefined
  valgteÅrsaker?: String[] | undefined
  behovsmelding: Innsenderbehovsmelding
  ref: React.ForwardedRef<HTMLDivElement>
}

const Soknad: React.FC<SoknadProps> = React.forwardRef((props: SoknadProps, ref) => {
  const { t } = useTranslation()
  const { status, valgteÅrsaker, behovsmelding } = props

  const erAvvistBestilling = status === SoknadStatus.BESTILLING_AVVIST
  const varDuplikat = valgteÅrsaker && valgteÅrsaker.includes(ValgtÅrsak.DUPLIKAT)
  const brukersNavn = formaterPersonnavn(behovsmelding.bruker.navn)

  return (
    <div className="customPanel soknadPanel">
      {erAvvistBestilling && (
        <Avstand marginBottom={6}>
          <Alert variant={varDuplikat ? 'info' : 'warning'} size="medium">
            <Heading spacing size="xsmall" level="6">
              {t('statuser.bestilling.avvist.heading')}
            </Heading>
            {varDuplikat && <>{t('statuser.bestilling.avvist.årsak.duplikat', { brukersNavn: brukersNavn })}</>}
            {!varDuplikat && <>{t('statuser.bestilling.avvist.årsak.annet')}</>}
          </Alert>
        </Avstand>
      )}
      <div ref={ref}>
        <div className="contentBlock" data-testid="oppsummering">
          <BrukerOppsummering bruker={behovsmelding.bruker} brukersituasjon={behovsmelding.brukersituasjon} />
          <Avstand marginBottom={6} />
          <HjelpemidlerOppsummering
            hjelpemiddelTotalAntall={behovsmelding.hjelpemidler.totaltAntall}
            hjelpemidler={behovsmelding.hjelpemidler.hjelpemidler}
            tilbehør={behovsmelding.hjelpemidler.tilbehør}
            behovsmeldingType={behovsmelding.type}
          />
          <Avstand marginBottom={6} />
          <FunksjonsbeskrivelseOppsummering
            funksjonsbeskrivelse={behovsmelding.brukersituasjon?.funksjonsbeskrivelse ?? undefined}
            brukersituasjon={behovsmelding.brukersituasjon}
            innsender={behovsmelding.innsender}
          />
          <Avstand marginBottom={6} />
          <OppfoelgingOgOpplaeringOppsummering
            hjelpemiddelformidler={behovsmelding.levering.hjelpemiddelformidler}
            annnenOppfølgingsansvarlig={behovsmelding.levering.annenOppfølgingsansvarlig}
            levering={behovsmelding.levering}
            bruker={behovsmelding.bruker}
          />
          <Avstand marginBottom={6} />
          <FullmaktOgVilkaarOppsummering
            bruker={behovsmelding.bruker}
          />
        </div>
      </div>
      <span className="sr-only">{t('oppsummering.soknadSlutt')}</span>
    </div>
  )
})

export default Soknad
