import React from 'react'
import { Heading, BodyShort, Label } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem, UtlevertType } from '../interfaces/CommonTypes'

type HjelpemiddelinfoProps = {
  hjelpemiddel: HjelpemiddelItem
}

const Hjelpemiddelinfo: React.FC<HjelpemiddelinfoProps> = (props: HjelpemiddelinfoProps) => {
  const { t } = useTranslation()
  const { hjelpemiddel } = props

  return (
    <>
      <div>
        <div className="hjelpemiddelinfo">
          {/* For store skjermflater */}
          <Heading
            level="3"
            size="small"
            aria-label={`Hms nummer ${hjelpemiddel.hmsNr}`}
            className="hjelpemiddelinfo-hmsNr desktop-only"
          >
            {hjelpemiddel.hmsNr}
          </Heading>

          <Heading level="3" size="small" className="hjelpemiddelinfo-navn">
            {hjelpemiddel.beskrivelse}
          </Heading>

          {/* For små skjermflater */}
          <span className="sr-only mobile-only">HMS nummer</span>
          <Label className="hjelpemiddelinfo-hmsNr mobile-only">{hjelpemiddel.hmsNr}</Label>

          <Label className="hjelpemiddelinfo-antall">
            {t('felles.antallHjelpemidler', { antall: hjelpemiddel.antall })}
          </Label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.5rem' }}>
          <BodyShort>{hjelpemiddel.hjelpemiddelkategori.toUpperCase()}</BodyShort>
        </div>
        {hjelpemiddel.utlevertFraHjelpemiddelsentralen && hjelpemiddel.utlevertInfo?.utlevertType && (
          <div>
            <BodyShort style={{ flex: '0 0 4rem' }}>
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
            </BodyShort>
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '0.5rem' }}>
          <Label>{t('oppsummering.rangering')} &nbsp;</Label>
          <BodyShort>{hjelpemiddel?.rangering}</BodyShort>
        </div>
      </div>
    </>
  )
}

export default Hjelpemiddelinfo
