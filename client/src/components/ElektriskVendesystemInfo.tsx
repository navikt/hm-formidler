import { Alert, BodyShort } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'

interface Props {
  hm: HjelpemiddelItem
}

const ElektriskVendesystemInfo = ({ hm }: Props) => {
  const { t } = useTranslation()

  return (<>
    {hm.elektriskVendesystemInfo?.sengForMontering?.hmsnr && (
      <div style={{ marginBottom: '0.5rem' }}>
        <BodyShort>
          <b>{t('hjelpemiddelinfo.elektriskVendesystem')}</b>
          {hm.elektriskVendesystemInfo.sengForMontering?.hmsnr}{' '}
          {hm.elektriskVendesystemInfo.sengForMontering?.navn}
        </BodyShort>
      </div>
    )}

    {hm.elektriskVendesystemInfo?.sengForMontering?.madrassbredde && (<>
      <div style={{ marginBottom: '0.5rem' }}>
        <BodyShort>
          <b>{t('hjelpemiddelinfo.elektriskVendesystem.madrassBredde')}</b>
          {hm.elektriskVendesystemInfo.sengForMontering?.madrassbredde} cm
        </BodyShort>
      </div>
      {hm.elektriskVendesystemInfo.standardLakenByttesTilRiktigStørrelseAvNav && (
        <div style={{ marginBottom: '0.5rem' }}>
          <Alert variant="info" inline>
            {t('hjelpemiddelinfo.elektriskVendesystem.standardLakenByttesAvNAV', {
              bredde: hm.elektriskVendesystemInfo.sengForMontering?.madrassbredde,
            })}
          </Alert>
        </div>
      )}
    </>
    )}
  </>
  )
}

export default ElektriskVendesystemInfo
