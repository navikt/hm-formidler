import { BodyShort } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem, PosisjoneringsputeBehov, PosisjoneringsputeOppgaverIDagligliv } from '../interfaces/CommonTypes'
import InfoLinje from './InfoLinje'

interface Props {
  hm: HjelpemiddelItem
}

const PosisjoneringssystemInfo = ({ hm }: Props) => {
  const { t } = useTranslation()

  return (<>
    {(hm.posisjoneringssystemInfo?.skalIkkeBrukesSomBehandlingshjelpemiddel ||
      hm.posisjoneringssystemInfo?.skalIkkeBrukesTilRenSmertelindring) && (
        <InfoLinje
          overskrift={t('felles.formidlerBekrefterAt')}
          info={
            <ul style={{ margin: 0 }}>
              {hm.posisjoneringssystemInfo.skalIkkeBrukesSomBehandlingshjelpemiddel && (
                <li>
                  <BodyShort>
                    {t('hjelpemiddelinfo.posisjoneringssystem.skalIkkeBrukesSomBehandlingshjelpemiddel')}
                  </BodyShort>
                </li>
              )}
              {hm.posisjoneringssystemInfo.skalIkkeBrukesTilRenSmertelindring && (
                <li>
                  <BodyShort>
                    {t('hjelpemiddelinfo.posisjoneringssystem.skalIkkeBrukesTilRenSmertelindring')}
                  </BodyShort>
                </li>
              )}
            </ul>}
        />
      )}
    {hm.posisjoneringssystemInfo?.behov === PosisjoneringsputeBehov.STORE_LAMMELSER && (
      <InfoLinje
        overskrift={t('felles.behov')}
        info={t('hjelpemiddelinfo.posisjoneringssystem.STORE_LAMMELSER')}
      />
    )}

    {hm.posisjoneringssystemInfo?.behov === PosisjoneringsputeBehov.DIREKTE_AVHJELPE_I_DAGLIGLIVET && (
      <InfoLinje
        overskrift={t('felles.behov')}
        info={<>
          {t('hjelpemiddelinfo.posisjoneringssystem.DIREKTE_AVHJELPE_I_DAGLIGLIVET')}<br />
          {t('hjelpemiddelinfo.posisjoneringssystem.oppgaverIDagliglivet')}
          <ul style={{ margin: 0 }}>
            {hm.posisjoneringssystemInfo.oppgaverIDagliglivet?.map((oppgave) =>
              oppgave === PosisjoneringsputeOppgaverIDagligliv.ANNET ? (
                <li>{hm.posisjoneringssystemInfo?.oppgaverIDagliglivetAnnet}</li>
              ) : (
                <li>{t(`hjelpemiddelinfo.posisjoneringssystem.behov.${oppgave}`)}</li>
              )
            )}
          </ul>
        </>}
      />
    )}
  </>
  )
}

export default PosisjoneringssystemInfo
