import { BodyShort, HStack, Spacer, VStack } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import type { Tilbehør } from '../interfaces/Innsenderbehovsmelding'
import { Avstand } from './Avstand'

type TilbehoerinfoProps = {
  tilbehoerListe: Tilbehør[]
}

const Tilbehoerinfo: React.FC<TilbehoerinfoProps> = (props: TilbehoerinfoProps) => {
  const { t } = useTranslation()
  const { tilbehoerListe } = props

  return (
    <Avstand marginTop={3} marginBottom={3}>
      <BodyShort size="large" weight="semibold" spacing>
        {t('leggTilEllerEndre.tilbehor')}
      </BodyShort>
      <ul style={{ paddingLeft: '0', margin: '0' }} data-cy="tilbehør-liste">
        {tilbehoerListe.map((tlbhr, tilbehorIdx) => (
          <li key={tilbehorIdx} style={{ display: 'flex' }}>
            <VStack style={{ width: '100%' }}>
              <HStack gap="4" justify="space-between" wrap={false}>
                <BodyShort>{`${tlbhr.hmsArtNr}`}</BodyShort>
                <BodyShort>{`${tlbhr.navn}`}</BodyShort>
                <Spacer />
                <BodyShort data-cy="tilbehør-antall" align="end" style={{ flex: '0 0 4rem' }}>
                  {t('handlekurv.tilbehoer.antall', { antall: tlbhr.antall })}
                </BodyShort>
              </HStack>
              {tlbhr.begrunnelse && (
                <Avstand marginTop={6}>
                  <BodyShort spacing weight="semibold">
                    Begrunnelse for tilbehøret
                  </BodyShort>
                  <BodyShort data-cy="tilbehør-begrunnelse">{tlbhr.begrunnelse}</BodyShort>
                </Avstand>
              )}
              {tilbehorIdx < tilbehoerListe.length - 1 && <hr style={{ margin: '.8rem 0' }} />}
            </VStack>
          </li>
        ))}
      </ul>
    </Avstand>
  )
}

export default Tilbehoerinfo
