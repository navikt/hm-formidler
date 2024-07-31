import { Label } from '@navikt/ds-react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Kroppsmaal } from '../interfaces/Brukerinfo'
import { HjelpemiddelItem } from '../interfaces/CommonTypes'
import Hjelpemiddelinfo from './Hjelpemiddelinfo'
import Tilbehoerinfo from './Tilbehoerinfo'
import styled from 'styled-components'
import InfoLinje from './InfoLinje'
import Panel from './Panel'
import { HjelpemiddelV2, I18n } from '../interfaces/SoknadInfo'

type HjelpemiddelProps = {
  hm: HjelpemiddelItem
  kroppsmaal: Kroppsmaal | undefined
  hm2: HjelpemiddelV2
}

const Hjelpemiddel: React.FC<HjelpemiddelProps> = (props: HjelpemiddelProps) => {
  const { hm, hm2 } = props

  const { t, i18n } = useTranslation()

  const getI18nTekst = (i18nTekst: I18n): string => {
    console.log('current language', i18n.language)
    if (i18n.language === 'nn') {
      return i18nTekst.nn
    }
    return i18nTekst.nb
  }

  return (
    <Panel background="surface-subtle">
      <div>
        <Hjelpemiddelinfo hjelpemiddel={hm} />
      </div>

      {hm2.opplysninger.map((opplysning) => {
        const overskrift = getI18nTekst(opplysning.label)
        if (opplysning.tekster.length > 1) {
          return (
            <InfoLinje
              overskrift={overskrift}
              info={
                <ul style={{ margin: 0 }}>
                  {opplysning.tekster.map((tekst) => {
                    return <li>{tekst.fritekst ?? getI18nTekst(tekst.i18n!!)}</li>
                  })}
                </ul>
              }
            />
          )
        } else {
          const tekst = opplysning.tekster[0]
          return <InfoLinje overskrift={overskrift} info={tekst.fritekst ?? getI18nTekst(tekst.i18n!!)} />
        }
      })}

      {hm.bytter.map((bytte) => {
        return (
          <>
            <InfoLinje
              overskrift={
                <>
                  {bytte.erTilsvarende && <Label>{t('hjelpemiddelinfo.bytte.skalByttesInn')}</Label>}
                  {!bytte.erTilsvarende && <Label>{t('hjelpemiddelinfo.bytte.skalLeveresTilbake')}</Label>}
                </>
              }
              info={
                <>
                  {bytte.hmsnr} {bytte.hjmNavn}
                  {bytte.serienr && (
                    <>
                      <br />
                      {t('felles.serienummer')}: {bytte.serienr}
                    </>
                  )}
                </>
              }
            />

            {bytte.årsak && (
              <InfoLinje
                overskrift={t('hjelpemiddelinfo.bytte.begrunnelseForBytte')}
                info={
                  <>
                    {t('hjelpemiddelinfo.bytte.hjelpemiddeletSkalByttesFordi')}{' '}
                    {t(`hjelpemiddelinfo.bytte.årsak.${bytte.årsak}`)}.
                  </>
                }
              />
            )}
          </>
        )
      })}

      {hm.tilbehorListe && hm.tilbehorListe.length > 0 && <Tilbehoerinfo tilbehoerListe={hm.tilbehorListe} />}
    </Panel>
  )
}

export default Hjelpemiddel
