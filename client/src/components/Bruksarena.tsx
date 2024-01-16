import { useTranslation } from "react-i18next";
import { Bruksarena, HjelpemiddelItem } from "../interfaces/CommonTypes";
import { Detail } from "@navikt/ds-react";
import InfoLinje from "./InfoLinje";

interface Props {
  hm: HjelpemiddelItem
}

const BruksArena = ({ hm }: Props) => {
  const { t } = useTranslation()
  const { bruksarena } = hm!
  
  if (!bruksarena) {
    return null
  }

  return (
    <InfoLinje
      overskrift={t('hjelpemiddelinfo.bruksarena.label')}
      info={bruksarena.length === 1 ? (
        <>{t(`hjelpemiddelinfo.bruksarena.${bruksarena[0]}`)}</>
      ) : (
        <ul>
          {bruksarena.map((bruksarena) => (
            <>
              <li>{t(`hjelpemiddelinfo.bruksarena.${bruksarena}`)}</li>
              {
                bruksarena === Bruksarena.EGET_HJEM_IKKE_AVLASTNING && (
                  <Detail>
                    {t(`hjelpemiddelinfo.bruksarena.avlastningsboligForklaring`)}
                  </Detail>
                )
              }
            </>
          ))}
        </ul>
      )} />
  )
}

export default BruksArena
