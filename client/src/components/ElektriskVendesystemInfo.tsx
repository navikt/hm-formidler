import { Alert, BodyShort } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'
import InfoLinje from './InfoLinje'

interface Props {
  hm: HjelpemiddelItem
}

const ElektriskVendesystemInfo = ({ hm }: Props) => {
  const { t } = useTranslation()

  return (<>
    {hm.elektriskVendesystemInfo?.sengForMontering?.hmsnr && (
      <InfoLinje
        overskrift={t('hjelpemiddelinfo.elektriskVendesystem')}
        info={<>
          {hm.elektriskVendesystemInfo.sengForMontering?.hmsnr}{' '}
          {hm.elektriskVendesystemInfo.sengForMontering?.navn}</>}
      />
    )}

    {hm.elektriskVendesystemInfo?.sengForMontering?.madrassbredde && (<>
      <InfoLinje
        overskrift={t('hjelpemiddelinfo.elektriskVendesystem.madrassBredde')}
        info={<>{hm.elektriskVendesystemInfo.sengForMontering?.madrassbredde} cm</>}
      />
      {hm.elektriskVendesystemInfo.standardLakenByttesTilRiktigStørrelseAvNav && (
        <div>
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
