import express from 'express'

import { setupMiddlewares } from '@/config'
import setupModules from './modules'

const app = express()

setupMiddlewares(app)
setupModules(app)

export default app
