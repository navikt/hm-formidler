import { ApiError } from '../types/errors'

export const API_PATH = '/hjelpemidler/formidler/api'
export const ROLLER_PATH = '/hjelpemidler/formidler/roller-api/api/roller'
export const SOKNAD_API_PATH = '/hjelpemidler/formidler/soknad-api/hm'
export const HOTSAK_API_PATH = '/hjelpemidler/formidler/hotsak-api'

const fetchGet: (url: string, accept?: string) => Promise<Response> = (url, accept) => {
  return fetchWithCredentials(url, {
    headers: { Pragma: 'no-cache', ...(accept ? { Accept: accept } : {}) },
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchWithCredentials: (url: string, otherParams?: any) => Promise<Response> = (url, otherParams) => {
  return fetch(url, { credentials: 'same-origin', ...otherParams })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetcher = async (url: string, accept?: string): Promise<any> => {
  const response = await fetchGet(url, accept)
  if (response.ok) {
    return accept === 'application/pdf' ? await response.blob() : await response.json()
  } else {
    return Promise.reject(new ApiError('Ukjent feil mot baksystem', response.status))
  }
}
