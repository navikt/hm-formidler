import { BASE_PATH } from '../App'
import { ApiError } from '../types/errors'

export const API_PATH = '/hjelpemidler/formidler/api'
export const ROLLER_PATH = '/hjelpemidler/formidler/roller-api/api/roller'

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
