import React from 'react'
import { Heading, Label, BodyShort, HStack, VStack } from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import EnkelOpplysningVisning from './EnkelOpplysningVisning'
import { Bruker, Brukersituasjon } from '../interfaces/Innsenderbehovsmelding'
import { formaterPersonnavn, formaterVeiadresse } from '../interfaces/CommonTypes'
import { formaterFnr, formaterTlf } from '../Utils'
import FixedWidthLabel from '../components/FixedWidthLabel'
import InfoRow from '../components/InfoRow'

type BrukerProps = {
  bruker: Bruker
  brukersituasjon: Brukersituasjon
}

function BrukerOppsummering(props: BrukerProps) {
  const { t } = useTranslation()
  const { bruker, brukersituasjon } = props

  return (
    <>
    <VStack gap="6" style={{ marginBottom: '2rem' }}>
      <Heading size="medium" level="2">
        {t('oppsummering.hjelpemiddelbruker')}
      </Heading>
      <VStack gap="2">
        <InfoRow 
          label={t('oppsummering.navn')}
          body={formaterPersonnavn(bruker.navn)}
        />
        <InfoRow 
          label={t('felles.fodselsnummer')}
          body={formaterFnr(bruker.fnr)}
        />
        {bruker.veiadresse && (
          <InfoRow 
            label={t('oppsummering.FolkeregistrertAdresse')}
            body={formaterVeiadresse(bruker.veiadresse)}
          />
        )}
        {bruker.telefon && (
          <InfoRow 
            label={t('felles.tlf')}
            body={formaterTlf(bruker.telefon)}
          />
        )}
        {bruker.legacyopplysninger.map((opplysning, index) => (
          <EnkelOpplysningVisning
            key={index}
            enkelOpplysning={opplysning}
            className=""
            ledetekstClassName=""
            innholdClassName=""
          />
        ))}
        <InfoRow 
          label={t('oppsummering.funksjonsnedsettelser')}
          body={brukersituasjon.funksjonsnedsettelser.map((funksjonsnedsettelse) => t(funksjonsnedsettelse)).join(', ')}
        />
        {bruker.brukernummer && (
          <InfoRow 
            label={t('oppsummering.brukernummer')}
            body={bruker.brukernummer}
          />
        )}
      </VStack>
    </VStack>
    <hr aria-hidden="true" />
    </>
  )
}

export default BrukerOppsummering
