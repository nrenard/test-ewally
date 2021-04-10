import { Router } from 'express'

import { validateDigitableLines } from './validations'

import { BilletDecodedController } from './controllers'

const routes = Router()

const prefix = 'boleto'

const billetDecodedController = new BilletDecodedController({ validateDigitableLines })

routes.get(`/${prefix}/:code`, billetDecodedController.handle.bind(billetDecodedController))

export default routes
