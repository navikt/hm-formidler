import React, { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import DOMPurify from 'dompurify'
import { BodyShort, Detail, FormSummary, HStack } from '@navikt/ds-react'
import {
  type LokalisertTekst,
  OpplysningInnholdstype,
  type Opplysning,
  type Tekst,
} from '../interfaces/Innsenderbehovsmelding'

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
  const localizedLabel = lokaliser(opplysning.ledetekst)

  return (
    <FormSummary.Answer>
      <FormSummary.Label>{localizedLabel}</FormSummary.Label>
      <FormSummary.Value>
        <OpplysningInnholdVisning innholdstype={opplysning.innholdstype} innhold={opplysning.innhold} />
      </FormSummary.Value>
    </FormSummary.Answer>
  )
}

const renderTextContent = (tekst: Tekst): ReactNode => {
  if (tekst.fritekst) {
    return tekst.fritekst
  }
  return tekst.forhåndsdefinertTekst ? (
    <span dangerouslySetInnerHTML={{ __html: rensHTML(lokaliser(tekst.forhåndsdefinertTekst)) }}></span>
  ) : null
}

const OpplysningInnholdVisning: React.FC<{ innholdstype: OpplysningInnholdstype; innhold: Tekst[]}> = ({ innholdstype, innhold }) => {
  switch (innholdstype) {
    case OpplysningInnholdstype.TEKST:
      return (
        <>
          <BodyShort>{renderTextContent(innhold[0])}</BodyShort>
          {innhold[0].begrepsforklaring && <Detail>{lokaliser(innhold[0].begrepsforklaring)}</Detail>}
        </>
      )
    case OpplysningInnholdstype.LISTE:
      return (
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
    case OpplysningInnholdstype.NØKKEL_VERDI:
      return (
        <>
          {innhold.map((tekst, index) => (
            <HStack justify="start" align="start" key={index}>
              <strong style={{ width: '10rem' }}>{tekst.ledetekst ? lokaliser(tekst.ledetekst) : ''}</strong>
              {renderTextContent(tekst)}
            </HStack>
          ))}
        </>
      )
  }
}

export default OpplysningVisning
