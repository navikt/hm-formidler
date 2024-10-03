import { BodyShort, Heading, Label } from '@navikt/ds-react'
import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import InfoLinje from './InfoLinje'
import Panel from './Panel'
import Tilbehoerinfo from './Tilbehoerinfo'
import OpplysningVisning from '../soknad/OpplysningVisning'
import VarselVisning from '../soknad/VarselVisning'
import { Hjelpemiddel, UtlevertType } from '../interfaces/Formidlerbehovsmelding'

type HjelpemiddelProps = {
  hm: Hjelpemiddel
}

const Hjelpemiddelinfo: React.FC<HjelpemiddelProps> = (props: HjelpemiddelProps) => {
  const { hm } = props

  const { t } = useTranslation()

  return (
    <Panel background="surface-subtle">
      <div>
        <div>
          <div className="hjelpemiddelinfo">
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

            <Label className="hjelpemiddelinfo-antall">{t('felles.antallHjelpemidler', { antall: hm.antall })}</Label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.5rem' }}>
            <BodyShort>{hm.produkt.sortimentkategori.toUpperCase()}</BodyShort>
          </div>
          {hm.produkt.rangering && (
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.5rem' }}>
              <Label>{t('oppsummering.rangering')} &nbsp;</Label>
              <BodyShort>{hm.produkt.rangering}</BodyShort>
            </div>
          )}
        </div>
      </div>

      {hm.opplysninger.map((opplysning, index) => {
        return <OpplysningVisning opplysning={opplysning} key={index} />
      })}

      {hm.varsler.map((varsel, index) => {
        return <VarselVisning varsel={varsel} key={index} />
      })}

      {hm.bytter.map((bytte, index) => {
        return (
          <div key={index}>
            <InfoLinje
              overskrift={
                <>
                  {bytte.erTilsvarende && <Label>{t('hjelpemiddelinfo.bytte.skalByttesInn')}</Label>}
                  {!bytte.erTilsvarende && <Label>{t('hjelpemiddelinfo.bytte.skalLeveresTilbake')}</Label>}
                </>
              }
              info={
                <>
                  {bytte.hmsnr} {bytte.hjmNavn}
                  {bytte.serienr && (
                    <>
                      <br />
                      {t('felles.serienummer')}: {bytte.serienr}
                    </>
                  )}
                </>
              }
            />

            {bytte.årsak && (
              <InfoLinje
                overskrift={t('hjelpemiddelinfo.bytte.begrunnelseForBytte')}
                info={
                  <>
                    {t('hjelpemiddelinfo.bytte.hjelpemiddeletSkalByttesFordi')}{' '}
                    {t(`hjelpemiddelinfo.bytte.årsak.${bytte.årsak}`)}.
                  </>
                }
              />
            )}
          </div>
        )
      })}

      {hm.tilbehør && hm.tilbehør.length > 0 && <Tilbehoerinfo tilbehoerListe={hm.tilbehør} />}
    </Panel>
  )
}

export default Hjelpemiddelinfo
