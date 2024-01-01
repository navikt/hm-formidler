import { Alert, BodyShort } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem, PosisjoneringsputeForBarnBruk } from '../interfaces/CommonTypes'

interface Props {
  hm: HjelpemiddelItem
}

const PosisjoneringsputerForBarnInfo = ({ hm }: Props) => {
  const { t } = useTranslation()

  return (<>

    {hm.posisjoneringsputeForBarnInfo?.bruksområde === PosisjoneringsputeForBarnBruk.TILRETTELEGGE_UTGANGSSTILLING && (
      <div>
        <BodyShort>
          <b>{t('felles.bruksområde')}: </b>
          {t('hjelpemiddelinfo.posisjoneringsputeForBarn.bruk.TILRETTELEGGE_UTGANGSSTILLING')}
        </BodyShort>
      </div>
    )}

    {hm.posisjoneringsputeForBarnInfo?.bruksområde === PosisjoneringsputeForBarnBruk.TRENING_AKTIVITET_STIMULERING && (
      <>
        <div>
          <BodyShort>
            <b>{t('felles.bruksområde')}: </b>
            {t('hjelpemiddelinfo.posisjoneringsputeForBarn.bruk.TRENING_AKTIVITET_STIMULERING')}
          </BodyShort>
        </div>
        {(hm.posisjoneringsputeForBarnInfo.detErLagetEnMålrettetPlan ||
          hm.posisjoneringsputeForBarnInfo.planenOppbevaresIKommunen) && (
            <>
              <div>
                <BodyShort>
                  <b>{t('felles.formidlerBekrefterAt')}:</b>
                </BodyShort>
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
              </div>
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
