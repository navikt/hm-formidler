import React from 'react'
import { Tilbehør } from '../interfaces/Innsenderbehovsmelding'
import { BodyShort, Detail, Heading, Tag } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { Avstand } from './Avstand'
import OpplysningVisning from '../soknad/OpplysningVisning'
import Panel from './Panel'


type Props = {
  tilbehør: Tilbehør
}

const TilbehørVisning = ({ tilbehør }: Props) => {
  const { t } = useTranslation()

  return (
    <Panel background="surface-subtle">
      <Detail uppercase>Tilbehør</Detail>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Heading level="4" size="small" style={{ flex: '0 0 5rem' }}>
          {tilbehør.hmsArtNr}
        </Heading>
        <Heading level="4" size="small" style={{ flex: '1', wordBreak: 'break-word' }}>
          {tilbehør.navn}
        </Heading>
        <BodyShort style={{ flex: '0 0 3rem' }} data-cy="hjelpemiddel-antall">
          {t('felles.antallHjelpemidler', { antall: tilbehør.antall })}
        </BodyShort>
      </div>
      <Avstand marginTop={2}>
        {tilbehør.opplysninger.map((opplysning, index) => {
          return <OpplysningVisning opplysning={opplysning} key={index} />
        })}
      </Avstand>
      </Panel>
  )
}

export default TilbehørVisning
