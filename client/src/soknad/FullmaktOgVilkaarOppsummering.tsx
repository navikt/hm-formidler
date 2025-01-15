import React from 'react'
import { Label, BodyShort } from '@navikt/ds-react'

import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { Bruker, Brukersituasjon, Innsender, Innsenderrolle, Signaturtype } from '../interfaces/Innsenderbehovsmelding'
import { formaterPersonnavn } from '../interfaces/CommonTypes'
import { lokaliser } from './OpplysningVisning'

type FullmaktOgVilkaarProps = {
  bruker: Bruker
  brukersituasjon: Brukersituasjon
  innsender: Innsender
}

const FullmaktOgVilkaarOppsummering: React.FC<FullmaktOgVilkaarProps> = (props: FullmaktOgVilkaarProps) => {
  const { t } = useTranslation()

  const { bruker, brukersituasjon, innsender } = props

  const brukersNavn = formaterPersonnavn(bruker.navn)

  return (
    <>
      <hr aria-hidden="true" />

      {bruker.signaturtype === Signaturtype.FRITAK_FRA_FULLMAKT && (
        <div className="contentBlock">
          <Label>{t('oppsummering.fritakFraFullmakt.tittel')}</Label>
          <ul>
            <li>
              <BodyShort>{t('oppsummering.fritakFraFullmakt.tekst')}</BodyShort>
            </li>
            <li>
              <BodyShort>{t('oppsummering.brukerErInformertOmRettigheter', { navn: brukersNavn })}</BodyShort>
            </li>
          </ul>
        </div>
      )}

      <div className="contentBlock">
        <Label>
          {innsender.rolle === Innsenderrolle.FORMIDLER
            ? t('oppsummering.formidlerVurdert')
            : t('oppsummering.bestillerVurdert')}
        </Label>

        <ul
          style={{
            fontFamily: '"Source Sans Pro",Arial,sans-serif',
            lineHeight: '1.375rem',
          }}
        >
          {brukersituasjon.vilkår.map((vilkår, i) => {
            return <li key={i}>{lokaliser(vilkår.tekst)}</li>
          })}
        </ul>
      </div>

      <div className="contentBlock">
        <Label spacing>{t('oppsummering.infoOmRettOgPlikt.tittel')}</Label>
        <BodyShort>{t('oppsummering.infoOmRettOgPlikt')}</BodyShort>
      </div>
    </>
  )
}

export default FullmaktOgVilkaarOppsummering
