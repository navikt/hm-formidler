import { http, HttpResponse } from 'msw'
import { BehovsmeldingType } from '../../interfaces/CommonTypes'
import type { Roller } from '../../interfaces/Roller'
import { ROLLER_PATH } from '../../services/rest-service'

const rolleHandlers = [
  http.get<{}, {}, Roller>(`${ROLLER_PATH}`, () => {
    return HttpResponse.json({
      roller: [{ rolle: 'KOMMUNAL_FORMIDLER' }, { rolle: 'BESTILLER' }],
      tillatelser: {
        behovsmeldingstyper: [BehovsmeldingType.SØKNAD, BehovsmeldingType.BESTILLING, BehovsmeldingType.BYTTE],
        digitalBekreftelse: true,
      },
    })
  }),
]

export default rolleHandlers
