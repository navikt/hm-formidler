import { Element, Normaltekst } from 'nav-frontend-typografi'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import { Brukerinfo, SignaturType } from '../interfaces/Brukerinfo'

type FullmaktOgVilkaarProps = {
  bruker: Brukerinfo
}

const FullmaktOgVilkaarOppsummering = (props: FullmaktOgVilkaarProps) => {
  const { t } = useTranslation()

  const { bruker } = props

  const brukersNavn = `${bruker.fornavn} ${bruker.etternavn}`

  return (
    <>
      <hr aria-hidden="true" />

      {bruker.signatur === SignaturType.FRITAK_FRA_FULLMAKT && (
        <div className="contentBlock">
          <Element>{t('oppsummering.fritakFraFullmakt.tittel')}</Element>
          <ul>
            <li>
              <Normaltekst>{t('oppsummering.fritakFraFullmakt.tekst')}</Normaltekst>
            </li>
            <li>
              <Normaltekst>{t('oppsummering.brukerErInformertOmRettigheter', { navn: brukersNavn })}</Normaltekst>
            </li>
          </ul>
        </div>
      )}

      <div className="contentBlock">
        <Element tag="h3">
          {t('oppsummering.vilkarOppfyllt', {
            navn: brukersNavn,
          })}
        </Element>
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
    </>
  )
}

export default FullmaktOgVilkaarOppsummering
