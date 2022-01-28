/* eslint-disable @typescript-eslint/no-explicit-any */
const environment = () => {
  // To avoid undefined values in the Jest tests, we use these fallback values.
  // Anything besides labs-gcp will give TypeError: Network request failed as there are exceptions in the rest calls for labs-gcp
  return {
    MILJO: (window as any).appSettings !== undefined ? (window as any).appSettings.MILJO : 'local',
    SOKNAD_URL:
      (window as any).appSettings !== undefined
        ? (window as any).appSettings.SOKNAD_URL
        : 'http://localhost:3000/hjelpemidler/digitalsoknadhjelpemidler',
  }
}

export default environment()
