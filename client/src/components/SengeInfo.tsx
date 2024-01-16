import { BodyShort, Label } from '@navikt/ds-react'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { BehovForSeng, HjelpemiddelItem } from '../interfaces/CommonTypes'
import InfoLinje from './InfoLinje'

interface Props {
  hm: HjelpemiddelItem
}

const SengeInfo = ({ hm }: Props) => {
  const { t } = useTranslation()

  return (
    <>
      {hm.sengeInfo?.påkrevdBehov ? (
        <>
          <InfoLinje
            overskrift={t('hjelpemiddelinfo.seng.behovForSeng')}
            info={<>
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
            </>}
          />

          {hm.sengeInfo.behovForSengBegrunnelse && (
            <InfoLinje
              overskrift={t('grunnenTilBehovet')}
              info={hm.sengeInfo.behovForSengBegrunnelse}
            />
          )}
        </>
      ) : (
        <>
          {hm.sengeInfo?.behovForSeng && (
            <InfoLinje
              overskrift={t('hjelpemiddelinfo.seng.behovForSeng')}
              info={<>
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
              </>}
            />
          )}
        </>
      )
      }

      {
        hm.sengeInfo?.høyGrindValg && (
          <>
            {hm.sengeInfo.høyGrindValg.erKjentMedTvangsAspekt && (
              <InfoLinje
                overskrift={t('felles.bekreftetAvFormidler')}
                info={t('hjelpemiddelinfo.seng.høyGrind.erKjentMedTvangsAspekt')}
              />
            )}
            <InfoLinje
              overskrift={t('hjelpemiddelinfo.seng.høyGrind.andreTiltak.label')}
              info={hm.sengeInfo.høyGrindValg.harForsøktOpptrening ? (
                <>{t('hjelpemiddelinfo.seng.høyGrind.andreTiltak.ja')}</>
              ) : (
                <Trans
                  i18nKey="hjelpemiddelinfo.seng.høyGrind.andreTiltak.nei"
                  components={{
                    italic: <em />,
                  }}
                />
              )}
            />

            {hm.sengeInfo.høyGrindValg.harIkkeForsøktOpptreningBegrunnelse && (
              <InfoLinje
                overskrift={t('hjelpemiddelinfo.seng.høyGrind.harIkkeForsøktOpptreningBegrunnelse.label')}
                info={hm.sengeInfo.høyGrindValg.harIkkeForsøktOpptreningBegrunnelse}
              />
            )}
            <InfoLinje
              overskrift="Plan"
              info={hm.sengeInfo.høyGrindValg.erLagetPlanForOppfølging ? (
                <>{t('hjelpemiddelinfo.seng.høyGrind.erLagetPlanForOppfølging.ja')}</>
              ) : (
                <Trans
                  i18nKey="hjelpemiddelinfo.seng.høyGrind.erLagetPlanForOppfølging.nei"
                  components={{
                    italic: <em />,
                  }}
                />
              )}
            />
          </>
        )
      }
    </>
  )
}

export default SengeInfo
