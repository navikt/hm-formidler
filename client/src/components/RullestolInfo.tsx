import React from 'react'
import { HendelPlassering, HjelpemiddelItem } from '../interfaces/CommonTypes'
import { BodyShort, Label } from '@navikt/ds-react'
import { Trans, useTranslation } from 'react-i18next'
import { Kategori } from '../soknad/kategorier'

type RullestolInfoProps = {
  hm: HjelpemiddelItem
}

export const RullestolInfo: React.FC<RullestolInfoProps> = (props: RullestolInfoProps) => {
  const { t } = useTranslation()
  const { hm  } = props
  return (
    <>
      {hm.rullestolInfo?.skalBrukesIBil && (
        <div>
          <Label style={{ display: 'inline' }}>{t('rullestol.bil.tittel')}</Label>
          <BodyShort style={{ display: 'inline' }}>{t('rullestol.bil.skalBrukesIBil')}</BodyShort>
        </div>
      )}
      {hm.hjelpemiddelkategori === Kategori.ManuelleRullestoler && (
        <>
          {hm.rullestolInfo?.sitteputeValg && (
            <div>
              <Label style={{ display: 'inline' }}>{t('leggTilEllerEndre.rullestol.sittepute:')}</Label>
              <BodyShort style={{ display: 'inline' }}>{t(hm.rullestolInfo.sitteputeValg)}</BodyShort>
            </div>
          )}
        </>
      )}
      {hm.hjelpemiddelkategori === Kategori.ElektriskeRullestoler && (
        <>
          {!!hm.elektriskRullestolInfo?.kabin && (
            <>
              {hm.elektriskRullestolInfo.kabin.brukerOppfyllerKrav === true && (
                <>
                  <div>
                    <Label style={{ display: 'inline' }}>
                      {t('leggTilEllerEndre.elRullestol.kabin.behovForKabin')}:{' '}
                    </Label>
                    <BodyShort style={{ display: 'inline' }}>
                      {t('leggTilEllerEndre.elRullestol.kabin.oppfyllerKravForKabin.ja')}
                    </BodyShort>
                  </div>

                  <div>
                    <Label style={{ display: 'inline' }}>
                      {t('leggTilEllerEndre.elRullestol.kabin.enklereLøsningErVurdert')}:{' '}
                    </Label>
                    <BodyShort style={{ display: 'inline' }}>
                      {hm.elektriskRullestolInfo.kabin.kanIkkeAvhjelpesMedEnklereBegrunnelse ||
                        t(
                          `leggTilEllerEndre.elRullestol.kabin.arsak.${hm.elektriskRullestolInfo.kabin.kanIkkeAvhjelpesMedEnklereArsak}`
                        )}
                    </BodyShort>
                  </div>
                </>
              )}

              {hm.elektriskRullestolInfo.kabin.brukerOppfyllerKrav === false && (
                <>
                  <div>
                    <Label style={{ display: 'inline' }}>
                      {t('leggTilEllerEndre.elRullestol.kabin.behovForKabin')}:{' '}
                    </Label>
                    <BodyShort style={{ display: 'inline' }}>
                      <Trans
                        i18nKey="leggTilEllerEndre.elRullestol.kabin.oppfyllerKravForKabin.nei"
                        components={{
                          italic: <em />,
                        }}
                      />
                    </BodyShort>
                  </div>

                  <div>
                    <Label style={{ display: 'inline' }}>{t('grunnenTilBehovet')}: </Label>
                    <BodyShort style={{ display: 'inline' }}>
                      {hm.elektriskRullestolInfo.kabin.arsakForBehovBegrunnelse}
                    </BodyShort>
                  </div>
                </>
              )}
            </>
          )}
          {hm.elektriskRullestolInfo?.kanBetjeneManuellStyring === true && (
            <div>
              <Label style={{ display: 'inline' }}>{t('leggTilEllerEndre.elRullestol.kanBetjeneStyring.title')}</Label>
              <BodyShort style={{ display: 'inline' }}>
                {t('leggTilEllerEndre.elRullestol.kanBetjeneManuellStyring')}
              </BodyShort>
            </div>
          )}
          {hm.elektriskRullestolInfo?.kanBetjeneMotorisertStyring === true && (
            <div>
              <Label style={{ display: 'inline' }}>{t('leggTilEllerEndre.elRullestol.kanBetjeneStyring.title')}</Label>
              <BodyShort style={{ display: 'inline' }}>
                {t('leggTilEllerEndre.elRullestol.kanBetjeneMotorisertStyring')}
              </BodyShort>
            </div>
          )}
          {hm.elektriskRullestolInfo?.ferdesSikkertITrafikk === true && (
            <div>
              <Label style={{ display: 'inline' }}>
                {t('leggTilEllerEndre.elRullestol.ferdesSikkertITrafikk.title')}
              </Label>
              <BodyShort style={{ display: 'inline' }}>
                {t('leggTilEllerEndre.elRullestol.ferdesSikkertITrafikk')}
              </BodyShort>
            </div>
          )}
          {hm.elektriskRullestolInfo?.nedsattGangfunksjon === true && (
            <div>
              <Label style={{ display: 'inline' }}>
                {t('leggTilEllerEndre.elRullestol.nedsattGangfunksjon.title')}
              </Label>
              <BodyShort style={{ display: 'inline' }}>
                {t('leggTilEllerEndre.elRullestol.nedsattGangfunksjon')}
              </BodyShort>
            </div>
          )}
          {hm.elektriskRullestolInfo?.oppbevaringOgLagring != null && (
            <div>
              <Label style={{ display: 'inline' }}>
                {t('leggTilEllerEndre.elRullestol.oppbevaringOgLagring.title')}
              </Label>
              <BodyShort style={{ display: 'inline' }}>
                {hm.elektriskRullestolInfo?.oppbevaringOgLagring
                  ? t('leggTilEllerEndre.elRullestol.oppbevaringOgLagring.true')
                  : hm.elektriskRullestolInfo?.oppbevaringInfo}
              </BodyShort>
            </div>
          )}
          {hm.elektriskRullestolInfo?.kjentMedForsikring != null && (
            <div>
              <Label style={{ display: 'inline' }}>{t('leggTilEllerEndre.elRullestol.forsikringsvilkår.title')}</Label>
              <BodyShort style={{ display: 'inline' }}>
                {hm.elektriskRullestolInfo?.kjentMedForsikring
                  ? t('leggTilEllerEndre.elRullestol.forsikringsvilkår.true')
                  : t('leggTilEllerEndre.elRullestol.forsikringsvilkår.false')}
              </BodyShort>
            </div>
          )}
          {hm.elektriskRullestolInfo?.harSpesialsykkel != null && (
            <div>
              <Label style={{ display: 'inline' }}>{t('leggTilEllerEndre.elRullestol.spesialsykkel.title')} </Label>
              <BodyShort style={{ display: 'inline' }}>
                {hm.elektriskRullestolInfo?.harSpesialsykkel
                  ? t('leggTilEllerEndre.elRullestol.spesialsykkel.true')
                  : t('leggTilEllerEndre.elRullestol.spesialsykkel.false')}
              </BodyShort>
            </div>
          )}

          {hm.elektriskRullestolInfo?.plasseringAvHendel && (
            <div>
              <Label style={{ display: 'inline' }}>{t('leggTilEllerEndre.elRullestol.gasshendel.title')} </Label>
              <BodyShort style={{ display: 'inline' }}>
                {hm.elektriskRullestolInfo.plasseringAvHendel === HendelPlassering.HØYRE
                  ? t('leggTilEllerEndre.elRullestol.gasshendel.høyre')
                  : t('leggTilEllerEndre.elRullestol.gasshendel.venstre')}
              </BodyShort>
            </div>
          )}
        </>
      )}
    </>
  )
}
