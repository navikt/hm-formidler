import { GanghjelpemiddelType, HjelpemiddelItem } from "../interfaces/CommonTypes";
import { useTranslation } from "react-i18next";
import InfoLinje from "./InfoLinje";
import { Alert, BodyShort } from "@navikt/ds-react";

interface Props {
  hm: HjelpemiddelItem
}

const GanghjelpemiddelInfo = ({ hm }: Props) => {
  const { t } = useTranslation()
  const { bruksområde, type, brukerErFylt26År, kanIkkeBrukeMindreAvansertGanghjelpemiddel, detErLagetEnMålrettetPlan, planenOppbevaresIKommunen } = hm.ganghjelpemiddelInfo!

  return (
    <>
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
      {bruksområde && (
        <InfoLinje
          overskrift={t('hjelpemiddelinfo.ganghjelpemiddel.hovedformaal.label')}
          info={t(`hjelpemiddelinfo.ganghjelpemiddel.hovedformaal.${type}.${bruksområde}${brukerErFylt26År && type === GanghjelpemiddelType.Sparkesykkel ? '.brukerErFylt26År' : ''}`)} />
      )}
      {(detErLagetEnMålrettetPlan ||
        planenOppbevaresIKommunen) && (
          <InfoLinje
            overskrift={t('felles.formidlerBekrefterAt')}
            info={
              <ul style={{ margin: 0 }}>
                {detErLagetEnMålrettetPlan && (
                  <li>
                    <BodyShort>
                      {t('hjelpemiddelinfo.posisjoneringssystem.detErLagetEnMålrettetPlan')}
                    </BodyShort>
                  </li>
                )}
                {planenOppbevaresIKommunen && (
                  <li>
                    <BodyShort>
                      {t('hjelpemiddelinfo.posisjoneringssystem.planenOppbevaresIKommunen')}
                    </BodyShort>
                  </li>
                )}
              </ul>
            }
          />
        )}
      {brukerErFylt26År && type === GanghjelpemiddelType.Gåtrening && (
        <Alert inline variant="warning">
          {t('hjelpemiddelinfo.ganghjelpemiddel.brukerErFylt26År')}
        </Alert>
      )}
    </>
  )
}

export default GanghjelpemiddelInfo
