import umamiHandlers from './umamiHandlers'
import navHandlers from './nav'
import rolleHandlers from './roller'
import soknadsbehandlingDbHandlers from './soknadsbehandlingDb'

export const handlers = [...navHandlers, ...rolleHandlers, ...soknadsbehandlingDbHandlers, ...umamiHandlers]
