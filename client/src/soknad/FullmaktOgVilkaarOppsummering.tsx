import React from 'react'
import { Label, BodyShort } from '@navikt/ds-react'

import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { Bruker, Brukersituasjon, Signaturtype } from '../interfaces/Innsenderbehovsmelding'
import { formaterPersonnavn } from '../interfaces/CommonTypes'

type FullmaktOgVilkaarProps = {
  bruker: Bruker
  brukersituasjon: Brukersituasjon
}

const FullmaktOgVilkaarOppsummering: React.FC<FullmaktOgVilkaarProps> = (props: FullmaktOgVilkaarProps) => {
  const { t } = useTranslation()

  const { bruker, brukersituasjon } = props

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
          {t('oppsummering.vilkarOppfyllt', {
            navn: brukersNavn,
          })}
        </Label>
        <ul
          style={{
            fontFamily: '"Source Sans Pro",Arial,sans-serif',
            lineHeight: '1.375rem',
          }}
        >
          {brukersituasjon.bekreftedeVilkår.map((vilkår) => {
            return <li key={vilkår}>{t(`oppsummering.brukervilkår.${vilkår}`, { navn: brukersNavn })}</li>
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
