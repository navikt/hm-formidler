import React from 'react'
import { Link } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { ExternalLinkIcon } from '@navikt/aksel-icons'
import { type Vedlegg } from '../interfaces/Innsenderbehovsmelding'
import { Avstand } from './Avstand'
import { SOKNAD_API_PATH } from '../services/rest-service'

type Props = {
  vedlegg: Vedlegg[]
}

// Viser en liste med lenker til vedlegg. Gjenbrukes både for vedlegg på toppnivå og for vedlegg
// nøstet under produktkategorier/komponenter (f.eks. dørautomatikk).
const VedleggListe: React.FC<Props> = ({ vedlegg }) => {
  const { t } = useTranslation()

  return (
    <>
      {vedlegg.map((v) => (
        <Avstand key={v.id} marginBottom={2}>
          <Link href={`${SOKNAD_API_PATH}/soknad/vedlegg/formidler/${v.id}`} target="_blank" inlineText>
            <ExternalLinkIcon aria-hidden="true" />
            {v.navn} {t('oppsummering.vedlegg.åpnerINyFane')}
          </Link>
        </Avstand>
      ))}
    </>
  )
}

export default VedleggListe
