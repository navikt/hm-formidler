import React from 'react'
import Hjelpemiddelinfo from './Hjelpemiddelinfo'
import Tilbehoerinfo from './Tilbehoerinfo'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'
import Hjelpemiddeltekstinfo from './Hjelpemiddeltekstinfo'
import { RullestolInfo } from './RullestolInfo'
import { Kroppsmaal } from '../interfaces/Brukerinfo'
import { Kategori } from '../soknad/kategorier'

type HjelpemiddelProps = {
  hm: HjelpemiddelItem
  kroppsmaal: Kroppsmaal | undefined
}

const Hjelpemiddel: React.FC<HjelpemiddelProps> = (props: HjelpemiddelProps) => {
  const { hm, kroppsmaal } = props

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
        <RullestolInfo hm={hm} kroppsmaal={kroppsmaal} />
      )}
    </>
  )
}

export default Hjelpemiddel
