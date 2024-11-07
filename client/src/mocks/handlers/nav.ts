import { http, HttpResponse } from 'msw'

const navHandlers = [
  http.get('https://www.nav.no/person/innloggingsstatus/auth', async () => {
    return new HttpResponse('Ok', { status: 200 })
  }),
]

export default navHandlers
