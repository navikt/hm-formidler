/* eslint-disable @typescript-eslint/no-explicit-any */
const environment = () => {
  // To avoid undefined values in the Jest tests, we use these fallback values.
  // Anything besides labs-gcp will give TypeError: Network request failed as there are exceptions in the rest calls for labs-gcp
  return {
    MILJO: window.appSettings === undefined ? 'local' : window.appSettings.MILJO,
    SOKNAD_URL:
      window.appSettings === undefined
        ? 'http://localhost:3000/hjelpemidler/digitalsoknadhjelpemidler'
        : window.appSettings.SOKNAD_URL,
    USE_MSW: window.appSettings === undefined ? true : window.appSettings.USE_MSW,
  }
}

export default environment()
