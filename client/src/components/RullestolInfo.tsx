import React from 'react'
import { HendelPlassering, HjelpemiddelItem } from '../interfaces/CommonTypes'
import { BodyShort, Label } from '@navikt/ds-react'
import { Trans, useTranslation } from 'react-i18next'
import { Kategori } from '../soknad/kategorier'
import InfoLinje from './InfoLinje'

type RullestolInfoProps = {
  hm: HjelpemiddelItem
}

export const RullestolInfo: React.FC<RullestolInfoProps> = (props: RullestolInfoProps) => {
  const { t } = useTranslation()
  const { hm } = props
  return (
    <>
      {hm.rullestolInfo?.skalBrukesIBil && (
        <InfoLinje
          overskrift={t('rullestol.bil.tittel')}
          info={t('rullestol.bil.skalBrukesIBil')}
        />
      )}
      {hm.hjelpemiddelkategori === Kategori.ManuelleRullestoler && (
        <>
          {hm.rullestolInfo?.sitteputeValg && (
            <InfoLinje
              overskrift={t('leggTilEllerEndre.rullestol.sittepute')}
              info={t(hm.rullestolInfo.sitteputeValg)}
            />
          )}
        </>
      )}
      {hm.hjelpemiddelkategori === Kategori.ElektriskeRullestoler && (
        <>
          {!!hm.elektriskRullestolInfo?.kabin && (
            <>
              {hm.elektriskRullestolInfo.kabin.brukerOppfyllerKrav === true && (
                <>
                  <InfoLinje
                    overskrift={t('leggTilEllerEndre.elRullestol.kabin.behovForKabin')}
                    info={t('leggTilEllerEndre.elRullestol.kabin.oppfyllerKravForKabin.ja')}
                  />

                  <InfoLinje
                    overskrift={t('leggTilEllerEndre.elRullestol.kabin.enklereLøsningErVurdert')}
                    info={hm.elektriskRullestolInfo.kabin.kanIkkeAvhjelpesMedEnklereBegrunnelse ||
                      t(
                        `leggTilEllerEndre.elRullestol.kabin.arsak.${hm.elektriskRullestolInfo.kabin.kanIkkeAvhjelpesMedEnklereArsak}`
                      )}
                  />
                </>
              )}

              {hm.elektriskRullestolInfo.kabin.brukerOppfyllerKrav === false && (
                <>
                  <InfoLinje
                    overskrift={t('leggTilEllerEndre.elRullestol.kabin.behovForKabin')}
                    info={<Trans
                      i18nKey="leggTilEllerEndre.elRullestol.kabin.oppfyllerKravForKabin.nei"
                      components={{
                        italic: <em />,
                      }}
                    />}
                  />

                  <InfoLinje
                    overskrift={t('grunnenTilBehovet')}
                    info={hm.elektriskRullestolInfo.kabin.arsakForBehovBegrunnelse}
                  />
                </>
              )}
            </>
          )}
          {hm.elektriskRullestolInfo?.kanBetjeneManuellStyring === true && (
            <InfoLinje
              overskrift={t('leggTilEllerEndre.elRullestol.kanBetjeneStyring.title')}
              info={t('leggTilEllerEndre.elRullestol.kanBetjeneManuellStyring')}
            />
          )}
          {hm.elektriskRullestolInfo?.kanBetjeneMotorisertStyring === true && (
            <InfoLinje
              overskrift={t('leggTilEllerEndre.elRullestol.kanBetjeneStyring.title')}
              info={t('leggTilEllerEndre.elRullestol.kanBetjeneMotorisertStyring')}
            />
          )}
          {hm.elektriskRullestolInfo?.ferdesSikkertITrafikk === true && (
            <InfoLinje
              overskrift={t('leggTilEllerEndre.elRullestol.ferdesSikkertITrafikk.title')}
              info={t('leggTilEllerEndre.elRullestol.ferdesSikkertITrafikk')}
            />
          )}
          {hm.elektriskRullestolInfo?.nedsattGangfunksjon === true && (
            <InfoLinje
              overskrift={t('leggTilEllerEndre.elRullestol.nedsattGangfunksjon.title')}
              info={t('leggTilEllerEndre.elRullestol.nedsattGangfunksjon')}
            />
          )}
          {hm.elektriskRullestolInfo?.oppbevaringOgLagring != null && (
            <InfoLinje
              overskrift={t('leggTilEllerEndre.elRullestol.oppbevaringOgLagring.title')}
              info={hm.elektriskRullestolInfo?.oppbevaringOgLagring
                ? t('leggTilEllerEndre.elRullestol.oppbevaringOgLagring.true')
                : hm.elektriskRullestolInfo?.oppbevaringInfo}
            />
          )}
          {hm.elektriskRullestolInfo?.kjentMedForsikring != null && (
            <InfoLinje
              overskrift={t('leggTilEllerEndre.elRullestol.forsikringsvilkår.title')}
              info={hm.elektriskRullestolInfo?.kjentMedForsikring
                ? t('leggTilEllerEndre.elRullestol.forsikringsvilkår.true')
                : t('leggTilEllerEndre.elRullestol.forsikringsvilkår.false')}
            />
          )}
          {hm.elektriskRullestolInfo?.harSpesialsykkel != null && (
            <InfoLinje
              overskrift={t('leggTilEllerEndre.elRullestol.spesialsykkel.title')}
              info={hm.elektriskRullestolInfo?.harSpesialsykkel
                ? t('leggTilEllerEndre.elRullestol.spesialsykkel.true')
                : t('leggTilEllerEndre.elRullestol.spesialsykkel.false')}
            />
          )}

          {hm.elektriskRullestolInfo?.plasseringAvHendel && (
            <InfoLinje
              overskrift={t('leggTilEllerEndre.elRullestol.gasshendel.title')}
              info={hm.elektriskRullestolInfo.plasseringAvHendel === HendelPlassering.HØYRE
                ? t('leggTilEllerEndre.elRullestol.gasshendel.høyre')
                : t('leggTilEllerEndre.elRullestol.gasshendel.venstre')}
            />
          )}
        </>
      )}
    </>
  )
}
