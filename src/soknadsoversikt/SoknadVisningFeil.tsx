import '../stylesheet/styles.scss'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import Veilederpanel from 'nav-frontend-veilederpanel'
import Lenke from 'nav-frontend-lenker'
import { Tilbakeknapp } from 'nav-frontend-ikonknapper'
import { useHistory } from 'react-router-dom'
import { BASE_PATH } from '../App'

interface SoknadVisningFeilProps {
  soknadsid: string
}

const SoknadVisningFeil: React.FC<SoknadVisningFeilProps> = (props: SoknadVisningFeilProps) => {
  const history = useHistory()

  const { soknadsid } = props

  return (
    <>
      <main style={{ paddingTop: '2rem' }}>
        <div className="customPanel">
          <Tilbakeknapp
            onClick={() => {
              history.push({
                pathname: `${BASE_PATH}`,
              })
            }}
            style={{ marginBottom: '0.5rem' }}
          >
            Tilbake til oversikt
          </Tilbakeknapp>
          <Veilederpanel fargetema="advarsel" type="plakat" svg={<SpotIllustration />}>
            <Systemtittel className="centeredElement" style={{ marginBottom: '2rem' }}>
              Vi kan ikke vise denne søknaden for øyeblikket
            </Systemtittel>

            <Normaltekst style={{ marginBottom: '0.5rem' }}>
              Dette kan skyldes treghet i systemet. Vennligst forsøk å{' '}
              <Lenke href={`./${soknadsid}`}>laste inn siden på nytt.</Lenke>
            </Normaltekst>
          </Veilederpanel>
        </div>
      </main>
    </>
  )
}

export default SoknadVisningFeil
