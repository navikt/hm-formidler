import { Tag } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'

interface Props {
  rangering: string
}

const Rangering = ({ rangering }: Props) => {
  const { t } = useTranslation()
  return (
    <Tag size="small" variant={rangering === '1' ? 'success' : 'neutral'}>
      {t('hjelpemidler.sok.rangering')} {rangering}{' '}
    </Tag>
  )
}

export default Rangering
