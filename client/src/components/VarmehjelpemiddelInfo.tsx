import { BodyShort, Label } from '@navikt/ds-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'
import InfoLinje from './InfoLinje'

interface Props {
  hm: HjelpemiddelItem
}

const VarmehjelpemiddelInfo = ({ hm }: Props) => {
  const { t } = useTranslation()

  return (
    <>
      {hm.varmehjelpemiddelInfo?.harHelseopplysningerFraFør ? (
        <InfoLinje
          overskrift={t('hjelpemiddelinfo.varmehjelpemiddel.opplysningerFraLege.overskrift')}
          info={t('hjelpemiddelinfo.varmehjelpemiddel.opplysingerFraLege.automatiskSjekket')}
        />
      ) : (
        <InfoLinje
          overskrift={t('hjelpemiddelinfo.varmehjelpemiddel.opplysingerFraLege.formidlerBekrefterAt')}
          info={<ul style={{ margin: 0 }}>
            {hm.varmehjelpemiddelInfo?.legeBekrefterDiagnose && (
              <li>{t('hjelpemiddelinfo.varmehjelpemiddel.legeBekrefterDiagnose')}</li>
            )}
            {hm.varmehjelpemiddelInfo?.opplysningerFraLegeOppbevaresIKommune && (
              <li>{t('hjelpemiddelinfo.varmehjelpemiddel.opplysningerFraLegeOppbevaresIKommune')}</li>
            )}
          </ul>}
        />
      )}
    </>
  )
}

export default VarmehjelpemiddelInfo
