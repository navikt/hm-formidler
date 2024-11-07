import { http, HttpResponse } from 'msw'
import { Roller } from '../../interfaces/Roller'
import { ROLLER_PATH } from '../../services/rest-service'

const rolleHandlers = [
  http.get<{}, {}, Roller>(`${ROLLER_PATH}`, () => {
    return HttpResponse.json({
      bestillerRolle: {
        harBestillerRolle: true,
        erPilotkommune: true,
        feil: [],
      },
      formidlerRolle: {
        harFormidlerRolle: true,
        erPilotkommune: true,
        feil: [],
      },
    })
  }),
]

export default rolleHandlers
