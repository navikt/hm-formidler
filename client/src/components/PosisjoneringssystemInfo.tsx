import { BodyShort } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { HjelpemiddelItem, PosisjoneringsputeBehov, PosisjoneringsputeOppgaverIDagligliv } from '../interfaces/CommonTypes'

interface Props {
  hm: HjelpemiddelItem
}

const PosisjoneringssystemInfo = ({ hm }: Props) => {
  const { t } = useTranslation()

  return (<>
    {(hm.posisjoneringssystemInfo?.skalIkkeBrukesSomBehandlingshjelpemiddel ||
      hm.posisjoneringssystemInfo?.skalIkkeBrukesTilRenSmertelindring) && (
        <div style={{ marginBottom: '0.5rem' }}>
          <BodyShort>
            <b>{t('felles.formidlerBekrefterAt')}:</b>
          </BodyShort>
          <ul style={{ margin: 0 }}>
            {hm.posisjoneringssystemInfo.skalIkkeBrukesSomBehandlingshjelpemiddel && (
              <li>
                <BodyShort>
                  {t('leggTilEllerEndre.posisjoneringssystem.skalIkkeBrukesSomBehandlingshjelpemiddel')}
                </BodyShort>
              </li>
            )}
            {hm.posisjoneringssystemInfo.skalIkkeBrukesTilRenSmertelindring && (
              <li>
                <BodyShort>
                  {t('leggTilEllerEndre.posisjoneringssystem.skalIkkeBrukesTilRenSmertelindring')}
                </BodyShort>
              </li>
            )}
          </ul>
        </div>
      )}
    {hm.posisjoneringssystemInfo?.behov === PosisjoneringsputeBehov.STORE_LAMMELSER && (
      <div style={{ marginBottom: '0.5rem' }}>
        <BodyShort>
          <b>{t('felles.behov')}: </b>
          {t('leggTilEllerEndre.posisjoneringssystem.STORE_LAMMELSER')}
        </BodyShort>
      </div>
    )}

    {hm.posisjoneringssystemInfo?.behov === PosisjoneringsputeBehov.DIREKTE_AVHJELPE_I_DAGLIGLIVET && (
      <div style={{ marginBottom: '0.5rem' }}>
        <BodyShort>
          <b>{t('felles.behov')}: </b>
          {t('leggTilEllerEndre.posisjoneringssystem.DIREKTE_AVHJELPE_I_DAGLIGLIVET')}{' '}
          {t('handlekurv.posisjoneringssystem.oppgaverIDagliglivet')}
          {hm.posisjoneringssystemInfo.oppgaverIDagliglivet?.map((oppgave) =>
            oppgave === PosisjoneringsputeOppgaverIDagligliv.ANNET ? (
              ` ${hm.posisjoneringssystemInfo?.oppgaverIDagliglivetAnnet}`
            ) : (
              <> {t(`leggTilEllerEndre.posisjoneringssystem.behov.${oppgave}`)}</>
            )
          )}
        </BodyShort>
      </div>
    )}
  </>
  )
}

export default PosisjoneringssystemInfo
