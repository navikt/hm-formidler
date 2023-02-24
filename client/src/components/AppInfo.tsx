import { BodyShort, Label } from '@navikt/ds-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'

type Props = {
  hm: HjelpemiddelItem
}

export const AppInfo: React.FC<Props> = (props: Props) => {
  const { t } = useTranslation()
  const { hm } = props

  if (!hm.appInfo) {
    return (null)
  }

  return (
    <>
      <div style={{ marginBottom: '0.5rem' }}>
        <Label style={{ display: 'inline' }}>{t('hjelpemiddelinfo.kalenderapp.utprøvingForBruker.label')}</Label>
        <BodyShort style={{ display: 'inline' }}>
          {hm.appInfo.brukerHarProvdProvelisens
            ? t('hjelpemiddelinfo.kalenderapp.utprøvingForBruker.harPrøvd')
            : t('hjelpemiddelinfo.kalenderapp.utprøvingForBruker.harIkkePrøvd')}
        </BodyShort>
      </div>

      <div style={{ marginBottom: '0.5rem' }}>
        <Label style={{ display: 'inline' }}>{t('hjelpemiddelinfo.kalenderapp.støtteperson.label')}</Label>
        <BodyShort style={{ display: 'inline' }}>
          {hm.appInfo.stottepersonSkalAdministrere
            ? t('hjelpemiddelinfo.kalenderapp.støtteperson.skalAdministrere')
            : t('hjelpemiddelinfo.kalenderapp.støtteperson.skalIkkeAdministrere')}
        </BodyShort>
      </div>

      {hm.appInfo.stottepersonHarProvdProvelisens !== undefined && (
        <div style={{ marginBottom: '0.5rem' }}>
          <Label style={{ display: 'inline' }}>{t('hjelpemiddelinfo.kalenderapp.utprøvingForStøtteperson.label')}</Label>
          <BodyShort style={{ display: 'inline' }}>
            {hm.appInfo.stottepersonHarProvdProvelisens
              ? t('hjelpemiddelinfo.kalenderapp.utprøvingForStøtteperson.harPrøvd')
              : t('hjelpemiddelinfo.kalenderapp.utprøvingForStøtteperson.harIkkePrøvd')}
          </BodyShort>
        </div>
      )}
    </>
  )
}
