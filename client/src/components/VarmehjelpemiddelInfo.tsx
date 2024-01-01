import { BodyShort, Label } from '@navikt/ds-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'

interface Props {
  hm: HjelpemiddelItem
}

const VarmehjelpemiddelInfo = ({ hm }: Props) => {
  const { t } = useTranslation()

  return (
    <>
      {hm.varmehjelpemiddelInfo?.harHelseopplysningerFraFør ? (
        <div>
          <Label>
            {t('hjelpemiddelinfo.varmehjelpemiddel.opplysningerFraLege.overskrift')}
            <br />
          </Label>
          <BodyShort style={{ display: 'inline' }}>
            {t('hjelpemiddelinfo.varmehjelpemiddel.opplysingerFraLege.automatiskSjekket')}
          </BodyShort>
        </div>
      ) : (
        <>
          <Label>{t('hjelpemiddelinfo.varmehjelpemiddel.opplysingerFraLege.formidlerBekrefterAt')}:</Label>
          <ul style={{ margin: 0 }}>
            {hm.varmehjelpemiddelInfo?.legeBekrefterDiagnose && (
              <li>{t('hjelpemiddelinfo.varmehjelpemiddel.legeBekrefterDiagnose')}</li>
            )}
            {hm.varmehjelpemiddelInfo?.opplysningerFraLegeOppbevaresIKommune && (
              <li>{t('hjelpemiddelinfo.varmehjelpemiddel.opplysningerFraLegeOppbevaresIKommune')}</li>
            )}
          </ul>
        </>
      )}
    </>
  )
}

export default VarmehjelpemiddelInfo
