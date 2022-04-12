import React from 'react'
import { Label, BodyShort } from '@navikt/ds-react'

import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { Brukerinfo, SignaturType } from '../interfaces/Brukerinfo'

type FullmaktOgVilkaarProps = {
  bruker: Brukerinfo
}

const FullmaktOgVilkaarOppsummering: React.FC<FullmaktOgVilkaarProps> = (props: FullmaktOgVilkaarProps) => {
  const { t } = useTranslation()

  const { bruker } = props

  const brukersNavn = `${bruker.fornavn} ${bruker.etternavn}`

  return (
    <>
      <hr aria-hidden="true" />

      {bruker.signatur === SignaturType.FRITAK_FRA_FULLMAKT && (
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
          <li>{t('oppsummering.nedsattBeveglighetsfunksjon', { navn: brukersNavn })}</li>
          <li>{t('oppsummering.ingenEnklereHjelpemidler', { navn: brukersNavn })}</li>
          <li>{t('oppsummering.nodvenigHjelpemidler', { navn: brukersNavn })}</li>
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
