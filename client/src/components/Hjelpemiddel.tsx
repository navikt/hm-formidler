import { BodyShort, Label } from '@navikt/ds-react'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { Kroppsmaal } from '../interfaces/Brukerinfo'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'
import { Kategori } from '../soknad/kategorier'
import { AppInfo } from './AppInfo'
import ElektriskVendesystemInfo from './ElektriskVendesystemInfo'
import Hjelpemiddelinfo from './Hjelpemiddelinfo'
import Hjelpemiddeltekstinfo from './Hjelpemiddeltekstinfo'
import PosisjoneringsputerForBarnInfo from './PosisjoneringsputerForBarnInfo'
import PosisjoneringssystemInfo from './PosisjoneringssystemInfo'
import { RullestolInfo } from './RullestolInfo'
import SengeInfo from './SengeInfo'
import Tilbehoerinfo from './Tilbehoerinfo'
import VarmehjelpemiddelInfo from './VarmehjelpemiddelInfo'
import OppreisningsStolInfo from './OppreisningsStolInfo'
import GanghjelpemiddelInfo from './GanghjelpemiddelInfo'
import styled from 'styled-components'
import InfoLinje from './InfoLinje'
import Panel from './Panel'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

type HjelpemiddelProps = {
  hm: HjelpemiddelItem
  kroppsmaal: Kroppsmaal | undefined
}

const Hjelpemiddel: React.FC<HjelpemiddelProps> = (props: HjelpemiddelProps) => {
  const { hm, kroppsmaal } = props

  const { t } = useTranslation()

  return (
    <Panel background="surface-subtle">
      <div>
        <Hjelpemiddelinfo hjelpemiddel={hm} />
      </div>
      {(!!hm.vilkarliste || !!hm.tilleggsinformasjon || !!hm.begrunnelse) && <Hjelpemiddeltekstinfo hm={hm} />}
      {(hm.hjelpemiddelkategori === Kategori.ManuelleRullestoler ||
        hm.hjelpemiddelkategori === Kategori.ElektriskeRullestoler) && <RullestolInfo hm={hm} />}
      {hm.appInfo && <AppInfo hm={hm} />}
      {hm.varmehjelpemiddelInfo && <VarmehjelpemiddelInfo hm={hm} />}
      {hm.sengeInfo && <SengeInfo hm={hm} />}
      {hm.elektriskVendesystemInfo && <ElektriskVendesystemInfo hm={hm} />}
      {hm.posisjoneringssystemInfo && <PosisjoneringssystemInfo hm={hm} />}
      {hm.posisjoneringsputeForBarnInfo && <PosisjoneringsputerForBarnInfo hm={hm} />}
      {hm.oppreisningsStolInfo && <OppreisningsStolInfo hm={hm} />}
      {hm.ganghjelpemiddelInfo && <GanghjelpemiddelInfo hm={hm} />}

      {(hm.hjelpemiddelkategori === Kategori.ManuelleRullestoler ||
        hm.hjelpemiddelkategori === Kategori.ElektriskeRullestoler ||
        hm.hjelpemiddelkategori === Kategori.StolerMedOppreisingsfunksjon) && (
        <InfoLinje
          overskrift={t('leggTilEllerEndre.bruker.kroppsmaal')}
          info={t('leggTilEllerEndre.bruker.kroppsmaal.alleKroppsmaal', { kroppsmaal })}
        />
      )}

      {hm.diverseInfo &&
        Object.entries(hm.diverseInfo).map(([key, value]) => {
          if (value === undefined) {
            return null
          } else {
            return (
              <InfoLinje
                key={key}
                overskrift={t(`hjelpemiddel.diverseInfo.${key}.label`)}
                info={
                  <Trans
                    i18nKey={`hjelpemiddel.diverseInfo.${key}`}
                    values={{ value: value }}
                    components={{
                      italic: <em />,
                      bold: <b />,
                    }}
                  />
                }
              />
            )
          }
        })}

      {hm.bytter.map((bytte) => {
        return (
          <>
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
          </>
        )
      })}

      {hm.tilbehorListe && hm.tilbehorListe.length > 0 && <Tilbehoerinfo tilbehoerListe={hm.tilbehorListe} />}
    </Panel>
  )
}

export default Hjelpemiddel
