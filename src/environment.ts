const environment = () => {
  // To avoid undefined values in the Jest tests, we use these fallback values.
  // Anything besides labs-gcp will give TypeError: Network request failed as there are exceptions in the rest calls for labs-gcp
  return {
    MILJO: (window as any).appSettings !== undefined ? (window as any).appSettings.MILJO : 'local',
  }
}

export default environment()
