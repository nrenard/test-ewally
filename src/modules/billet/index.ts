import { Router } from 'express'

import { BilletDecodedController } from './controllers'

const routes = Router()

const prefix = 'boleto'

const billetDecodedController = new BilletDecodedController({ validateBillet: () => {} })

routes.get(`/${prefix}/:code`, billetDecodedController.handle)

export default routes
