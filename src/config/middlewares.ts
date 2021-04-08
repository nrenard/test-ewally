import { Express, Response, NextFunction, json } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

const cors = (_, res: Response, next: NextFunction): void => {
  res.set('access-control-allow-origin', '*')
  res.set('access-control-allow-headers', '*')
  res.set('access-control-allow-methods', '*')
  next()
}

export default (app: Express): void => {
  app.use(json())
  app.use(cors)
  app.use(helmet())
  app.use(morgan('common'))
}
