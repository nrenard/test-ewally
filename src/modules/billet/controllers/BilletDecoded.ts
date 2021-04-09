import { Request, Response } from 'express'

import { Controller } from '@/@types/protocols'

import { badRequest } from '@/shared'

export default class BilletDecoded implements Controller {
  private readonly validateBillet: any

  constructor ({ validateBillet }) {
    this.validateBillet = validateBillet
  }

  public async handle (req: Request, res: Response): Promise<Response> {
    return res.adaptorResponse(badRequest('Code param is incorrect.'))
  }
}
