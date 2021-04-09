import 'express'

import { IHelperReponse } from './protocols'

declare module 'express' {
  export interface Response {
    adaptorResponse: IHelperReponse
  }
}
