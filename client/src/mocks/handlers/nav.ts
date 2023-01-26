import { rest } from "msw"

const navHandlers = [
    rest.get('https://www.nav.no/person/innloggingsstatus/auth', async (req, res, ctx) => {
        return res(ctx.status(200))
    }),
]

export default navHandlers