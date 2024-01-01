import {useTranslation} from "react-i18next";
import {ReactNode} from "react";
import {Bruksarena, HjelpemiddelItem} from "../interfaces/CommonTypes";
import {Detail} from "@navikt/ds-react";
import InfoLinje from "./InfoLinje";

interface Props {
  hm: HjelpemiddelItem
}

const BruksArena = ({ hm }: Props) => {
  const { t } = useTranslation()
  const { bruksarena: bruksarenaListe } = hm!
  if (bruksarenaListe) {
    return (
      <InfoLinje
        overskrift={t('hjelpemiddelinfo.bruksarena.label')}
        info={bruksarenaListe.length === 1 ? (
          <>{t(`hjelpemiddelinfo.bruksarena.${bruksarenaListe[0]}`)}</>
        ) : (
          <ul>
            {bruksarenaListe.map((bruksarena) => (
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
  return <></>
}

export default BruksArena
