import React from 'react'
import { BodyShort, VStack, HStack, Spacer, FormSummary } from '@navikt/ds-react'
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
    <>
      {
        tilbehoerListe.map((tilbehør, index) => (
          <FormSummary.Answer key={`tilbehør-${index}`} data-cy="tilbehør-rad">
            <FormSummary.Label>
              {t('leggTilEllerEndre.tilbehor')}
            </FormSummary.Label>
            <FormSummary.Value>
              <VStack style={{ width: '100%' }} >
                <HStack gap="4" justify="space-between" wrap={false}>
                  <BodyShort>{`${tilbehør.hmsArtNr}`}</BodyShort>
                  <BodyShort>{`${tilbehør.navn}`}</BodyShort>
                  <Spacer />
                  <BodyShort data-cy="tilbehør-antall" align="end" style={{ flex: '0 0 4rem' }}>
                    {t('handlekurv.tilbehoer.antall', { antall: tilbehør.antall })}
                  </BodyShort>
                </HStack>
                {tilbehør.begrunnelse && (
                  <Avstand marginTop={4}>
                    <BodyShort spacing weight="semibold">
                      {t('handlekurv.tilbehoer.begrunnelse')}
                    </BodyShort>
                    <BodyShort data-cy="tilbehør-begrunnelse">{tilbehør.begrunnelse}</BodyShort>
                  </Avstand>
                )}
              </VStack>
            </FormSummary.Value>
          </FormSummary.Answer>
        ))}
    </>
  )
}

export default Tilbehoerinfo
