import { type Tilbehør } from '../interfaces/Innsenderbehovsmelding'
import { BodyShort, Detail, Heading, Label, Box, FormSummary, Bleed, HStack } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import OpplysningVisning from '../soknad/OpplysningVisning'
import sharedStyles from './FormHeaderShared.module.css'
import { Avstand } from './Avstand'

type Props = {
  tilbehør: Tilbehør
}

const TilbehørVisning = ({ tilbehør }: Props) => {
  const { t } = useTranslation()

  return (
    <FormSummary.Answer>
      <FormSummary.Value>
        <FormSummary.Answers>
          <FormSummary.Answer className={sharedStyles.formheaderAnswer}>
            <FormSummary.Label className="screenreaderOnly">{t('oppsummering.label')}</FormSummary.Label>
            <FormSummary.Value className={sharedStyles.formheaderValue}>
              <Bleed marginInline="4" marginBlock="4 0">
                <Box.New background="brand-blue-soft" borderRadius="large large 0 0" marginBlock="0 4">
                  <div style={{ padding: '1rem' }}>
                    <Detail uppercase>{t('leggTilEllerEndre.tilbehor')}</Detail>
                    <HStack>
                      {/* For store skjermflater */}
                      <Heading
                        level="4"
                        size="small"
                        aria-label={`Hms nummer ${tilbehør.hmsArtNr}`}
                        className="hjelpemiddelinfo-hmsNr desktop-only"
                      >
                        {tilbehør.hmsArtNr}
                      </Heading>

                      <Heading level="4" size="small" className="hjelpemiddelinfo-navn">
                        {tilbehør.navn}
                      </Heading>

                      {/* For små skjermflater */}
                      <span className="sr-only mobile-only">HMS nummer</span>
                      <Label className="hjelpemiddelinfo-hmsNr mobile-only">{tilbehør.hmsArtNr}</Label>

                      <Avstand marginTop={8} />
                      <BodyShort className="hjelpemiddelinfo-antall" data-cy="hjelpemiddel-antall">
                        {t('felles.antallHjelpemidler', { antall: tilbehør.antall })}
                      </BodyShort>
                    </HStack>
                  </div>
                </Box.New>
              </Bleed>
            </FormSummary.Value>
          </FormSummary.Answer>
          <Avstand marginTop={2}>
            {tilbehør.opplysninger.map((opplysning, index) => {
              return <OpplysningVisning opplysning={opplysning} key={index} />
            })}
          </Avstand>
        </FormSummary.Answers>
      </FormSummary.Value>
    </FormSummary.Answer>
  )
}

export default TilbehørVisning
