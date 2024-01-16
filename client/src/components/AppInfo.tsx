import { BodyShort, Label } from '@navikt/ds-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'
import InfoLinje from './InfoLinje'

type Props = {
  hm: HjelpemiddelItem
}

export const AppInfo: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation()
  const { hm } = props

  return (
    <>
      <InfoLinje
        overskrift={t('hjelpemiddelinfo.kalenderapp.utprøvingForBruker.label')}
        info={hm.appInfo?.brukerHarProvdProvelisens
          ? t('hjelpemiddelinfo.kalenderapp.utprøvingForBruker.harPrøvd')
          : t('hjelpemiddelinfo.kalenderapp.utprøvingForBruker.harIkkePrøvd')}
      />

      <InfoLinje
        overskrift={t('hjelpemiddelinfo.kalenderapp.støtteperson.label')}
        info={hm.appInfo?.stottepersonSkalAdministrere
          ? t('hjelpemiddelinfo.kalenderapp.støtteperson.skalAdministrere')
          : t('hjelpemiddelinfo.kalenderapp.støtteperson.skalIkkeAdministrere')}
      />

      {hm.appInfo?.stottepersonSkalAdministrere && hm.appInfo.stottepersonHarProvdProvelisens != null && (
        <InfoLinje
          overskrift={t('hjelpemiddelinfo.kalenderapp.utprøvingForStøtteperson.label')}
          info={hm.appInfo.stottepersonHarProvdProvelisens
            ? t('hjelpemiddelinfo.kalenderapp.utprøvingForStøtteperson.harPrøvd')
            : t('hjelpemiddelinfo.kalenderapp.utprøvingForStøtteperson.harIkkePrøvd')}
        />
      )}
    </>
  )
}
