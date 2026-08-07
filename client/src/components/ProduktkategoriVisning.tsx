import { type Produktkategori } from '../interfaces/Innsenderbehovsmelding'
import { BodyShort, Detail, Heading, Label, Box, FormSummary, Bleed, HStack } from '@navikt/ds-react'
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
          {produktkategori.hjelpemidler && produktkategori.hjelpemidler.length > 0 && (
            <Avstand marginTop={2}>
              {produktkategori.hjelpemidler.map((hjelpemiddel, index) => (
                <FormSummary.Answer key={index}>
                  <FormSummary.Value>
                    <FormSummary.Answers>
                      <FormSummary.Answer className={sharedStyles.formheaderAnswer}>
                        <FormSummary.Label className="screenreaderOnly">{t('oppsummering.label')}</FormSummary.Label>
                        <FormSummary.Value className={sharedStyles.formheaderValue}>
                          <Bleed marginInline="space-4" marginBlock="space-4 space-0">
                            <Box background="info-soft" borderRadius="12 12 0 0" marginBlock="space-0 space-4">
                              <div style={{ padding: '1rem' }}>
                                <HStack>
                                  <Heading
                                    level="4"
                                    size="small"
                                    aria-label={`Hms nummer ${hjelpemiddel.hmsArtNr}`}
                                    className="hjelpemiddelinfo-hmsNr desktop-only"
                                  >
                                    {hjelpemiddel.hmsArtNr}
                                  </Heading>
                                  <Heading level="4" size="small" className="hjelpemiddelinfo-navn">
                                    {hjelpemiddel.navn}
                                  </Heading>
                                  <span className="sr-only mobile-only">HMS nummer</span>
                                  <Label className="hjelpemiddelinfo-hmsNr mobile-only">{hjelpemiddel.hmsArtNr}</Label>
                                  <Avstand marginTop={8} />
                                  <BodyShort className="hjelpemiddelinfo-antall" data-cy="hjelpemiddel-antall">
                                    {t('felles.antallHjelpemidler', { antall: hjelpemiddel.antall })}
                                  </BodyShort>
                                </HStack>
                              </div>
                            </Box>
                          </Bleed>
                        </FormSummary.Value>
                      </FormSummary.Answer>
                    </FormSummary.Answers>
                  </FormSummary.Value>
                </FormSummary.Answer>
              ))}
            </Avstand>
          )}
          {produktkategori.tilbehør && produktkategori.tilbehør.length > 0 && (
            <Avstand marginTop={2}>
              {produktkategori.tilbehør.map((tilbehør, index) => (
                <FormSummary.Answer key={index}>
                  <FormSummary.Value>
                    <FormSummary.Answers>
                      <FormSummary.Answer className={sharedStyles.formheaderAnswer}>
                        <FormSummary.Label className="screenreaderOnly">{t('oppsummering.label')}</FormSummary.Label>
                        <FormSummary.Value className={sharedStyles.formheaderValue}>
                          <Bleed marginInline="space-4" marginBlock="space-4 space-0">
                            <Box background="info-soft" borderRadius="12 12 0 0" marginBlock="space-0 space-4">
                              <div style={{ padding: '1rem' }}>
                                <Detail uppercase>{t('leggTilEllerEndre.tilbehor')}</Detail>
                                <HStack>
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
                                  <span className="sr-only mobile-only">HMS nummer</span>
                                  <Label className="hjelpemiddelinfo-hmsNr mobile-only">{tilbehør.hmsArtNr}</Label>
                                  <Avstand marginTop={8} />
                                  <BodyShort className="hjelpemiddelinfo-antall" data-cy="hjelpemiddel-antall">
                                    {t('felles.antallHjelpemidler', { antall: tilbehør.antall })}
                                  </BodyShort>
                                </HStack>
                              </div>
                            </Box>
                          </Bleed>
                        </FormSummary.Value>
                      </FormSummary.Answer>
                      <Avstand marginTop={2}>
                        {tilbehør.opplysninger?.map((opplysning, opplysningIndex) => (
                          <OpplysningVisning opplysning={opplysning} key={opplysningIndex} />
                        ))}
                      </Avstand>
                    </FormSummary.Answers>
                  </FormSummary.Value>
                </FormSummary.Answer>
              ))}
            </Avstand>
          )}
        </FormSummary.Answers>
      </FormSummary.Value>
    </FormSummary.Answer>
  );
}

export default ProduktkategoriVisning
