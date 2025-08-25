import React from 'react'
import { Heading, Label, BodyShort } from '@navikt/ds-react'
import './../stylesheet/oppsummering.module.scss'
import { useTranslation } from 'react-i18next'
import EnkelOpplysningVisning from './EnkelOpplysningVisning'
import { Bruker, Brukersituasjon } from '../interfaces/Innsenderbehovsmelding'
import { formaterPersonnavn, formaterVeiadresse } from '../interfaces/CommonTypes'
import { formaterFnr, formaterTlf } from '../Utils'

type BrukerProps = {
  bruker: Bruker
  brukersituasjon: Brukersituasjon
}

function BrukerOppsummering(props: BrukerProps) {
  const { t } = useTranslation()

  const { bruker, brukersituasjon } = props

  return (
    <>
      <div className="contentBlock categoryRow">
        <Heading size="medium" level="2">
          {t('oppsummering.hjelpemiddelbruker')}
        </Heading>
      </div>
      <div className="contentBlock">
        <div>
          <div className="infoTable">
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.navn')}</Label>
              <BodyShort className={'infoRowCell'}>{formaterPersonnavn(bruker.navn)}</BodyShort>
            </div>
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.fodselsnummer')}</Label>
              <BodyShort className={'infoRowCell'}>{formaterFnr(bruker.fnr)}</BodyShort>
            </div>
            {bruker.veiadresse && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.FolkeregistrertAdresse')}</Label>
                <BodyShort className={'infoRowCell'}>{formaterVeiadresse(bruker.veiadresse)}</BodyShort>
              </div>
            )}
            {bruker.telefon && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('felles.tlf')}</Label>
                <BodyShort className={'infoRowCell'}>{formaterTlf(bruker.telefon)}</BodyShort>
              </div>
            )}
            {bruker.legacyopplysninger.map((opplysning, index) => {
              return (
                <EnkelOpplysningVisning
                  enkelOpplysning={opplysning}
                  key={index}
                  className="infoRow"
                  ledetekstClassName="infoRowCell fixedWidthLabel"
                  innholdClassName="infoRowCell"
                />
              )
            })}
            <div className={'infoRow'}>
              <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.funksjonsnedsettelser')}</Label>
              <BodyShort className={'infoRowCell'}>
                {brukersituasjon.funksjonsnedsettelser.map((funksjonsnedsettelse) => t(funksjonsnedsettelse)).join(', ')}
              </BodyShort>
            </div>
            {bruker.brukernummer && (
              <div className={'infoRow'}>
                <Label className={'infoRowCell fixedWidthLabel'}>{t('oppsummering.brukernummer')}</Label>
                <BodyShort className={'infoRowCell'}>{bruker.brukernummer}</BodyShort>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr aria-hidden="true" />
    </>
  )
}

export default BrukerOppsummering
