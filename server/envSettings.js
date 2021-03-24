const fsExtra = require('fs-extra')

function createEnvSettingsFile(settingsPath) {
  fsExtra.ensureFile(settingsPath).then((f) => {
    fsExtra.writeFileSync(
      settingsPath,
      `window.appSettings = {
                MILJO: '${process.env.NAIS_CLUSTER_NAME}',
                SOKNAD_URL: '${process.env.SOKNAD_URL}'
            };`
    )
  })
}

module.exports = createEnvSettingsFile
