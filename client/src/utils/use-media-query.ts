import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string) => {
  const mediaMatch = window.matchMedia(query)
  const [matches, setMatches] = useState(mediaMatch.matches)

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)
    mediaMatch.addListener(handler)
    return () => mediaMatch.removeListener(handler)
  })

  return matches
}
