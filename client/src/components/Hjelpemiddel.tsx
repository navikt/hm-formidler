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
import GanghjelpemiddelInfo from "./GanghjelpemiddelInfo";
import BruksArena from "./Bruksarena";
import styled from 'styled-components'

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
    <Container>
      <div>
        <Hjelpemiddelinfo hjelpemiddel={hm} />
      </div>
      {hm.tilbehorListe && hm.tilbehorListe.length > 0 && (
        <div>
          <Tilbehoerinfo tilbehoerListe={hm.tilbehorListe} />
        </div>
      )}
      {hm.vilkarliste ||
        hm.tilleggsinformasjon ||
        (hm.begrunnelse && (
          <div>
            <Hjelpemiddeltekstinfo hm={hm} />
          </div>
        ))}
      {hm.bruksarena && <BruksArena hm={hm} />}
      {(hm.hjelpemiddelkategori === Kategori.ManuelleRullestoler ||
        hm.hjelpemiddelkategori === Kategori.ElektriskeRullestoler) && (
          <RullestolInfo hm={hm} />
        )}
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
          <div style={{ marginBottom: '0.5rem' }}>
            <Label>{t('leggTilEllerEndre.bruker.kroppsmaal')}</Label>
            <BodyShort>{t('leggTilEllerEndre.bruker.kroppsmaal.alleKroppsmaal', { kroppsmaal })}</BodyShort>
          </div>
        )}

      {hm.diverseInfo &&
        Object.entries(hm.diverseInfo).map(([key, value]) => {
          if (value === undefined) {
            return null
          } else {
            return (
              <div style={{ marginBottom: '0.5rem' }} key={key}>
                <BodyShort>
                  <Trans
                    i18nKey={`hjelpemiddel.diverseInfo.${key}`}
                    values={{ value: value }}
                    components={{
                      italic: <em />,
                      bold: <b />,
                    }}
                  />
                </BodyShort>
              </div>
            )
          }
        })}

      {(hm.bytter.map((bytte) => {
        return (
          <>
            <div style={{ marginBottom: '0.5rem' }}>
              {bytte.erTilsvarende && (<Label>{t('hjelpemiddelinfo.bytte.skalByttesInn')}</Label>)}
              {!bytte.erTilsvarende && (<Label>{t('hjelpemiddelinfo.bytte.skalLeveresTilbake')}</Label>)}
              <br />
              <BodyShort>
                {bytte.hmsnr} {bytte.hjmNavn}
                {bytte.serienr && (
                  <>
                    <br />
                    {t('felles.serienummer')}: {bytte.serienr}
                  </>
                )}
              </BodyShort>
            </div>
            {bytte.årsak && (
              <div style={{ marginBottom: '0.5rem' }}>
                <Label>{t('hjelpemiddelinfo.bytte.begrunnelseForBytte')}</Label>
                <br />
                <BodyShort>
                  {t('hjelpemiddelinfo.bytte.hjelpemiddeletSkalByttesFordi')}{' '}
                  {t(`hjelpemiddelinfo.bytte.årsak.${bytte.årsak}`)}.
                </BodyShort>
              </div>
            )}
          </>
        )
      }))}
    </Container>
  )
}

export default Hjelpemiddel
