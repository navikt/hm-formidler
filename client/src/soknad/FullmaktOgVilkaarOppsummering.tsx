import React from 'react'
import { Label, BodyShort, FormSummary } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { Bruker, Signaturtype } from '../interfaces/Innsenderbehovsmelding'
import { formaterPersonnavn } from '../interfaces/CommonTypes'
import { Avstand } from '../components/Avstand'

type FullmaktOgVilkaarProps = {
  bruker: Bruker
}

const FullmaktOgVilkaarOppsummering: React.FC<FullmaktOgVilkaarProps> = (props: FullmaktOgVilkaarProps) => {
  const { t } = useTranslation()

  const { bruker } = props

  const brukersNavn = formaterPersonnavn(bruker.navn)

  return (
    <>
      {bruker.signaturtype === Signaturtype.FRITAK_FRA_FULLMAKT && (
        <FormSummary>
          <FormSummary.Header><FormSummary.Heading level="2">{t('oppsummering.fritakFraFullmakt.tittel')}</FormSummary.Heading></FormSummary.Header>
          <FormSummary.Answers>
            <FormSummary.Answer>
              <FormSummary.Label className='screenreaderOnly'>{t('oppsummering.label')}</FormSummary.Label>
              <FormSummary.Value>
                <ul>
                  <li>
                    <BodyShort>{t('oppsummering.fritakFraFullmakt.tekst')}</BodyShort>
                  </li>
                  <li>
                    <BodyShort>{t('oppsummering.brukerErInformertOmRettigheter', { navn: brukersNavn })}</BodyShort>
                  </li>
                </ul>
              </FormSummary.Value>
            </FormSummary.Answer>
          </FormSummary.Answers>
        </FormSummary>
      )}

      {bruker.signaturtype !== Signaturtype.BRUKER_BEKREFTER && (
        <FormSummary>
          <FormSummary.Header><FormSummary.Heading level="2">{t("oppsummering.signatur")}</FormSummary.Heading></FormSummary.Header>
          <FormSummary.Answers>
            {bruker.signaturtype === Signaturtype.FULLMAKT && (
              <FormSummary.Answer>
                <FormSummary.Label className="screenreaderOnly">{t("oppsummering.label")}</FormSummary.Label>
                <FormSummary.Value>
                  <ul>
                    <li>
                      <BodyShort>
                        {t('oppsummering.signertFullmakt', {
                          navn: brukersNavn,
                        })}
                      </BodyShort>
                    </li>
                    <li>
                      <BodyShort>{t('oppsummering.arkivertFullmakt')}</BodyShort>
                    </li>
                  </ul>
                </FormSummary.Value>
              </FormSummary.Answer>
            )}
            {bruker.signaturtype === Signaturtype.IKKE_INNHENTET_FORDI_BYTTE && (
              <FormSummary.Answer>
                <FormSummary.Label>{t('oppsummering.ikkeFullmaktFordiBytte.tittel')}</FormSummary.Label>
                <FormSummary.Value>{t('oppsummering.ikkeFullmaktFordiBytte.tekst')}</FormSummary.Value>
              </FormSummary.Answer>
            )}
            {bruker.signaturtype === Signaturtype.IKKE_INNHENTET_FORDI_KUN_TILBEHØR_V3 && (
              <FormSummary.Answer>
                <FormSummary.Label>{t('bruker.fullmakt.tittel')}</FormSummary.Label>
                <FormSummary.Value>{t('oppsummering.ikkeFullmaktFordiTilbehør.tekst')}</FormSummary.Value>
                <FormSummary.Value>
                  <ul>
                    <li>
                      {t('oppsummering.ikkeFullmaktFordiTilbehør.innbyggerBekrefter')}
                    </li>
                  </ul>
                </FormSummary.Value>
              </FormSummary.Answer>
            )}
          </FormSummary.Answers>
        </FormSummary>
      )}
      <div className="contentBlock">
        <Avstand marginTop={10} />
        <Label spacing>{t('oppsummering.infoOmRettOgPlikt.tittel')}</Label>
        <BodyShort>{t('oppsummering.infoOmRettOgPlikt')}</BodyShort>
      </div>
    </>
  )
}

export default FullmaktOgVilkaarOppsummering
