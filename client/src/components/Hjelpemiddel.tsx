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

type HjelpemiddelProps = {
  hm: HjelpemiddelItem
  kroppsmaal: Kroppsmaal | undefined
}

const Hjelpemiddel: React.FC<HjelpemiddelProps> = (props: HjelpemiddelProps) => {
  const { hm, kroppsmaal } = props

  const { t } = useTranslation()

  return (
    <>
      <div>
        <Hjelpemiddelinfo hjelpemiddel={hm} />
      </div>
      <div style={{ marginTop: hm.tilbehorListe?.length ? '0.5rem' : '' }}>
        <Tilbehoerinfo tilbehoerListe={hm.tilbehorListe} />
      </div>
      <div style={{ marginTop: hm.vilkarliste || hm.tilleggsinformasjon || hm.begrunnelse ? '0.5rem' : '' }}>
        <Hjelpemiddeltekstinfo hm={hm} />
      </div>
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

      {(hm.hjelpemiddelkategori === Kategori.ManuelleRullestoler ||
        hm.hjelpemiddelkategori === Kategori.ElektriskeRullestoler ||
        hm.hjelpemiddelkategori === Kategori.StolerMedOppreisingsfunksjon) && (
          <div>
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
    </>
  )
}

export default Hjelpemiddel
