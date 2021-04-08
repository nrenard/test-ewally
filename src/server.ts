import express from 'express'

import { setupMiddlewares, setupDocs } from '@/config'
import setupModules from './modules'

const app = express()

setupMiddlewares(app)
setupModules(app)
setupDocs(app)

export default app
