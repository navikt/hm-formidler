import './../stylesheet/styles.scss'
import Banner from '../components/Banner'
import useSWR from 'swr'
import { API_PATH, fetcher } from '../services/rest-service'
import NavFrontendSpinner from 'nav-frontend-spinner'
import 'nav-frontend-tabell-style'
import { BASE_PATH } from '../App'
import { useHistory, useParams } from 'react-router-dom'
import Soknad from '../soknad/Soknad'

interface ParamTypes {
  soknadsid: string
}

const SoknadVisning: React.FC = () => {
  const { soknadsid } = useParams<ParamTypes>()
  const { data, error } = useSWR(`${API_PATH}/soknad/formidler/${soknadsid}`, fetcher)
  const history = useHistory()

  if (error) {
    history.push({ pathname: `${BASE_PATH}/feilside` }) // TODO kan vise feilmelding på denne siden
  }
  if (!data)
    return (
      <div className="content centeredElement">
        <NavFrontendSpinner type="L" />
      </div>
    )

  const { søknadsdata } = data

  console.log('Søknadsdata: ', data)

  return (
    <>
      <header>
        <Banner />
      </header>

      <main style={{ paddingTop: '2rem' }}>
        <Soknad soknad={søknadsdata} />
      </main>
    </>
  )
}

export default SoknadVisning
