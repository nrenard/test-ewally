import { Request, Response } from 'express'

import { Controller } from '@/@types/protocols'

export default class BilletDecoded implements Controller {
  private readonly validateBillet: any

  constructor ({ validateBillet }) {
    this.validateBillet = validateBillet
  }

  public async handle (req: Request, res: Response): Promise<Response> {
    return res.json({ message: 'ok' })
  }
}
