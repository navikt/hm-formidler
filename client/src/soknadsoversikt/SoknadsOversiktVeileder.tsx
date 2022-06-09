import React, { useContext, useState } from 'react'
import './../stylesheet/styles.scss'
import { Heading, BodyShort } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { GuidePanel, Accordion } from '@navikt/ds-react'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import StatusBeskrivelse from '../components/StatusBeskrivelse'
import { ApplicationContext } from '../statemanagement/ApplicationContext'

const SoknadsOversiktVeileder: React.FC = () => {
  const { t } = useTranslation()
  const { erPilotkommuneForBestillingsordning } = useContext(ApplicationContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="veilederWrapperPanel">
        <GuidePanel poster illustration={<SpotIllustration />}>
          <BodyShort>{t('hoved.veilederpanel.p0')}</BodyShort>
          <BodyShort style={{ marginTop: '0.5rem' }}>{t('hoved.veilederpanel.p1')}</BodyShort>
          <BodyShort style={{ marginTop: '0.5rem' }}>{t('hoved.veilederpanel.p2')}</BodyShort>

          <Accordion style={{ marginTop: '10px' }}>
            <Accordion.Item open={isOpen}>
              <Accordion.Header onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? t('hoved.veilederpanel.statuser.lukk') : t('hoved.veilederpanel.statuser.apne')}
              </Accordion.Header>
              <Accordion.Content>
                <Heading size="medium" level="2">
                  {t('soknadsoversikt.soknadsoversikt.beskrivelseAvStatuser')}
                </Heading>

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
                  {erPilotkommuneForBestillingsordning &&
                    <li>
                      <StatusBeskrivelse
                        tittel={t('statuser.godkjent.tittel')}
                        beskrivelse={t('statuser.godkjent.beskrivelse')}
                      />
                    </li>
                  }
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
                  {erPilotkommuneForBestillingsordning &&
                    <li>
                      <StatusBeskrivelse
                        tittel={t('statuser.avvist.tittel')}
                        beskrivelse={t('statuser.avvist.beskrivelse')}
                      />
                    </li>
                  }
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
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </GuidePanel>
      </div>
    </>
  )
}

export default SoknadsOversiktVeileder
