import './../stylesheet/styles.scss'
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi'
import { useTranslation } from 'react-i18next'
import 'nav-frontend-tabell-style'
import Veilederpanel from 'nav-frontend-veilederpanel'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import Lesmerpanel from 'nav-frontend-lesmerpanel'
import StatusBeskrivelse from '../components/StatusBeskrivelse'

const SoknadsOversiktVeileder: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="veilederWrapperPanel">
        <Veilederpanel fargetema="info" type="plakat" svg={<SpotIllustration />}>
          <Normaltekst>{t('hoved.veilederpanel.p0')}</Normaltekst>
          <Normaltekst style={{ marginTop: '0.5rem' }}>{t('hoved.veilederpanel.p1')}</Normaltekst>
          <Normaltekst style={{ marginTop: '0.5rem' }}>{t('hoved.veilederpanel.p2')}</Normaltekst>

          <Lesmerpanel
            apneTekst={t('hoved.veilederpanel.statuser.apne')}
            lukkTekst={t('hoved.veilederpanel.statuser.lukk')}
          >
            <Systemtittel style={{ marginTop: '1.5rem' }}>Beskrivelse av statuser</Systemtittel>

            <ul style={{ listStyleType: 'none', padding: '0' }}>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.venter.tittel')}
                  beskrivelse={t('statuser.venter.beskrivelse')}
                />
              </li>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.innsendtAvBruker.tittel')}
                  beskrivelse={t('statuser.innsendtAvBruker.beskrivelse')}
                />
              </li>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.innsendtAvDeg.tittel')}
                  beskrivelse={t('statuser.innsendtAvDeg.beskrivelse')}
                />
              </li>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.underBehandling.tittel')}
                  beskrivelse={t('statuser.underBehandling.beskrivelse')}
                />
              </li>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.innvilget.tittel')}
                  beskrivelse={t('statuser.innvilget.beskrivelse')}
                />
              </li>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.slettet.tittel')}
                  beskrivelse={t('statuser.slettet.beskrivelse')}
                />
              </li>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.slettetFrist.tittel')}
                  beskrivelse={t('statuser.slettetFrist.beskrivelse')}
                />
              </li>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.avslatt.tittel')}
                  beskrivelse={t('statuser.avslatt.beskrivelse')}
                />
              </li>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.lukket.tittel')}
                  beskrivelse={t('statuser.lukket.beskrivelse')}
                />
              </li>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.ferdig.tittel')}
                  beskrivelse={t('statuser.ferdig.beskrivelse')}
                />
              </li>
            </ul>
          </Lesmerpanel>
        </Veilederpanel>
      </div>
    </>
  )
}

export default SoknadsOversiktVeileder
