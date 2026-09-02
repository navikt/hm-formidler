import { type ProduktkategoriKomponent } from '../interfaces/Innsenderbehovsmelding'
import { Label } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import OpplysningVisning from '../soknad/OpplysningVisning'
import VedleggListe from './VedleggListe'
import { Avstand } from './Avstand'

type Props = {
  komponent: ProduktkategoriKomponent
}

// Viser innholdet i en komponent på en produktkategori, f.eks. en dør på en
// dørautomatikk-kategori, med tilhørende opplysninger og vedlegg (bilder/dokumentasjon knyttet
// til akkurat den døren). Rendres som innholdet i et ExpansionCard, se ProduktkategoriVisning.
const ProduktkategoriKomponentVisning = ({ komponent }: Props) => {
  const { t } = useTranslation()

  return (
    <>
      {komponent.opplysninger.map((opplysning, index) => (
        <OpplysningVisning opplysning={opplysning} key={index} />
      ))}
      {komponent.vedlegg.length > 0 && (
        <Avstand marginTop={2}>
          <Label>{t('oppsummering.vedlegg.bilderAvDøren', { antall: komponent.vedlegg.length })}</Label>
          <Avstand marginTop={2}>
            <VedleggListe vedlegg={komponent.vedlegg} />
          </Avstand>
        </Avstand>
      )}
    </>
  )
}

export default ProduktkategoriKomponentVisning
