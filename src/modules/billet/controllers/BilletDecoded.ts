import { Request, Response } from 'express'

import { IController } from '@/@types/protocols'
import { IValidateDigitableLines } from '@/modules/billet/@types'

import { badRequest, ok, serverError } from '@/shared'

export default class BilletDecoded implements IController {
  private readonly validateDigitableLines: IValidateDigitableLines

  constructor ({ validateDigitableLines }) {
    this.validateDigitableLines = validateDigitableLines
  }

  public async handle (req: Request, res: Response): Promise<Response> {
    try {
      const { code } = req.params

      const isValid = this.validateDigitableLines(code)

      if (!isValid) return res.adaptorResponse(badRequest('Code param is incorrect.'))

      return res.adaptorResponse(ok('ok'))
    } catch (err) {
      return res.adaptorResponse(serverError())
    }
  }
}
