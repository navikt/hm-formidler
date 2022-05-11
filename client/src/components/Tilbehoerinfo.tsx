import React from 'react'
import { Label, Detail } from '@navikt/ds-react'
import { Hjelpemiddeltilbehoer } from '../interfaces/CommonTypes'
import { useTranslation } from 'react-i18next'

type TilbehoerinfoProps = {
  tilbehoerListe?: Hjelpemiddeltilbehoer[]
}

const Tilbehoerinfo: React.FC<TilbehoerinfoProps> = (props: TilbehoerinfoProps) => {
  const { t } = useTranslation()
  const { tilbehoerListe } = props

  return (
    <>
      {tilbehoerListe && tilbehoerListe?.length > 0 && (
        <div>
          <Label className={'fixedWidthLabel'}>{t('leggTilEllerEndre.tilbehor')}</Label>
        </div>
      )}
      {tilbehoerListe && tilbehoerListe?.length > 0 && (
        <ul style={{ paddingLeft: '0', margin: '0' }}>
          {tilbehoerListe?.map((tlbhr: Hjelpemiddeltilbehoer, tilbehorIdx: number) => (
            <li key={tilbehorIdx} className="tilbehoerinfo">
              <span className="sr-only">HMS nummer</span>
              <Detail size="small" style={{ flex: '0 0 5rem' }}>
                {tlbhr.hmsnr}
              </Detail>
              <Detail size="small" style={{ flex: '1' }}>
                {tlbhr.navn}
              </Detail>
              <Detail size="small" className="tilbehoerinfo-antall">
                {t('handlekurv.tilbehoer.antall', { antall: tlbhr.antall })}
              </Detail>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Tilbehoerinfo
