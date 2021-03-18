import ReactGA from 'react-ga'

let trackingId = 'UA-9127381-27' // default or labs-gcp

if (process.env.NAIS_CLUSTER_NAME === 'prod-gcp' || process.env.NAIS_CLUSTER_NAME === 'dev-gcp')
  trackingId = 'UA-9127381-16'

export type GAEventArgs = {
  category: string
  action: string
  context?: string
  label?: string
}

export const initGA = () => {
  ReactGA.initialize(trackingId, {
    titleCase: false,
    debug: false,
  })
}

export const gaEvent = (props: GAEventArgs) => {
  const { context, category, action, label } = props
  const actionFinal = `${context ? context + '/' : ''}${action}`

  ReactGA.event({
    category: category,
    action: actionFinal.toLowerCase(),
    label: label || undefined,
  })
}
