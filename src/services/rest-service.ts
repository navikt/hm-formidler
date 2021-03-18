import { ApiError } from '../types/errors'
import environment from '../environment'
import { BrukervalgEvent } from './brukerValgEvent'

export const API_PATH = '/hjelpemidler/formidler/api'

export interface RestService {
  hentSpraak: () => Promise<any>
  lagreBrukervalg: (soknadId: string, eventName: BrukervalgEvent) => Promise<any>
}

const fetchGet: (url: string) => Promise<Response> = (url) => {
  return fetchWithCredentials(url, { headers: { Pragma: 'no-cache' } })
}
const fetchPut: (url: string, otherParams?: any) => Promise<Response> = (url, otherParams) => {
  return fetchWithCredentials(url, { method: 'PUT', ...otherParams })
}

const fetchWithCredentials: (url: string, otherParams?: any) => Promise<Response> = (url, otherParams) => {
  return fetch(url, { credentials: 'same-origin', ...otherParams })
}

const handleResponse = async (response: Response) => {
  if (response.status >= 400 && response.status < 500) {
    const error = await response.text()
    throw new ApiError(error, response.status)
  }
  if (!response.ok) {
    const errorMessage = await response.text()
    throw new ApiError(`Feil ved kontakt mot baksystem HTTP ${errorMessage}.`, response.status)
  }
}

const lagreBrukervalg = async (soknadId: string, eventName: BrukervalgEvent): Promise<Response | any> => {
  if (environment.MILJO === 'labs-gcp') {
    return {}
  }
  const response = await fetchPut(`/hjelpemidler/formidler/soknader/${soknadId}/${eventName}`)
  await handleResponse(response)
  return response
}

const hentSpraak = async () => {
  if (environment.MILJO === 'labs-gcp') {
    return { spraak: 'nb' }
  }
  const response = await fetchGet(`${API_PATH}/dkif/spraak`)
  await handleResponse(response)
  return await response.json()
}

export const fetcher = async (url: string) => {
  const response = await fetchGet(url)
  return await response.json()
}

const restService: RestService = {
  hentSpraak: hentSpraak,
  lagreBrukervalg: lagreBrukervalg,
}

export default restService
