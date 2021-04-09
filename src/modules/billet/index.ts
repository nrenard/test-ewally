import { Router } from 'express'

import { validateBillet } from './validations'

import { BilletDecodedController } from './controllers'

const routes = Router()

const prefix = 'boleto'

const billetDecodedController = new BilletDecodedController({ validateBillet })

routes.get(`/${prefix}/:code`, billetDecodedController.handle.bind(billetDecodedController))

export default routes
