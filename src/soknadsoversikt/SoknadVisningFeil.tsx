import '../stylesheet/styles.scss'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import Veilederpanel from 'nav-frontend-veilederpanel'
import Lenke from 'nav-frontend-lenker'
import environment from '../environment'
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
              Vi kan ikke vise denne søknaden for øyblikket
            </Systemtittel>

            <Normaltekst style={{ marginBottom: '0.5rem' }}>
              Dette kan skyldes treghet i systemet. Vennligst forsøk å{' '}
              <Lenke href={`./${soknadsid}`}>laste inn siden på nytt.</Lenke>
            </Normaltekst>
            <Normaltekst style={{ marginBottom: '0.5rem' }}>
              Dersom det ikke fungerer så kan du åpne den gamle visningen{' '}
              <Lenke href={`${environment.SOKNAD_URL}/api/soknad/kvittering/${soknadsid}`} target="_blank">
                her (åpnes i ny fane).
              </Lenke>
            </Normaltekst>
            <Normaltekst>
              Vi har registrert feilen og vil forsøk å rette opp i den så fort som mulig. Dersom ingen av alternativene
              ovenfor fungerer så kan du kontakte oss på{' '}
              <Lenke href={`mailto: digihot@nav.no?subject=Feil med visning av søknad ${soknadsid}`}>
                digihot@nav.no
              </Lenke>{' '}
              og oppgi søknadsID <b>{soknadsid}</b> i mailen.
            </Normaltekst>
          </Veilederpanel>
        </div>
      </main>
    </>
  )
}

export default SoknadVisningFeil
