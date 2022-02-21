import React from 'react'
import { Normaltekst, Element } from 'nav-frontend-typografi'
import { HjelpemiddelItem, HjelpemiddelVilkar } from '../interfaces/CommonTypes'
import { useTranslation } from 'react-i18next'

type HjelpemiddeltekstinfoProps = {
  hm: HjelpemiddelItem
}

const Hjelpemiddeltekstinfo: React.FC<HjelpemiddeltekstinfoProps> = (props: HjelpemiddeltekstinfoProps) => {
  const { t } = useTranslation()
  const { hm } = props

  const produktHarVilkar = (hm.vilkarliste?.length ?? 0) > 0

  return (
    <>
      {hm?.vilkarliste && produktHarVilkar && (
        <div>
          <Element style={{ display: 'inline' }}>Behov:&nbsp;</Element>
          <Normaltekst style={{ display: 'inline' }}>
            {hm.vilkarliste
              .map((vilkar: HjelpemiddelVilkar) => {
                return vilkar.tilleggsinfo ? vilkar.tilleggsinfo : vilkar.vilkaarTekst
              })
              .join(', ')}
          </Normaltekst>
        </div>
      )}
      {hm?.begrunnelse && (
        <div>
          {hm.kanIkkeTilsvarande ? (
            hm.rangering && parseInt(hm.rangering) > 1 ? (
              <Element style={{ display: 'inline' }}>{t('handlekurv.labels.begrunnelseForLavereRangering')}</Element>
            ) : (
              <Element style={{ display: 'inline' }}>
                {t('handlekurv.labels.begrunnelseForKanIkkeHaTilsvarende')}
              </Element>
            )
          ) : (
            <Element style={{ display: 'inline' }}>{t('leggTilEllerEndre.begrunnelsen.label2')}</Element>
          )}

          <Normaltekst style={{ display: 'inline' }}>{hm.begrunnelse}</Normaltekst>
        </div>
      )}
      {hm.tilleggsinformasjon && (
        <div>
          <Element style={{ display: 'inline' }}>{t('felles.kommentar')}</Element>
          <Normaltekst style={{ display: 'inline' }}>{hm.tilleggsinformasjon}</Normaltekst>
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

export default Hjelpemiddeltekstinfo
