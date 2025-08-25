import { useTranslation } from 'react-i18next'
import { Funksjonsbeskrivelse } from '../interfaces/Innsenderbehovsmelding'
import { Heading, VStack } from '@navikt/ds-react'
import InfoRow from '../components/InfoRow'

interface Props {
  funksjonsbeskrivelse: Funksjonsbeskrivelse
}

const FunksjonsbeskrivelseOppsummering = ({ funksjonsbeskrivelse }: Props) => {
  const { t } = useTranslation()

  const { innbyggersVarigeFunksjonsnedsettelse, diagnose, beskrivelse } = funksjonsbeskrivelse

  return (
    <VStack gap="6" style={{ marginBottom: '2rem' }}>
      <Heading size="small" level="2">
        {t('funksjonsbeskrivelse.innbyggersFunksjon')}
      </Heading>
      <VStack gap="2">
        <InfoRow
          label={t('funksjonsbeskrivelse.sykdomSkadeLyte')}
          body={t(`funksjonsbeskrivelse.innbyggersVarigeFunksjonsnedsettelse.${innbyggersVarigeFunksjonsnedsettelse}`)}
        />
        {diagnose && (
          <InfoRow
            label={t('funksjonsbeskrivelse.diagnose')}
            body={diagnose}
          />
        )}
        <InfoRow
          label={t('funksjonsbeskrivelse.funksjonsbeskrivelse')}
          body={beskrivelse}
        />
      </VStack>
    </VStack>
  )
}

export default FunksjonsbeskrivelseOppsummering
