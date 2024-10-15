import { useTranslation } from 'react-i18next'
import { Funksjonsbeskrivelse } from '../interfaces/Innsenderbehovsmelding'
import { BodyShort, Heading, Label } from '@navikt/ds-react'

interface Props {
  funksjonsbeskrivelse: Funksjonsbeskrivelse
}

const FunksjonsbeskrivelseOppsummering = ({ funksjonsbeskrivelse }: Props) => {
  const { t } = useTranslation()

  const { innbyggersVarigeFunksjonsnedsettelse, diagnose, beskrivelse } = funksjonsbeskrivelse

  return (
    <div className="contentBlock">
      <div className="contentBlock">
        <Heading size="small" level="2">
          {t('funksjonsbeskrivelse.innbyggersFunksjon')}
        </Heading>
      </div>
      <div className="infoRow">
        <Label className={'infoRowCell fixedWidthLabel'}>{t('funksjonsbeskrivelse.sykdomSkadeLyte')}</Label>
        <BodyShort className={'infoRowCell'}>
          {t(`funksjonsbeskrivelse.innbyggersVarigeFunksjonsnedsettelse.${innbyggersVarigeFunksjonsnedsettelse}`)}
        </BodyShort>
      </div>

      {diagnose && (
        <div className="infoRow">
          <Label className={'infoRowCell fixedWidthLabel'}>{t('funksjonsbeskrivelse.diagnose')}</Label>
          <BodyShort className={'infoRowCell'}>{diagnose}</BodyShort>
        </div>
      )}

      <div className="infoRow">
        <Label className={'infoRowCell fixedWidthLabel'}>{t('funksjonsbeskrivelse.funksjonsbeskrivelse')}</Label>
        <BodyShort className={'infoRowCell'}>{beskrivelse}</BodyShort>
      </div>
    </div>
  )
}

export default FunksjonsbeskrivelseOppsummering
