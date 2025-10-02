import { Alert, Box, Heading } from '@navikt/ds-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { formaterPersonnavn } from '../interfaces/CommonTypes'
import type { Innsenderbehovsmelding } from '../interfaces/Innsenderbehovsmelding'
import { ValgtÅrsak } from '../interfaces/SoknadInfo'
import { SoknadStatus } from '../statemanagement/SoknadStatus'
import styles from './../stylesheet/oppsummering.module.scss'
import BrukerOppsummering from './BrukerOppsummering'
import FullmaktOgVilkaarOppsummering from './FullmaktOgVilkaarOppsummering'
import FunksjonsbeskrivelseOppsummering from './FunksjonsbeskrivelseOppsummering'
import HjelpemidlerOppsummering from './HjelpemidlerOppsummering'
import OppfoelgingOgOpplaeringOppsummering from './OppfoelgingOgOpplaeringOppsummering'
import UtleveringOppsummering from './UtleveringOppsummering'

type SoknadProps = {
  status: SoknadStatus | undefined
  valgteÅrsaker?: String[] | undefined
  behovsmelding: Innsenderbehovsmelding
  ref: React.ForwardedRef<HTMLDivElement>
}

const Soknad = React.forwardRef<HTMLDivElement, SoknadProps>((props, ref) => {
  const { t } = useTranslation()
  const { status, valgteÅrsaker, behovsmelding } = props

  const erAvvistBestilling = status === SoknadStatus.BESTILLING_AVVIST
  const varDuplikat = valgteÅrsaker && valgteÅrsaker.includes(ValgtÅrsak.DUPLIKAT)
  const brukersNavn = formaterPersonnavn(behovsmelding.bruker.navn)

  return (
    <div className="customPanel soknadPanel">
      {erAvvistBestilling && (
        <div style={{ marginBottom: '1rem' }}>
          <Alert variant={varDuplikat ? 'info' : 'warning'} size="medium">
            <Heading spacing size="xsmall" level="6">
              {t('statuser.bestilling.avvist.heading')}
            </Heading>
            {varDuplikat && <>{t('statuser.bestilling.avvist.årsak.duplikat', { brukersNavn: brukersNavn })}</>}
            {!varDuplikat && <>{t('statuser.bestilling.avvist.årsak.annet')}</>}
          </Alert>
        </div>
      )}
      <div ref={ref}>
        <Box.New className={styles.oppsummeringsBox} borderRadius="large">
          <div className="contentBlock" data-testid="oppsummering">
            <BrukerOppsummering bruker={behovsmelding.bruker} brukersituasjon={behovsmelding.brukersituasjon} />
            <HjelpemidlerOppsummering
              hjelpemiddelTotalAntall={behovsmelding.hjelpemidler.totaltAntall}
              hjelpemidler={behovsmelding.hjelpemidler.hjelpemidler}
              tilbehør={behovsmelding.hjelpemidler.tilbehør}
              behovsmeldingType={behovsmelding.type}
            />
            <OppfoelgingOgOpplaeringOppsummering
              hjelpemiddelformidler={behovsmelding.levering.hjelpemiddelformidler}
              annnenOppfølgingsansvarlig={behovsmelding.levering.annenOppfølgingsansvarlig}
            />
            {!!behovsmelding.brukersituasjon.funksjonsbeskrivelse && (
              <FunksjonsbeskrivelseOppsummering
                funksjonsbeskrivelse={behovsmelding.brukersituasjon.funksjonsbeskrivelse}
              />
            )}
            <UtleveringOppsummering
              levering={behovsmelding.levering}
              formidler={behovsmelding.levering.hjelpemiddelformidler}
              bruker={behovsmelding.bruker}
            />
            <FullmaktOgVilkaarOppsummering
              bruker={behovsmelding.bruker}
              brukersituasjon={behovsmelding.brukersituasjon}
              innsender={behovsmelding.innsender}
            />
          </div>
        </Box.New>
      </div>
      <span className="sr-only">{t('oppsummering.soknadSlutt')}</span>
    </div>
  )
})

export default Soknad
