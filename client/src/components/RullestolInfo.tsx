import React from 'react'
import { HendelPlassering, HjelpemiddelItem } from '../interfaces/CommonTypes'
import { BodyShort, Label } from '@navikt/ds-react'
import { Kroppsmaal } from '../interfaces/Brukerinfo'
import { useTranslation } from 'react-i18next'
import { Kategori } from '../soknad/kategorier'

type RullestolInfoProps = {
  hm: HjelpemiddelItem
  kroppsmaal: Kroppsmaal | undefined
}

export const RullestolInfo: React.FC<RullestolInfoProps> = (props: RullestolInfoProps) => {
  const { t } = useTranslation()
  const { hm, kroppsmaal } = props
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
            <div style={{ marginBottom: '0.5rem' }}>
              <Label style={{ display: 'inline' }}>{t('leggTilEllerEndre.rullestol.sittepute:')}</Label>
              <BodyShort style={{ display: 'inline' }}>{t(hm.rullestolInfo.sitteputeValg)}</BodyShort>
            </div>
          )}
        </>
      )}
      {hm.hjelpemiddelkategori === Kategori.ElektriskeRullestoler && (
        <>
          {hm.elektriskRullestolInfo?.oppbevaringOgLagring !== undefined && (
            <div style={{ marginBottom: '0.5rem' }}>
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
          {hm.elektriskRullestolInfo?.kjentMedForsikring !== undefined && (
            <div style={{ marginBottom: '0.5rem' }}>
              <Label style={{ display: 'inline' }}>{t('leggTilEllerEndre.elRullestol.forsikringsvilkår.title')}</Label>
              <BodyShort style={{ display: 'inline' }}>
                {hm.elektriskRullestolInfo?.kjentMedForsikring
                  ? t('leggTilEllerEndre.elRullestol.forsikringsvilkår.true')
                  : t('leggTilEllerEndre.elRullestol.forsikringsvilkår.false')}
              </BodyShort>
            </div>
          )}
          {hm.elektriskRullestolInfo?.harSpesialsykkel !== undefined && (
            <div style={{ marginBottom: '0.5rem' }}>
              <Label style={{ display: 'inline' }}>{t('leggTilEllerEndre.elRullestol.spesialsykkel.title')} </Label>
              <BodyShort style={{ display: 'inline' }}>
                {hm.elektriskRullestolInfo?.harSpesialsykkel
                  ? t('leggTilEllerEndre.elRullestol.spesialsykkel.true')
                  : t('leggTilEllerEndre.elRullestol.spesialsykkel.false')}
              </BodyShort>
            </div>
          )}

          {hm.elektriskRullestolInfo?.plasseringAvHendel && (
            <div style={{ marginBottom: '0.5rem' }}>
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
      {(hm.hjelpemiddelkategori === Kategori.ManuelleRullestoler ||
        hm.hjelpemiddelkategori === Kategori.ElektriskeRullestoler) && (
        <div>
          <Label>{t('leggTilEllerEndre.bruker.kroppsmaal')}</Label>
          <BodyShort>{t('leggTilEllerEndre.bruker.kroppsmaal.alleKroppsmaal', { kroppsmaal })}</BodyShort>
        </div>
      )}
    </>
  )
}