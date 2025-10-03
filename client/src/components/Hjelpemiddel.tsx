import { BodyShort, Heading, Label, Box, Tag, FormSummary, Bleed, HStack } from '@navikt/ds-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Tilbehoerinfo from './Tilbehoerinfo'
import OpplysningVisning from '../soknad/OpplysningVisning'
import VarselVisning from '../soknad/VarselVisning'
import { Hjelpemiddel } from '../interfaces/Innsenderbehovsmelding'
import { Avstand } from './Avstand'
import Rangering from './Rangering'
import { BehovsmeldingType } from '../interfaces/CommonTypes'
import sharedStyles from './FormHeaderShared.module.css'

type HjelpemiddelProps = {
  hm: Hjelpemiddel
  behovsmeldingType: BehovsmeldingType
}

function tagColor(type: BehovsmeldingType) {
  if (type === BehovsmeldingType.BYTTE) {
    return 'warning'
  }

  if (type === BehovsmeldingType.BESTILLING) {
    return 'success'
  }

  return 'alt1'
}

const Hjelpemiddelinfo: React.FC<HjelpemiddelProps> = (props: HjelpemiddelProps) => {
  const { hm, behovsmeldingType } = props

  const { t } = useTranslation()

  return (
    <FormSummary.Answer><FormSummary.Value><FormSummary.Answers>
      <FormSummary.Answer className={sharedStyles.formheaderAnswer}>
        <FormSummary.Label className="screenreaderOnly">{t('oppsummering.label')}</FormSummary.Label>
        <FormSummary.Value className={sharedStyles.formheaderValue}>
          <Bleed marginInline="4" marginBlock="4 0">
            <Box.New background="brand-blue-soft" borderRadius="large large 0 0" marginBlock="0 4">
              <div style={{ marginTop: '-16px' }}>
                <Tag variant={tagColor(behovsmeldingType)}>{t(`${behovsmeldingType}`)}</Tag>
              </div>
              <div style={{ padding: '1rem' }}>
                <HStack>
                  {/* For store skjermflater */}
                  <Heading
                    level="3"
                    size="small"
                    aria-label={`Hms nummer ${hm.produkt.hmsArtNr}`}
                    className="hjelpemiddelinfo-hmsNr desktop-only"
                  >
                    {hm.produkt.hmsArtNr}
                  </Heading>

                  <Heading level="3" size="small" className="hjelpemiddelinfo-navn">
                    {hm.produkt.artikkelnavn}
                  </Heading>

                  {/* For små skjermflater */}
                  <span className="sr-only mobile-only">HMS nummer</span>
                  <Label className="hjelpemiddelinfo-hmsNr mobile-only">{hm.produkt.hmsArtNr}</Label>

                  <Avstand marginTop={8} />
                  <BodyShort className="hjelpemiddelinfo-antall">
                    {t('felles.antallHjelpemidler', { antall: hm.antall })}
                  </BodyShort>
                </HStack>
                <HStack>
                  <BodyShort>{hm.produkt.sortimentkategori.toUpperCase()}</BodyShort>
                </HStack>
                {hm.produkt.rangering && (
                  <Avstand marginTop={2}>
                    <Rangering rangering={hm.produkt.rangering.toString()} />
                  </Avstand>
                )}
              </div>
            </Box.New>
          </Bleed>
        </FormSummary.Value>
      </FormSummary.Answer>

      {hm.opplysninger.map((opplysning, index) => {
        return <OpplysningVisning opplysning={opplysning} key={index} />
      })}

      {hm.varsler.map((varsel, index) => {
        return <VarselVisning varsel={varsel} key={index} />
      })}

      {hm.bytter.map((bytte, index) => {
        return (
          <React.Fragment key={index}>
            <FormSummary.Answer>
              {bytte.erTilsvarende && <FormSummary.Label>{t('hjelpemiddelinfo.bytte.skalByttesInn')}</FormSummary.Label>}
              {!bytte.erTilsvarende && <FormSummary.Label>{t('hjelpemiddelinfo.bytte.skalLeveresTilbake')}</FormSummary.Label>}
              <FormSummary.Value>
                {bytte.hmsnr} {bytte.hjmNavn}
                {bytte.serienr && (
                  <>
                    <br />
                    {t('felles.serienummer')}: {bytte.serienr}
                  </>
                )}
              </FormSummary.Value>
            </FormSummary.Answer>

            {bytte.årsak && (
              <FormSummary.Answer>
                <FormSummary.Label>{t('hjelpemiddelinfo.bytte.begrunnelseForBytte')}</FormSummary.Label>
                <FormSummary.Value>
                  {t('hjelpemiddelinfo.bytte.hjelpemiddeletSkalByttesFordi')}{' '}
                  {t(`hjelpemiddelinfo.bytte.årsak.${bytte.årsak}`)}.
                </FormSummary.Value>
              </FormSummary.Answer>
            )}
          </React.Fragment>
        )
      })}

      {hm.tilbehør && hm.tilbehør.length > 0 && <Tilbehoerinfo tilbehoerListe={hm.tilbehør} />}

    </FormSummary.Answers></FormSummary.Value></FormSummary.Answer>
  )
}

export default Hjelpemiddelinfo
