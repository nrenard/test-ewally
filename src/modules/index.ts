import { Express } from 'express'

import billet from './billet'

export default (app: Express): void => {
  app.use(billet)
}
