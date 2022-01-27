import i18n from '../i18n'

import validator from '@navikt/fnrvalidator'

export const validateStringIsRequiredAndObeysMaxLength = (input: string, fieldName: string) => {
  const MAX_LETTERS = 256

  if (!input.length) {
    return i18n.t('validering.erPakrevd', { fieldName: fieldName })
  } else if (input.length > MAX_LETTERS) {
    return i18n.t('validering.maxLengde', { maxLengde: MAX_LETTERS })
  } else {
    return undefined
  }
}

export const validateNonRequiredStringObeysMaxLength = (input: string, fieldName: string) => {
  const MAX_LETTERS = 256

  if (input.length > MAX_LETTERS) {
    return i18n.t('validering.maxLengde', { fieldName: fieldName, maxLengde: MAX_LETTERS })
  } else {
    return undefined
  }
}

export const validateRequiredStringIsCorrectNrOfDigits = (input: string, fieldName: string, nrOfDigits: number) => {
  if (validateCorrectNrOfDigits(input, nrOfDigits)) {
    return i18n.t('validering.maxSiffer', { fieldName: fieldName, maxSiffer: nrOfDigits })
  } else if (validateNonEmptyString(input)) {
    return i18n.t('validering.erPakrevd', { fieldName: fieldName })
  } else {
    return undefined
  }
}

export const validateRequiredString = (input: string, fieldName: string) => {
  if (validateNonEmptyString(input)) {
    return i18n.t('validering.erPakrevd', { fieldName: fieldName })
  } else {
    return undefined
  }
}

export const validateEmailAndRequired = (input: string, fieldName: string) => {
  const emailRegEx = /^.+?@.+$/
  if (input.length === 0) {
    return i18n.t('validering.erPakrevd', { fieldName: fieldName })
  } else if (input === '' || emailRegEx.test(input)) {
    return undefined
  } else {
    return i18n.t('validering.gyldigEpost', { fieldName: fieldName })
  }
}

export const validateFodselsnummer = (input: string, fieldName: string, nrOfDigits: number) => {
  if (validateCorrectNrOfDigits(input, nrOfDigits)) {
    return i18n.t('validering.maxSiffer', { fieldName: fieldName, maxSiffer: nrOfDigits })
  } else if (validateNonEmptyString(input)) {
    return i18n.t('validering.erPakrevd', { fieldName: fieldName })
  }

  const validation = validator.idnr(input)
  if (validation.status === 'invalid') {
    return i18n.t('validering.gyldig', { fieldName: fieldName })
  } else {
    return undefined
  }
}

export const validateRequiredCheckbox = (state: boolean, message: string) => {
  if (!state) {
    return message
  }
  return undefined
}

const validateCorrectNrOfDigits = (input: string, nrOfDigits: number) => {
  return input.length > 0 && input.length !== nrOfDigits
}

const validateNonEmptyString = (input: string) => {
  return input.length === 0
}
