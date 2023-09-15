import { BodyShort } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'

interface Props {
  hm: HjelpemiddelItem
}

const OppreisningsStolInfo = ({ hm }: Props) => {
  const { t } = useTranslation()
  const oppreisningsStolInfo = hm.oppreisningsStolInfo!

  return (
    <>
      <div style={{ marginBottom: '0.5rem' }}>
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
        <div style={{ marginBottom: '0.5rem' }}>
          <BodyShort>
            <b>{t('hjelpemiddelinfo.oppreisningsStol.bruksområde.label')}: </b>
            {t(`hjelpemiddelinfo.oppreisningsStol.bruksområde.${oppreisningsStolInfo.bruksområde}`)}
          </BodyShort>
        </div>
      )}

      <div style={{ marginBottom: '0.5rem' }}>
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
        <div style={{ marginBottom: '0.5rem' }}>
          <BodyShort>
            <b>{t('hjelpemiddelinfo.oppreisningsStol.betjeningspanel.label')}: </b>
            {t(
              `hjelpemiddelinfo.oppreisningsStol.betjeningspanel.${oppreisningsStolInfo.sideBetjeningsPanel.toLowerCase()}`
            )}
          </BodyShort>
        </div>
      )}
    </>
  )
}

export default OppreisningsStolInfo
