import React from 'react'
import { BodyShort, Label } from '@navikt/ds-react'
import { HjelpemiddelItem, HjelpemiddelVilkar } from '../interfaces/CommonTypes'
import { useTranslation } from 'react-i18next'
import BruksArena from "./Bruksarena";
import InfoLinje from './InfoLinje';

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
        <InfoLinje
          overskrift="Behov"
          info={hm.vilkarliste
            .map((vilkar: HjelpemiddelVilkar) => {
              return vilkar.tilleggsinfo ? vilkar.tilleggsinfo : vilkar.vilkaarTekst
            })
            .join(', ')}
        />
      )}
      {hm?.begrunnelse && (
        <InfoLinje
          overskrift={hm.kanIkkeTilsvarande ? (
            hm.rangering && parseInt(hm.rangering) > 1 ? (
              t('handlekurv.labels.begrunnelseForLavereRangering')
            ) : (
              t('handlekurv.labels.begrunnelseForKanIkkeHaTilsvarende')
            )
          ) : (
            t('leggTilEllerEndre.begrunnelsen.label2')
          )}
          info={hm.begrunnelse}
        />
      )}
      {hm.tilleggsinformasjon && (
        <InfoLinje
          overskrift={t('felles.kommentar')}
          info={hm.tilleggsinformasjon}
        />
      )}
      {!!hm.personlofterInfo && (
        <InfoLinje
          overskrift={t('handlekurv.labels.personloftere.tittel')}
          info={<>
            {hm.personlofterInfo.harBehovForSeilEllerSele === true && 'Ja'}
            {hm.personlofterInfo.harBehovForSeilEllerSele === false && 'Nei'}
          </>}
        />
      )}
      {!!hm.arsakForAntall && (
        <InfoLinje
          overskrift={t('leggTilEllerEndre.antallBegrunnelse.label')}
          info={hm.arsakForAntallBegrunnelse ? (
            <>{hm.arsakForAntallBegrunnelse}</>
          ) : (
            <>{t(`leggTilEllerEndre.antallBegrunnelse.${hm.arsakForAntall}`)}</>
          )}
        />
      )}
    </>
  )
}

export default Hjelpemiddeltekstinfo
