import amplitudeHandlers from './amplitudeHandlers'
import navHandlers from './nav'
import rolleHandlers from './roller'
import soknadsbehandlingDbHandlers from './soknadsbehandlingDb'

export const handlers = [...navHandlers, ...rolleHandlers, ...soknadsbehandlingDbHandlers, ...amplitudeHandlers]
