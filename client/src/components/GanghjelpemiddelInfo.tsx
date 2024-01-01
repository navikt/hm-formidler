import {HjelpemiddelItem} from "../interfaces/CommonTypes";
import {useTranslation} from "react-i18next";
import InfoLinje from "./InfoLinje";
import {Alert} from "@navikt/ds-react";

interface Props {
  hm: HjelpemiddelItem
}

const GanghjelpemiddelInfo = ({ hm }: Props) => {
  const { t } = useTranslation()
  const { bruksområde, brukerErFylt26År } = hm.ganghjelpemiddelInfo!

  return (
    <>
      {bruksområde && (
        <InfoLinje
          overskrift={t('hjelpemiddelinfo.ganghjelpemiddel.hovedformaal.label')}
          info={t(`hjelpemiddelinfo.ganghjelpemiddel.hovedformaal.${bruksområde}`)} />
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
