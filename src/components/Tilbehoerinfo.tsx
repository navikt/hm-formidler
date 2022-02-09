import { Element, Undertekst } from 'nav-frontend-typografi'
import { Hjelpemiddeltilbehoer } from '../interfaces/CommonTypes'
import { useTranslation } from 'react-i18next'

type TilbehoerinfoProps = {
  tilbehoerListe?: Hjelpemiddeltilbehoer[]
}

const Tilbehoerinfo = (props: TilbehoerinfoProps) => {
  const { t } = useTranslation()
  const { tilbehoerListe } = props

  return (
    <>
      {tilbehoerListe && tilbehoerListe?.length > 0 && (
        <div>
          <Element className={'fixedWidthLabel'}>{t('leggTilEllerEndre.tilbehor')}</Element>
        </div>
      )}
      {tilbehoerListe && tilbehoerListe?.length > 0 && (
        <ul style={{ paddingLeft: '0', margin: '0' }}>
          {tilbehoerListe?.map((tlbhr: Hjelpemiddeltilbehoer, tilbehorIdx: number) => (
            <li key={tilbehorIdx} className="tilbehoerinfo">
              <span className="sr-only">HMS nummer</span>
              <Undertekst style={{ flex: '0 0 5rem' }}>{tlbhr.hmsnr}</Undertekst>
              <Undertekst style={{ flex: '1' }}>{tlbhr.navn}</Undertekst>
              <Undertekst className="tilbehoerinfo-antall">
                {t('handlekurv.tilbehoer.antall', { antall: tlbhr.antall })}
              </Undertekst>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Tilbehoerinfo
