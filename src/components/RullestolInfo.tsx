import { HendelPlassering, HjelpemiddelItem } from '../interfaces/CommonTypes'
import { Element, Normaltekst } from 'nav-frontend-typografi'
import { Kroppsmaal } from '../interfaces/Brukerinfo'
import { useTranslation } from 'react-i18next'
import { Kategori } from '../soknad/kategorier'

type RullestolInfoProps = {
  hm: HjelpemiddelItem
  kroppsmaal: Kroppsmaal | undefined
}

export const RullestolInfo = (props: RullestolInfoProps) => {
  const { t } = useTranslation()
  const { hm, kroppsmaal } = props
  return (
    <>
      {hm.rullestolInfo?.skalBrukesIBil && (
        <div>
          <Element style={{ display: 'inline' }}>{t('rullestol.bil.tittel')}</Element>
          <Normaltekst style={{ display: 'inline' }}>{t('rullestol.bil.skalBrukesIBil')}</Normaltekst>
        </div>
      )}
      {hm.hjelpemiddelkategori === Kategori.ManuelleRullestoler && (
        <>
          {hm.rullestolInfo?.sitteputeValg && (
            <div style={{ marginBottom: '0.5rem' }}>
              <Element style={{ display: 'inline' }}>{t('leggTilEllerEndre.rullestol.sittepute:')}</Element>
              <Normaltekst style={{ display: 'inline' }}>{t(hm.rullestolInfo.sitteputeValg)}</Normaltekst>
            </div>
          )}
        </>
      )}
      {hm.hjelpemiddelkategori === Kategori.ElektriskeRullestoler && (
        <>
          {hm.elektriskRullestolInfo?.oppbevaringOgLagring !== undefined && (
            <div style={{ marginBottom: '0.5rem' }}>
              <Element style={{ display: 'inline' }}>
                {t('leggTilEllerEndre.elRullestol.oppbevaringOgLagring.title')}
              </Element>
              <Normaltekst style={{ display: 'inline' }}>
                {hm.elektriskRullestolInfo?.oppbevaringOgLagring
                  ? t('leggTilEllerEndre.elRullestol.oppbevaringOgLagring.true')
                  : hm.elektriskRullestolInfo?.oppbevaringInfo}
              </Normaltekst>
            </div>
          )}
          {hm.elektriskRullestolInfo?.kjentMedForsikring !== undefined && (
            <div style={{ marginBottom: '0.5rem' }}>
              <Element style={{ display: 'inline' }}>
                {t('leggTilEllerEndre.elRullestol.forsikringsvilkår.title')}
              </Element>
              <Normaltekst style={{ display: 'inline' }}>
                {hm.elektriskRullestolInfo?.kjentMedForsikring
                  ? t('leggTilEllerEndre.elRullestol.forsikringsvilkår.true')
                  : t('leggTilEllerEndre.elRullestol.forsikringsvilkår.false')}
              </Normaltekst>
            </div>
          )}
          {hm.elektriskRullestolInfo?.harSpesialsykkel !== undefined && (
            <div style={{ marginBottom: '0.5rem' }}>
              <Element style={{ display: 'inline' }}>{t('leggTilEllerEndre.elRullestol.spesialsykkel.title')} </Element>
              <Normaltekst style={{ display: 'inline' }}>
                {hm.elektriskRullestolInfo?.harSpesialsykkel
                  ? t('leggTilEllerEndre.elRullestol.spesialsykkel.true')
                  : t('leggTilEllerEndre.elRullestol.spesialsykkel.false')}
              </Normaltekst>
            </div>
          )}

          {hm.elektriskRullestolInfo?.plasseringAvHendel && (
            <div style={{ marginBottom: '0.5rem' }}>
              <Element style={{ display: 'inline' }}>{t('leggTilEllerEndre.elRullestol.gasshendel.title')} </Element>
              <Normaltekst style={{ display: 'inline' }}>
                {hm.elektriskRullestolInfo.plasseringAvHendel === HendelPlassering.HØYRE
                  ? t('leggTilEllerEndre.elRullestol.gasshendel.høyre')
                  : t('leggTilEllerEndre.elRullestol.gasshendel.venstre')}
              </Normaltekst>
            </div>
          )}
        </>
      )}
      {(hm.hjelpemiddelkategori === Kategori.ManuelleRullestoler ||
        hm.hjelpemiddelkategori === Kategori.ElektriskeRullestoler) && (
        <div>
          <Element>{t('leggTilEllerEndre.bruker.kroppsmaal')}</Element>
          <Normaltekst>{t('leggTilEllerEndre.bruker.kroppsmaal.alleKroppsmaal', { kroppsmaal })}</Normaltekst>
        </div>
      )}
      {!!hm.personlofterInfo && (
        <>
          <Element style={{ display: 'inline' }}>{t('handlekurv.labels.personloftere.tittel')}:&nbsp;</Element>
          <Normaltekst style={{ display: 'inline' }}>
            {hm.personlofterInfo.harBehovForSeilEllerSele === true && 'Ja'}
            {hm.personlofterInfo.harBehovForSeilEllerSele === false && 'Nei'}
          </Normaltekst>
        </>
      )}
    </>
  )
}
