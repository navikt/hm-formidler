
export const API_PATH = '/hjelpemidler/formidler/api'

const fetchGet: (url: string) => Promise<Response> = (url) => {
  return fetchWithCredentials(url, { headers: { Pragma: 'no-cache' } })
}

const fetchWithCredentials: (url: string, otherParams?: any) => Promise<Response> = (url, otherParams) => {
  return fetch(url, { credentials: 'same-origin', ...otherParams })
}

export const fetcher = async (url: string) => {
  const response = await fetchGet(url)
  return await response.json()
}
