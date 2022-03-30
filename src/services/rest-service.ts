import { BASE_PATH } from '../App'
import { DkifResponse } from '../interfaces/Dkif'
import { ApiError } from '../types/errors'

export const API_PATH = '/hjelpemidler/formidler/api'
export const SOKNAD_API_PATH = '/hjelpemidler/formidler/soknad-api'

const fetchGet: (url: string) => Promise<Response> = (url) => {
  return fetchWithCredentials(url, { headers: { Pragma: 'no-cache' } })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchWithCredentials: (url: string, otherParams?: any) => Promise<Response> = (url, otherParams) => {
  return fetch(url, { credentials: 'same-origin', ...otherParams })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = async (url: string): Promise<any> => {
  const response = await fetchGet(url)
  if (response.ok) {
    return await response.json()
  } else {
    return Promise.reject(new ApiError('Ukjent feil mot baksystem', response.status))
  }
}

const getSessionExp = async (): Promise<Response> => {
  const response = await fetchGet(`${BASE_PATH}/session/exp`)
  return response
}

const hentSpraak = async (): Promise<DkifResponse> => {
  const response = await fetchGet(`${SOKNAD_API_PATH}/dkif/spraak/`)
  if (response.ok) {
    return await response.json()
  } else {
    return Promise.reject(new ApiError('Ukjent feil mot baksystem', response.status))
  }
}

export interface RestService {
  getSessionExp: () => Promise<Response>
  hentSpraak: () => Promise<DkifResponse>
}

const restService: RestService = {
  getSessionExp,
  hentSpraak,
}

export default restService
