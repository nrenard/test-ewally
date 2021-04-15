import { Router } from 'express'

import { validateDigitableLines } from './validations'
import { ValidAndReturnDetails } from './useCases'

import { BilletDecodedController } from './controllers'

const routes = Router()

const prefix = 'boleto'

const validAndReturnDetails = new ValidAndReturnDetails()

const billetDecodedController = new BilletDecodedController({ validateDigitableLines, validAndReturnDetails })

routes.get(`/${prefix}/:code`, billetDecodedController.handle.bind(billetDecodedController))

export default routes
