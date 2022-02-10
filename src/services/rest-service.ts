import { BASE_PATH } from '../App'

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
  return await response.json()
}

const getSessionExp = async () => {
  const response = await fetchGet(`${BASE_PATH}/session/exp`)
  return response
}

export interface RestService {
  getSessionExp: () => Promise<Response>
}

const restService: RestService = {
  getSessionExp,
}

export default restService
