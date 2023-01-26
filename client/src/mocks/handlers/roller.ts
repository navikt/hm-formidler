import { rest } from 'msw'
import { Roller } from '../../interfaces/Roller'
import { ROLLER_PATH } from "../../services/rest-service"

const rolleHandlers = [
    rest.get<{}, {}, Roller>(`${ROLLER_PATH}`, (req, res, ctx) => {
        return res(
            ctx.json({
                bestillerRolle: {
                    harBestillerRolle: false,
                    erPilotkommune: false,
                    feil: []
                },
                formidlerRolle: {
                    harFormidlerRolle: true,
                    erPilotkommune: true,
                    harAltinnRettighet: true,
                    harAllowlistTilgang: true,
                    feil: []
                }
            }),
        )
    })
]

export default rolleHandlers