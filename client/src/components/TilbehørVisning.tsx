import { Tilbehør } from '../interfaces/Innsenderbehovsmelding'
import { BodyShort, Detail, Heading, Box, FormSummary, Bleed, HStack } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { Avstand } from './Avstand'
import OpplysningVisning from '../soknad/OpplysningVisning'
import sharedStyles from './FormHeaderShared.module.css'

type Props = {
  tilbehør: Tilbehør
}

const TilbehørVisning = ({ tilbehør }: Props) => {
  const { t } = useTranslation()

  return (
    <FormSummary.Answer><FormSummary.Value><FormSummary.Answers>
      <FormSummary.Answer className={sharedStyles.formheaderAnswer}>
        <FormSummary.Label className="screenreaderOnly">{t('oppsummering.label')}</FormSummary.Label>
        <FormSummary.Value className={sharedStyles.formheaderValue}>
          <Bleed marginInline="4" marginBlock="4 0">
            <Box.New background="brand-blue-soft" borderRadius="large large 0 0" marginBlock="0 4">
              <div style={{ padding: '1rem' }}>
                <Detail uppercase>{t("leggTilEllerEndre.tilbehor")}</Detail>
                <HStack>
                  <Heading level="4" size="small" style={{ flex: '0 0 5rem' }}>
                    {tilbehør.hmsArtNr}
                  </Heading>
                  <Heading level="4" size="small" style={{ flex: '1', wordBreak: 'break-word' }}>
                    {tilbehør.navn}
                  </Heading>
                  <BodyShort style={{ flex: '0 0 3rem' }} data-cy="hjelpemiddel-antall">
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
    </FormSummary.Answers></FormSummary.Value></FormSummary.Answer>
  )
}

export default TilbehørVisning
