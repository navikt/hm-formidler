import { BodyShort } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem, OppreisningsStolLøftType } from '../interfaces/CommonTypes'

interface Props {
  hm: HjelpemiddelItem
}

const OppreisningsStolInfo = ({ hm }: Props) => {
  const { t } = useTranslation()
  const oppreisningsStolInfo = hm.oppreisningsStolInfo!

  return (
    <>
      <div>
        <BodyShort>
          <b>{t('hjelpemiddelinfo.oppreisningsStol.oppfyllerKravForStol.label')}: </b>
          {oppreisningsStolInfo.kanBrukerReiseSegSelvFraVanligStol === false && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.oppfyllerKravForStol.ja')}</>
          )}
          {oppreisningsStolInfo.kanBrukerReiseSegSelvFraVanligStol === true && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.oppfyllerKravForStol.nei')}</>
          )}
        </BodyShort>
      </div>

      {oppreisningsStolInfo.bruksområde && (
        <div>
          <BodyShort>
            <b>{t('hjelpemiddelinfo.oppreisningsStol.bruksområde.label')}: </b>
            {t(`hjelpemiddelinfo.oppreisningsStol.bruksområde.${oppreisningsStolInfo.bruksområde}`)}
          </BodyShort>
        </div>
      )}

      <div>
        <BodyShort>
          {oppreisningsStolInfo.behovForStolBegrunnelse ? (
            <>
              <b>{t('grunnenTilBehovet')}: </b>
              {oppreisningsStolInfo.behovForStolBegrunnelse}
            </>
          ) : (
            <>
              <b>{t('behov')}: </b>
              <ul>
                {oppreisningsStolInfo.behov?.map((behov) => (
                  <li>{t(`hjelpemiddelinfo.oppreisningsStol.behov.${behov}`)}</li>
                ))}
              </ul>
            </>
          )}
        </BodyShort>
      </div>

      {oppreisningsStolInfo.sideBetjeningsPanel && (
        <div>
          <BodyShort>
            <b>{t('hjelpemiddelinfo.oppreisningsStol.betjeningspanel.label')}: </b>
            {t(
              `hjelpemiddelinfo.oppreisningsStol.betjeningspanel.${oppreisningsStolInfo.sideBetjeningsPanel.toLowerCase()}`
            )}
          </BodyShort>
        </div>
      )}

      <div>
        <BodyShort>
          <b>{t('hjelpemiddelinfo.oppreisningsStol.annetTrekkKanBenyttes.label')}: </b>
          {oppreisningsStolInfo.annetTrekkKanBenyttes === true && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.annetTrekkKanBenyttes.ja')}</>
          )}
          {oppreisningsStolInfo.annetTrekkKanBenyttes === false && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.annetTrekkKanBenyttes.nei')}</>
          )}
        </BodyShort>
      </div>

      <div>
        <BodyShort>
          <b>{t('hjelpemiddelinfo.oppreisningsStol.løftType.label')}: </b>
          {oppreisningsStolInfo.løftType === OppreisningsStolLøftType.SKRÅLØFT && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.løftType.skråløft')}</>
          )}
          {oppreisningsStolInfo.løftType === OppreisningsStolLøftType.RETTLØFT && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.løftType.rettløft')}</>
          )}
        </BodyShort>
      </div>
    </>
  )
}

export default OppreisningsStolInfo
