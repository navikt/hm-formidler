import {HjelpemiddelItem} from "../interfaces/CommonTypes";
import {useTranslation} from "react-i18next";
import InfoLinje from "./InfoLinje";
import {Alert} from "@navikt/ds-react";

interface Props {
  hm: HjelpemiddelItem
}

const GanghjelpemiddelInfo = ({ hm }: Props) => {
  const { t } = useTranslation()
  const { bruksområde, type, brukerErFylt26År, kanIkkeBrukeMindreAvansertGanghjelpemiddel } = hm.ganghjelpemiddelInfo!

  console.log('hm.ganghjelpemiddelInfo', hm.ganghjelpemiddelInfo)

  return (
    <>
      {bruksområde && (
        <>
          {typeof type === 'string' && (
            <InfoLinje
              overskrift={t('hjelpemiddelinfo.ganghjelpemiddel.hovedformaal.label')}
              info={t(`hjelpemiddelinfo.ganghjelpemiddel.hovedformaal.${type}`)} />
          )}
          {typeof type !== 'string' && (
            <InfoLinje
              overskrift={t('hjelpemiddelinfo.ganghjelpemiddel.hovedformaal.label')}
              info={t(`hjelpemiddelinfo.ganghjelpemiddel.hovedformaal.${bruksområde}`)} />
          )}
        </>
      )}
      {kanIkkeBrukeMindreAvansertGanghjelpemiddel && (
        <>
          {typeof type === 'string' && (
            <InfoLinje
              overskrift={t('felles.formidlerBekrefterAt')}
              info={t(`hjelpemiddelinfo.ganghjelpemiddel.kanIkkeBrukeMindreAvansertGanghjelpemiddel.text.${type}`)} />
          )}
          {typeof type !== 'string' && (
            <InfoLinje
              overskrift={t('felles.formidlerBekrefterAt')}
              info={t(`hjelpemiddelinfo.ganghjelpemiddel.kanIkkeBrukeMindreAvansertGanghjelpemiddel.text`)} />
          )}
        </>
      )}
      {brukerErFylt26År && (
        <Alert inline variant="warning">
          {t('hjelpemiddelinfo.ganghjelpemiddel.brukerErFylt26År')}
        </Alert>
      )}
    </>
    )
}

export default GanghjelpemiddelInfo
