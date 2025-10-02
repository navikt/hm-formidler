import { BodyShort, Box, Detail, Heading } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import type { Tilbehør } from '../interfaces/Innsenderbehovsmelding'
import OpplysningVisning from '../soknad/OpplysningVisning'
import { Avstand } from './Avstand'

type Props = {
  tilbehør: Tilbehør
}

const TilbehørVisning = ({ tilbehør }: Props) => {
  const { t } = useTranslation()

  return (
    <Box.New background="neutral-soft" padding="4" borderRadius="large">
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

      <Avstand marginTop={4}>
        {tilbehør.opplysninger.map((opplysning, index) => {
          return <OpplysningVisning opplysning={opplysning} key={index} />
        })}
      </Avstand>
    </Box.New>
  )
}

export default TilbehørVisning
