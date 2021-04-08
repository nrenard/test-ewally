import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

import documentation from '@/documentation'

export default (app: Express): void => {
  app.use('/docs', serve, setup(documentation))
}
