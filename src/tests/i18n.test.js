import nb from '../assets/locales/nb/translation.json'
import nn from '../assets/locales/nn/translation.json'
import commonKeys from '../assets/locales/linker.json'

import { exec } from 'child_process'

describe('i18n', () => {
  jest.setTimeout(10000)

  test('Ingen translation keys mangler', (done) => {
    exec(`grep "t(.*\'" --include \*.tsx --include \*.ts -ohrw './src'`, (_, stdout) => {
      const bokmaal = Object.keys(nb)
      //const nynorsk = Object.keys(nn)
      const felles = Object.keys(commonKeys)
      const allBokmaalTranslationsDefined = bokmaal.concat(felles)
      //const allNynorskTranslationsDefined = nynorsk.concat(felles)

      const allTranslationsUsed = stdout.split('t(').map((item) => {
        return item
          .replace(/(.*)'\).*/, '$1')
          .replace(/(\n)/, '')
          .replace(/'/g, '')
      })

      allTranslationsUsed.shift()

      for (let i = 0; i < allTranslationsUsed.length; i += 1) {
        expect(allBokmaalTranslationsDefined).toContainEqual(allTranslationsUsed[i])
      }

      /*for (let i = 0; i < allTranslationsUsed.length; i += 1) {
        expect(allNynorskTranslationsDefined).toContainEqual(allTranslationsUsed[i])
      }*/

      done()
    })
  })

  /**
   * This test is ignored intentionally for now.
   * The test is useful to  run locally to find translations keys that are no longer in use
   * However the test does not work on github actions yet.*/
  /*test('There should not be unused keys', async () => {
    const translationKeys = Object.keys(nb)
    let everyStringsAreUsed = true

    for (let i = 0; i < translationKeys.length; i += 1) {
      await new Promise((resolve) => {
        exec(`grep -rnw './src'  --include=\*.{tsx,ts} -e '${translationKeys[i]}'`, (_, stdout) => {
          if (everyStringsAreUsed) {
            everyStringsAreUsed = !(stdout == '')
          }

          if (stdout == '') {
            console.warn(`[I18n] Could not find '${translationKeys[i]}' in use in any ts or tsx file`)
          }
          resolve()
        })
      })
    }
    expect(everyStringsAreUsed).toBeTruthy()
  })*/
})
