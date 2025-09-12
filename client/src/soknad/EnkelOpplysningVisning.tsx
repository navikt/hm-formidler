import { BodyShort } from '@navikt/ds-react'
import type { EnkelOpplysning } from '../interfaces/Innsenderbehovsmelding'
import { lokaliser } from './OpplysningVisning'

type EnkelOpplysningProps = {
  enkelOpplysning: EnkelOpplysning
  className?: string
  ledetekstClassName?: string
  innholdClassName?: string
}

const EnkelOpplysningVisning: React.FC<EnkelOpplysningProps> = ({
  enkelOpplysning,
  className,
  ledetekstClassName,
  innholdClassName,
}: EnkelOpplysningProps) => {
  return (
    <div className={className}>
      <BodyShort weight="semibold" className={ledetekstClassName}>
        {lokaliser(enkelOpplysning.ledetekst)}
      </BodyShort>
      <BodyShort className={innholdClassName}>{lokaliser(enkelOpplysning.innhold)}</BodyShort>
    </div>
  )
}

export default EnkelOpplysningVisning
