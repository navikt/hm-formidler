import React from 'react'
import { BodyShort, Label } from '@navikt/ds-react'
import { HjelpemiddelItem, HjelpemiddelVilkar } from '../interfaces/CommonTypes'
import { useTranslation } from 'react-i18next'
import BruksArena from "./Bruksarena";

type HjelpemiddeltekstinfoProps = {
  hm: HjelpemiddelItem
}

const Hjelpemiddeltekstinfo: React.FC<HjelpemiddeltekstinfoProps> = (props: HjelpemiddeltekstinfoProps) => {
  const { t } = useTranslation()
  const { hm } = props

  const produktHarVilkar = (hm.vilkarliste?.length ?? 0) > 0

  return (
    <>
      {hm.bruksarena && <BruksArena hm={hm} />}
      {hm?.vilkarliste && produktHarVilkar && (
        <div>
          <Label style={{ display: 'inline' }}>Behov:&nbsp;</Label>
          <BodyShort style={{ display: 'inline' }}>
            {hm.vilkarliste
              .map((vilkar: HjelpemiddelVilkar) => {
                return vilkar.tilleggsinfo ? vilkar.tilleggsinfo : vilkar.vilkaarTekst
              })
              .join(', ')}
          </BodyShort>
        </div>
      )}
      {hm?.begrunnelse && (
        <div>
          {hm.kanIkkeTilsvarande ? (
            hm.rangering && parseInt(hm.rangering) > 1 ? (
              <Label style={{ display: 'inline' }}>{t('handlekurv.labels.begrunnelseForLavereRangering')}</Label>
            ) : (
              <Label style={{ display: 'inline' }}>{t('handlekurv.labels.begrunnelseForKanIkkeHaTilsvarende')}</Label>
            )
          ) : (
            <Label style={{ display: 'inline' }}>{t('leggTilEllerEndre.begrunnelsen.label2')}</Label>
          )}
          <BodyShort style={{ display: 'inline' }}>{hm.begrunnelse}</BodyShort>
        </div>
      )}
      {hm.tilleggsinformasjon && (
        <div>
          <Label style={{ display: 'inline' }}>{t('felles.kommentar')}</Label>
          <BodyShort style={{ display: 'inline' }}>{hm.tilleggsinformasjon}</BodyShort>
        </div>
      )}
      {!!hm.personlofterInfo && (
        <>
          <Label style={{ display: 'inline' }}>{t('handlekurv.labels.personloftere.tittel')}:&nbsp;</Label>
          <BodyShort style={{ display: 'inline' }}>
            {hm.personlofterInfo.harBehovForSeilEllerSele === true && 'Ja'}
            {hm.personlofterInfo.harBehovForSeilEllerSele === false && 'Nei'}
          </BodyShort>
        </>
      )}
      {!!hm.arsakForAntall && (
        <>
          <Label style={{ display: 'inline' }}>
            <b>{t('leggTilEllerEndre.antallBegrunnelse.label')}:&nbsp;</b>
          </Label>
          <BodyShort style={{ display: 'inline' }}>
            {hm.arsakForAntallBegrunnelse ? (
              <>{hm.arsakForAntallBegrunnelse}</>
            ) : (
              <>{t(`leggTilEllerEndre.antallBegrunnelse.${hm.arsakForAntall}`)}</>
            )}
          </BodyShort>
        </>
      )}
    </>
  )
}

export default Hjelpemiddeltekstinfo
