import { Router } from 'express'

const routes = Router()

const prefix = 'boleto'

routes.get(`/${prefix}/:code`, (req, res) => {
  const { code } = req.params
  return res.json({ message: `is: ${code}` })
})

export default routes
