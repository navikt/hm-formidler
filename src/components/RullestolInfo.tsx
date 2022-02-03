import { HjelpemiddelItem } from '../interfaces/CommonTypes'
import { Element, Normaltekst } from 'nav-frontend-typografi'
import { Kroppsmaal } from '../interfaces/Brukerinfo'
import { useTranslation } from 'react-i18next'

type RullestolInfoProps = {
  hm: HjelpemiddelItem
  kroppsmaal: Kroppsmaal | undefined
}

export const RullestolInfo = (props: RullestolInfoProps) => {
  const { t } = useTranslation()
  const { hm, kroppsmaal } = props
  return (
    <>
      {hm.rullestolInfo?.skalBrukesIBil && (
        <div>
          <Element style={{ display: 'inline' }}>{t('rullestol.bil.tittel')}</Element>
          <Normaltekst style={{ display: 'inline' }}>{t('rullestol.bil.skalBrukesIBil')}</Normaltekst>
        </div>
      )}
      {hm.rullestolInfo?.sitteputeValg && (
        <div>
          <Element style={{ display: 'inline' }}>{t('rullestol.sittepute.tittel')}</Element>
          <Normaltekst style={{ display: 'inline' }}>{t(hm.rullestolInfo?.sitteputeValg)}</Normaltekst>
        </div>
      )}
      {kroppsmaal && (
        <div>
          <Element style={{ display: 'inline' }}>{t('oppsummering.kroppsmål.tittel')}</Element>
          <Normaltekst style={{ display: 'inline' }}>
            {t('oppsummering.kroppsmål', {
              setebredde: kroppsmaal.setebredde,
              legglengde: kroppsmaal.legglengde,
              laarlengde: kroppsmaal.laarlengde,
              hoyde: kroppsmaal.hoyde,
              kroppsvekt: kroppsmaal.kroppsvekt,
            })}
          </Normaltekst>
        </div>
      )}
    </>
  )
}
