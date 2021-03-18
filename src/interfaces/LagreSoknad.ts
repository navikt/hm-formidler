import { ApiError } from '../types/errors'

export interface LagreSoknad {
  isSavingSoknad: boolean
  error: ApiError | undefined
}
