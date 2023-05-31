import nb from '../assets/locales/nb/translation.json'
import nn from '../assets/locales/nn/translation.json'

describe('i18n', () => {
  test('nb og nn har like translationkeys', async () => {
    const bokmaal = Object.keys(nb)
    const nynorsk = Object.keys(nn)

    bokmaal.forEach((key) => {
      const bokmålKeyFinnesINynorsk = nynorsk.includes(key)

      if (!bokmålKeyFinnesINynorsk) {
        console.log('Nynorsk mangler translation:', key)
      }

      expect(bokmålKeyFinnesINynorsk).toBeTruthy()
    })

    expect(bokmaal.length === nynorsk.length).toBeTruthy()
  })
})