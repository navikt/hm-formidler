import { BodyShort, GuidePanel, Heading, ReadMore } from '@navikt/ds-react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactComponent as SpotIllustration } from '../assets/svg/illu_veileder_HMS.svg'
import StatusBeskrivelse from '../components/StatusBeskrivelse'
import { useRoller } from '../statemanagement/ApplicationContext'
import './../stylesheet/styles.scss'

const SoknadsOversiktVeileder: React.FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const { erFormidler, erFormidlerPilotkommune } = useRoller()

  return (
    <>
      <div className="veilederWrapperPanel">
        <GuidePanel poster illustration={<SpotIllustration />}>
          <BodyShort>{t('hoved.veilederpanel.p0')}{erFormidlerPilotkommune && t('hoved.veilederpanel.p1')}{t('hoved.veilederpanel.p2')}</BodyShort>
          {erFormidlerPilotkommune && (
            <BodyShort style={{ marginTop: '0.5rem' }}>{t('hoved.veilederpanel.p3')}</BodyShort>
          )}

          <ReadMore
            style={{ marginTop: '2rem' }}
            header={isOpen ? t('hoved.veilederpanel.statuser.lukk') : t('hoved.veilederpanel.statuser.apne')}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Heading size="medium" level="2">
              {t('soknadsoversikt.soknadsoversikt.beskrivelseAvStatuser')}
            </Heading>

            <ul style={{ listStyleType: 'none', padding: '0' }}>
              {erFormidler && (<>
                {erFormidlerPilotkommune && (<>
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
                </>)}
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.innsendtAvDeg.tittel')}
                    beskrivelse={t('statuser.innsendtAvDeg.beskrivelse')}
                  />
                </li>
              </>)}
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.underBehandling.tittel')}
                  beskrivelse={t('statuser.underBehandling.beskrivelse')}
                />
              </li>
              {erFormidler && (<>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.innvilget.tittel')}
                    beskrivelse={t('statuser.innvilget.beskrivelse')}
                  />
                </li>
              </>)}
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.godkjent.tittel')}
                  beskrivelse={t('statuser.godkjent.beskrivelse')}
                />
              </li>
              {erFormidler && (<>
                {erFormidlerPilotkommune && (<>
                  <li>
                    <StatusBeskrivelse
                      tittel={t('statuser.slettet.tittel')}
                      beskrivelse={t('statuser.slettet.beskrivelse')}
                    />
                  </li>
                </>)}
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
              </>)}
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.avvist.tittel')}
                  beskrivelse={t('statuser.avvist.beskrivelse')}
                />
              </li>
              <li>
                <StatusBeskrivelse
                  tittel={t('statuser.lukket.tittel')}
                  beskrivelse={t('statuser.lukket.beskrivelse')}
                />
              </li>
              {erFormidler && (<>
                <li>
                  <StatusBeskrivelse
                    tittel={t('statuser.ferdig.tittel')}
                    beskrivelse={t('statuser.ferdig.beskrivelse')}
                  />
                </li>
              </>)}
            </ul>
          </ReadMore>

        </GuidePanel>
      </div>
    </>
  )
}

export default SoknadsOversiktVeileder
