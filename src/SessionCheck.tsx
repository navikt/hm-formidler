import React, { useEffect, useState } from 'react'
import Modal from 'nav-frontend-modal'
import { useTranslation } from 'react-i18next'
import AlertStripe from 'nav-frontend-alertstriper'
import { Hovedknapp } from 'nav-frontend-knapper'
import { digihot_customevents, logCustomEvent, logVistSesjonUtloperVarsel } from './utils/amplitude'
import restService from './services/rest-service'

interface Props {
  children: React.ReactNode
}

const CHECK_INTERVAL = 30 * 1000
const VIS_VARSEL_PAA_MINUTT = 5

const SessionCheck = ({ children }: Props) => {
  const { t } = useTranslation()
  const [visSesjonUtloperVarsel, setVisSesjonUtloperVarsel] = useState(false)
  const [harVistSesjonUtloperVarsel, setHarVistSesjonUtloperVarsel] = useState(false)
  const [visSesjonUtloptVarsel, setVisSesjonUtloptVarsel] = useState(false)
  const [sekunderTilUtlop, setSekunderTilUtlop] = useState<number | undefined>()

  const hentSessionExp = async (): Promise<{ exp: number } | undefined> => {
    try {
      const response = await restService.getSessionExp()

      if (!response.ok) {
        if (response.status === 401) {
          setVisSesjonUtloperVarsel(false)
          setVisSesjonUtloptVarsel(true)
          logCustomEvent(digihot_customevents.VARSEL_OM_SESJON_UTLOPT)
        }
        return
      }

      const data = await response.json()
      return data
    } catch (err) {
      console.log('Kunne ikke hente session exp:', err)
      return
    }
  }

  useEffect(() => {
    // Ikke sjekk hvis vi bruker er i labs/mock (endret fra MSW)
    if (window.appSettings.MILJO === 'labs-gcp') {
      return
    }

    const interval = setInterval(async () => {
      const data = await hentSessionExp()
      if (!data) {
        clearInterval(interval)
        return
      }

      setSekunderTilUtlop(Math.round(data.exp - Date.now() / 1000))
    }, CHECK_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (
      harVistSesjonUtloperVarsel === false &&
      sekunderTilUtlop !== undefined &&
      sekunderTilUtlop <= VIS_VARSEL_PAA_MINUTT * 60
    ) {
      setVisSesjonUtloperVarsel(true)
      setHarVistSesjonUtloperVarsel(true)
      logVistSesjonUtloperVarsel({ sekunderTilUtlop })
    }
  }, [sekunderTilUtlop, harVistSesjonUtloperVarsel])

  return (
    <>
      {visSesjonUtloptVarsel && (
        <Modal
          closeButton={false}
          onRequestClose={() => {}}
          isOpen={true}
          contentLabel=""
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          appElement={document.getElementById('root')!}
        >
          <div className="customModal">
            <div className="contentBlock">
              <AlertStripe type="advarsel" form="inline">
                {t('sesjon.utlopt')}
              </AlertStripe>
            </div>
            <div className="centerButtons">
              <div className="knappepanel">
                <Hovedknapp
                  onClick={() => {
                    window.location.reload()
                  }}
                >
                  {t('sesjon.utlopt.loggInn')}
                </Hovedknapp>
              </div>
            </div>
          </div>
        </Modal>
      )}
      {visSesjonUtloperVarsel && sekunderTilUtlop !== undefined && (
        <Modal
          closeButton={true}
          onRequestClose={() => setVisSesjonUtloperVarsel(false)}
          isOpen={true}
          contentLabel=""
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          appElement={document.getElementById('root')!}
        >
          <div className="customModal">
            <div className="contentBlock">
              <AlertStripe type="advarsel" form="inline">
                {t('sesjon.utloper.tid', {
                  tid: `${Math.ceil(sekunderTilUtlop / 60)}`,
                })}
                <br />
                {t('sesjon.utloper.forklaring')}
              </AlertStripe>
            </div>
            <div className="centerButtons">
              <div className="knappepanel">
                <Hovedknapp
                  onClick={() => {
                    setVisSesjonUtloperVarsel(false)
                  }}
                >
                  OK
                </Hovedknapp>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <>{children}</>
    </>
  )
}

export default SessionCheck
