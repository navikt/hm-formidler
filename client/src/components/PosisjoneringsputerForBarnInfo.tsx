import { Alert, BodyShort } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem, PosisjoneringsputeForBarnBruk } from '../interfaces/CommonTypes'
import InfoLinje from './InfoLinje'

interface Props {
  hm: HjelpemiddelItem
}

const PosisjoneringsputerForBarnInfo = ({ hm }: Props) => {
  const { t } = useTranslation()

  return (<>

    {hm.posisjoneringsputeForBarnInfo?.bruksområde === PosisjoneringsputeForBarnBruk.TILRETTELEGGE_UTGANGSSTILLING && (
      <InfoLinje
        overskrift={t('felles.bruksområde')}
        info={t('hjelpemiddelinfo.posisjoneringsputeForBarn.bruk.TILRETTELEGGE_UTGANGSSTILLING')}
      />
    )}

    {hm.posisjoneringsputeForBarnInfo?.bruksområde === PosisjoneringsputeForBarnBruk.TRENING_AKTIVITET_STIMULERING && (
      <>
        <InfoLinje
          overskrift={t('felles.bruksområde')}
          info={t('hjelpemiddelinfo.posisjoneringsputeForBarn.bruk.TRENING_AKTIVITET_STIMULERING')}
        />
        {(hm.posisjoneringsputeForBarnInfo.detErLagetEnMålrettetPlan ||
          hm.posisjoneringsputeForBarnInfo.planenOppbevaresIKommunen) && (
            <>
              <InfoLinje
                overskrift={t('felles.formidlerBekrefterAt')}
                info={
                  <ul style={{ margin: 0 }}>
                    {hm.posisjoneringsputeForBarnInfo.detErLagetEnMålrettetPlan && (
                      <li>
                        <BodyShort>
                          {t('hjelpemiddelinfo.posisjoneringssystem.detErLagetEnMålrettetPlan')}
                        </BodyShort>
                      </li>
                    )}
                    {hm.posisjoneringsputeForBarnInfo.planenOppbevaresIKommunen && (
                      <li>
                        <BodyShort>
                          {t('hjelpemiddelinfo.posisjoneringssystem.planenOppbevaresIKommunen')}
                        </BodyShort>
                      </li>
                    )}
                  </ul>
                }
              />
            </>
          )}
      </>
    )}
    {hm.posisjoneringsputeForBarnInfo?.brukerErOver26År && (
      <div>
        <Alert variant="warning" inline>
          {t('hjelpemiddelinfo.posisjoneringsputeForBarn.personOver26År')}
        </Alert>
      </div>
    )}
  </>
  )
}

export default PosisjoneringsputerForBarnInfo
