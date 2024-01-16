import { BodyShort } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem, OppreisningsStolLøftType } from '../interfaces/CommonTypes'
import InfoLinje from './InfoLinje'

interface Props {
  hm: HjelpemiddelItem
}

const OppreisningsStolInfo = ({ hm }: Props) => {
  const { t } = useTranslation()
  const oppreisningsStolInfo = hm.oppreisningsStolInfo!

  return (
    <>
      <InfoLinje
        overskrift={t('hjelpemiddelinfo.oppreisningsStol.oppfyllerKravForStol.label')}
        info={<>
          {oppreisningsStolInfo.kanBrukerReiseSegSelvFraVanligStol === false && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.oppfyllerKravForStol.ja')}</>
          )}
          {oppreisningsStolInfo.kanBrukerReiseSegSelvFraVanligStol === true && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.oppfyllerKravForStol.nei')}</>
          )}
        </>}
      />

      {oppreisningsStolInfo.bruksområde && (
        <InfoLinje
          overskrift={t('hjelpemiddelinfo.oppreisningsStol.bruksområde.label')}
          info={t(`hjelpemiddelinfo.oppreisningsStol.bruksområde.${oppreisningsStolInfo.bruksområde}`)}
        />
      )}

      {oppreisningsStolInfo.behovForStolBegrunnelse ? (
        <InfoLinje
          overskrift={t('grunnenTilBehovet')}
          info={oppreisningsStolInfo.behovForStolBegrunnelse}
        />
      ) : (
        <InfoLinje
          overskrift={t('behov')}
          info={<ul>
            {oppreisningsStolInfo.behov?.map((behov) => (
              <li>{t(`hjelpemiddelinfo.oppreisningsStol.behov.${behov}`)}</li>
            ))}
          </ul>}
        />
      )}

      {oppreisningsStolInfo.sideBetjeningsPanel && (
        <InfoLinje
          overskrift={t('hjelpemiddelinfo.oppreisningsStol.betjeningspanel.label')}
          info={t(`hjelpemiddelinfo.oppreisningsStol.betjeningspanel.${oppreisningsStolInfo.sideBetjeningsPanel.toLowerCase()}`)}
        />
      )}

      <InfoLinje
        overskrift={t('hjelpemiddelinfo.oppreisningsStol.annetTrekkKanBenyttes.label')}
        info={<>
          {oppreisningsStolInfo.annetTrekkKanBenyttes === true && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.annetTrekkKanBenyttes.ja')}</>
          )}
          {oppreisningsStolInfo.annetTrekkKanBenyttes === false && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.annetTrekkKanBenyttes.nei')}</>
          )}
        </>}
      />

      <InfoLinje
        overskrift={t('hjelpemiddelinfo.oppreisningsStol.løftType.label')}
        info={<>
          {oppreisningsStolInfo.løftType === OppreisningsStolLøftType.SKRÅLØFT && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.løftType.skråløft')}</>
          )}
          {oppreisningsStolInfo.løftType === OppreisningsStolLøftType.RETTLØFT && (
            <>{t('hjelpemiddelinfo.oppreisningsStol.løftType.rettløft')}</>
          )}
        </>}
      />
    </>
  )
}

export default OppreisningsStolInfo
