import { BodyShort, Label } from '@navikt/ds-react'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import {BehovForSeng, HjelpemiddelItem, MadrassValg} from '../interfaces/CommonTypes'

interface Props {
  hm: HjelpemiddelItem
}

const SengeInfo = ({ hm }: Props) => {
  const { t } = useTranslation()

  return (
    <>
      {hm.sengeInfo?.påkrevdBehov ? (
        <>
          <div style={{ marginBottom: '0.5rem' }}>
            <BodyShort style={{ display: 'inline' }}>
              <b>{t('hjelpemiddelinfo.seng.behovForSeng')}: </b>
              {hm.sengeInfo.påkrevdBehov === BehovForSeng.DYSFUNKSJONELT_SØVNMØNSTER && (
                <>
                  {hm.sengeInfo.brukerOppfyllerPåkrevdBehov ? (
                    <>{t('hjelpemiddelinfo.seng.påkrevdBehov.dysfunkSøvnmønster.oppfylt')}</>
                  ) : (
                    <Trans
                      i18nKey="hjelpemiddelinfo.seng.påkrevdBehov.dysfunkSøvnmønster.ikkeOppfylt"
                      components={{
                        italic: <em />,
                      }}
                    />
                  )}
                </>
              )}

              {hm.sengeInfo.påkrevdBehov === BehovForSeng.STERKE_UFRIVILLIGE_BEVEGELSER && (
                <>
                  {hm.sengeInfo.brukerOppfyllerPåkrevdBehov ? (
                    <>{t('hjelpemiddelinfo.seng.påkrevdBehov.sterkeUfrivilligeBevegelser.oppfylt')}</>
                  ) : (
                    <Trans
                      i18nKey="hjelpemiddelinfo.seng.påkrevdBehov.sterkeUfrivilligeBevegelser.ikkeOppfylt"
                      components={{
                        italic: <em />,
                      }}
                    />
                  )}
                </>
              )}
            </BodyShort>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            {hm.sengeInfo.behovForSengBegrunnelse && (
              <BodyShort>
                <b>{t('grunnenTilBehovet')}: </b> {hm.sengeInfo.behovForSengBegrunnelse}
              </BodyShort>
            )}
          </div>
        </>
      ) : (
        <BodyShort>
          <b>{t('hjelpemiddelinfo.seng.behovForSeng')}: </b>
          {hm.sengeInfo?.behovForSengBegrunnelse ? (
            <>{hm.sengeInfo.behovForSengBegrunnelse}</>
          ) : (
            <>
              {hm.sengeInfo?.behovForSeng === BehovForSeng.DYSFUNKSJONELT_SØVNMØNSTER && (
                <>{t('hjelpemiddelinfo.seng.behov.dysfunkSøvnmønster')}</>
              )}

              {hm.sengeInfo?.behovForSeng === BehovForSeng.RISIKO_FOR_FALL_UT_AV_SENG && (
                <>{t('hjelpemiddelinfo.seng.behov.risikoForFallUtAvSeng')}</>
              )}
            </>
          )}
        </BodyShort>
      )}
      {hm.sengeInfo?.madrassValg && (
          <BodyShort>
            <b>{t('hjelpemiddelinfo.seng.madrass')}: </b>
            <>
              {hm.sengeInfo.madrassValg === MadrassValg.TrengerMadrass
                  ? t('hjelpemiddelinfo.seng.madrass.trengerMadrass')
                  : t('hjelpemiddelinfo.seng.madrass.harMadrassFraFør')}
            </>
          </BodyShort>
      )}
    </>
  )
}

export default SengeInfo
