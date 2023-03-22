import React, { useEffect, useState } from 'react'
import { Modal } from '@navikt/ds-react'
import { useTranslation } from 'react-i18next'
import { Button, Alert } from '@navikt/ds-react'
import { digihot_customevents, logCustomEvent, logVistSesjonUtloperVarsel } from './utils/amplitude'
import restService from './services/rest-service'
import * as Sentry from '@sentry/browser'

interface Props {
  children: React.ReactNode
}

const CHECK_INTERVAL = 30 * 1000
const VIS_VARSEL_PAA_MINUTT = 5

const SessionCheck: React.FC<Props> = ({ children }: Props) => {
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
          Sentry.addBreadcrumb({ message: 'Sesjon utløpt. Viser varsel om sesjon utløpt.' })
        }
        return
      }

      const data = await response.json()
      return data
    } catch (err) {
      console.log('Kunne ikke hente session exp:', err)
      Sentry.captureException(err)
      return
    }
  }

  useEffect(() => {
    // Ikke sjekk hvis vi bruker er i labs/mock (endret fra MSW)
    if (window.appSettings.USE_MSW) {
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
        <Modal closeButton={false} open={true} onClose={() => {}}>
          <Modal.Content>
            <div className="customModal">
              <div className="contentBlock">
                <Alert variant="warning" inline>
                  {t('sesjon.utlopt')}
                </Alert>
              </div>
              <div className="centerButtons">
                <div className="knappepanel">
                  <Button
                    onClick={() => {
                      window.location.reload()
                    }}
                  >
                    {t('sesjon.utlopt.loggInn')}
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Content>
        </Modal>
      )}
      {visSesjonUtloperVarsel && sekunderTilUtlop !== undefined && (
        <Modal closeButton={true} onClose={() => setVisSesjonUtloperVarsel(false)} open={true}>
          <Modal.Content>
            <div className="customModal">
              <div className="contentBlock">
                <Alert variant="warning" inline>
                  {t('sesjon.utloper.tid', {
                    tid: `${Math.ceil(sekunderTilUtlop / 60)}`,
                  })}
                  <br />
                  {t('sesjon.utloper.forklaring')}
                </Alert>
              </div>
              <div className="centerButtons">
                <div className="knappepanel">
                  <Button
                    onClick={() => {
                      setVisSesjonUtloperVarsel(false)
                    }}
                  >
                    OK
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Content>
        </Modal>
      )}
      <>{children}</>
    </>
  )
}

export default SessionCheck
