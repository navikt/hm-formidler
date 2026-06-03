import { type Produktkategori } from '../interfaces/Innsenderbehovsmelding'
import { BodyShort, Heading, Box, FormSummary, Bleed, HStack } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import OpplysningVisning from '../soknad/OpplysningVisning'
import sharedStyles from './FormHeaderShared.module.css'
import { Avstand } from './Avstand'

type Props = {
  produktkategori: Produktkategori
}

const ProduktkategoriVisning = ({ produktkategori }: Props) => {
  const { t } = useTranslation()

  return (
    <FormSummary.Answer>
      <FormSummary.Value>
        <FormSummary.Answers>
          <FormSummary.Answer className={sharedStyles.formheaderAnswer}>
            <FormSummary.Label className="screenreaderOnly">{t('oppsummering.label')}</FormSummary.Label>
            <FormSummary.Value className={sharedStyles.formheaderValue}>
              <Bleed marginInline="space-4" marginBlock="space-4 space-0">
                <Box background="info-soft" borderRadius="12 12 0 0" marginBlock="space-0 space-4">
                  <div style={{ padding: '1rem' }}>
                    <HStack>
                      <Heading level="4" size="small" className="hjelpemiddelinfo-navn">
                        {produktkategori.navn}
                      </Heading>

                      <Avstand marginTop={8} />
                      <BodyShort className="hjelpemiddelinfo-antall" data-cy="hjelpemiddel-antall">
                        {t('felles.antallHjelpemidler', { antall: produktkategori.antall })}
                      </BodyShort>
                    </HStack>
                    <BodyShort>{produktkategori.delkontrakttittel}</BodyShort>
                  </div>
                </Box>
              </Bleed>
            </FormSummary.Value>
          </FormSummary.Answer>
          <Avstand marginTop={2}>
            {produktkategori.opplysninger.map((opplysning, index) => {
              return <OpplysningVisning opplysning={opplysning} key={index} />
            })}
          </Avstand>
        </FormSummary.Answers>
      </FormSummary.Value>
    </FormSummary.Answer>
  );
}

export default ProduktkategoriVisning
