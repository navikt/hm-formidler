import './../stylesheet/styles.scss'
import { Undertittel } from 'nav-frontend-typografi'
import 'nav-frontend-tabell-style'
import { SoknadInfo } from '../interfaces/SoknadInfo'
import SoknadKort from './SoknadKort'

type SoknadListeProps = {
  alleSoknader: SoknadInfo[]
}

const SoknadListe: React.FC<SoknadListeProps> = (props: SoknadListeProps) => {
  const { alleSoknader } = props
  return (
    <div className="customPanel">
      <div style={{ marginBottom: '1rem' }}>
        <Undertittel>Utfylte digitale søknader</Undertittel>
      </div>
      {alleSoknader.map((soknad: SoknadInfo) => {
        return (
          <div key={soknad.søknadId}>
            <SoknadKort soknadInfo={soknad} />
          </div>
        )
      })}
    </div>
  )
}

export default SoknadListe
