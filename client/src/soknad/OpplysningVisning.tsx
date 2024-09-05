import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import DOMPurify from 'dompurify'
import { BodyShort, Detail, List } from '@navikt/ds-react'
import { LokalisertTekst, Opplysning, Tekst } from '../interfaces/Formidlerbehovsmelding'

const rensHTML = (tekst: string): string => {
  return DOMPurify.sanitize(tekst, { ALLOWED_TAGS: ['em', 'strong'] })
}

export const lokaliser = (lokalisertTekst: LokalisertTekst): string => {
  const { i18n } = useTranslation()
  if (i18n.language === 'nn') {
    return lokalisertTekst.nn
  }
  return lokalisertTekst.nb
}

const hentFritekstEllerForhåndsdefinertTekst = (tekst: Tekst): ReactNode => {
  if (tekst.fritekst) {
    return tekst.fritekst
  }

  return <span dangerouslySetInnerHTML={{ __html: rensHTML(lokaliser(tekst.forhåndsdefinertTekst!!)) }}></span>
}

type OpplysningProps = {
  opplysning: Opplysning
}

const OpplysningVisning: React.FC<OpplysningProps> = ({ opplysning }: OpplysningProps) => {
  const oversattLedetekst = lokaliser(opplysning.ledetekst)

  if (opplysning.innhold.length === 1) {
    const tekst = opplysning.innhold[0]
    return (
      <>
        <BodyShort weight="semibold">{oversattLedetekst}</BodyShort>
        <BodyShort>{hentFritekstEllerForhåndsdefinertTekst(opplysning.innhold[0])}</BodyShort>
        {tekst.begrepsforklaring && <Detail>{lokaliser(tekst.begrepsforklaring)}</Detail>}
      </>
    )
  }

  return (
    <>
      <BodyShort weight="semibold">{oversattLedetekst}</BodyShort>
      <ul style={{ margin: 0 }}>
        {opplysning.innhold.map((tekst, index) => {
          return (
            <>
              <li key={index}>{hentFritekstEllerForhåndsdefinertTekst(tekst)}</li>
              {tekst.begrepsforklaring && <Detail>{lokaliser(tekst.begrepsforklaring)}</Detail>}
            </>
          )
        })}
      </ul>
    </>
  )
}

export default OpplysningVisning
