import React from 'react'
import { Element, Normaltekst, Undertittel } from 'nav-frontend-typografi'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem, UtlevertType } from '../interfaces/CommonTypes'

type HjelpemiddelinfoProps = {
  hjelpemiddel: HjelpemiddelItem
}

const Hjelpemiddelinfo = (props: HjelpemiddelinfoProps) => {
  const { t } = useTranslation()
  const { hjelpemiddel } = props

  return (
    <>
      <div>
        <div className="hjelpemiddelinfo">
          {/* For store skjermflater */}
          <Undertittel
            role="heading"
            aria-label={`Hms nummer ${hjelpemiddel.hmsNr}`}
            tag="h4"
            className="hjelpemiddelinfo-hmsNr desktop-only"
          >
            {hjelpemiddel.hmsNr}
          </Undertittel>

          <Undertittel tag="h4" className="hjelpemiddelinfo-navn">
            {hjelpemiddel.beskrivelse}
          </Undertittel>

          {/* For små skjermflater */}
          <span className="sr-only mobile-only">HMS nummer</span>
          <Element className="hjelpemiddelinfo-hmsNr mobile-only">{hjelpemiddel.hmsNr}</Element>

          <Element className="hjelpemiddelinfo-antall">
            {t('felles.antallHjelpemidler', { antall: hjelpemiddel.antall })}
          </Element>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.5rem' }}>
          <Normaltekst>{hjelpemiddel.hjelpemiddelkategori.toUpperCase()}</Normaltekst>
        </div>
        {hjelpemiddel.utlevertFraHjelpemiddelsentralen && hjelpemiddel.utlevertInfo?.utlevertType && (
          <div>
            <Normaltekst style={{ flex: '0 0 4rem' }}>
              {hjelpemiddel.utlevertInfo?.utlevertType === UtlevertType.Annet ? (
                <>
                  <b>{t('oppsummering.utlevertAnnet')}</b>: {hjelpemiddel.utlevertInfo?.annenKommentar}
                </>
              ) : (
                <>
                  <b>{t('oppsummering.utlevert')}</b>:{' '}
                  {t(hjelpemiddel.utlevertInfo?.utlevertType, {
                    brukerNummer: hjelpemiddel.utlevertInfo?.overførtFraBruker,
                    annenInfo: hjelpemiddel.utlevertInfo?.annenKommentar,
                  })}
                </>
              )}
            </Normaltekst>
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.5rem' }}>
          <Element>{t('oppsummering.rangering')} &nbsp;</Element>
          <Normaltekst>{hjelpemiddel?.rangering}</Normaltekst>
        </div>
      </div>
    </>
  )
}

export default Hjelpemiddelinfo
