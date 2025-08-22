import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import DOMPurify from 'dompurify'
import { BodyShort, Detail } from '@navikt/ds-react'
import { LokalisertTekst, Opplysning, Tekst } from '../interfaces/Innsenderbehovsmelding'
import InfoElement from '../components/InfoElement'

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

type OpplysningProps = {
  opplysning: Opplysning
}

const OpplysningVisning: React.FC<OpplysningProps> = ({ opplysning }) => {
  const { i18n } = useTranslation()
  const localizedLabel = lokaliser(opplysning.ledetekst)

  return (
    <InfoElement label={localizedLabel}>
      {opplysning.innhold.length === 1 ? (
        <SingleContentView tekst={opplysning.innhold[0]} language={i18n.language} />
      ) : (
        <MultiContentView innhold={opplysning.innhold} language={i18n.language} />
      )}
    </InfoElement>
  )
}

const renderTextContent = (tekst: Tekst): ReactNode => {
  if (tekst.fritekst) {
    return tekst.fritekst
  }
  return tekst.forhåndsdefinertTekst ? <span dangerouslySetInnerHTML={{ __html: rensHTML(lokaliser(tekst.forhåndsdefinertTekst)) }}></span> : null
}

const SingleContentView: React.FC<{ tekst: Tekst; language: string }> = ({ tekst, language }) => (
  <>
    <BodyShort>{renderTextContent(tekst)}</BodyShort>
    {tekst.begrepsforklaring && <Detail>{lokaliser(tekst.begrepsforklaring)}</Detail>}
  </>
)

const MultiContentView: React.FC<{ innhold: Tekst[]; language: string }> = ({ innhold, language }) => (
  <ul style={{ margin: 0 }}>
    {innhold.map((tekst, index) => (
      <React.Fragment key={index}>
        <li>
          <BodyShort>{renderTextContent(tekst)}</BodyShort>
        </li>
        {tekst.begrepsforklaring && <Detail>{lokaliser(tekst.begrepsforklaring)}</Detail>}
      </React.Fragment>
    ))}
  </ul>
)

export default OpplysningVisning
