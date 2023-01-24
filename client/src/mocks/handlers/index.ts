import { rest } from 'msw'
import navHandlers from './nav'
import rolleHandlers from './roller'
import soknadsbehandlingDbHandlers from './soknadsbehandlingDb'

export const handlers = [
  ...navHandlers,
  ...rolleHandlers,
  ...soknadsbehandlingDbHandlers,


  
  // getJson('/api/soknad/formidler/abc887bc-5a95-49c2-a123-f0e0f7c32df3', {
    
  // }),
  // getJson('/api/soknad/formidler/:id', {
    
  // }),
  // getJson('/session/exp', { exp: Math.floor(Date.now() / 1000) + 1 * 60 * 60 * 1000 }),
]
