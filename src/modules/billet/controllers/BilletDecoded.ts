import { Request, Response } from 'express'

import { IController } from '@/@types/protocols'
import { IValidAndReturnDetails, IValidateDigitableLines } from '@/modules/billet/@types'

import { badRequest, ok, serverError } from '@/shared'

export default class BilletDecoded implements IController {
  private readonly validateDigitableLines: IValidateDigitableLines
  private readonly validAndReturnDetails: IValidAndReturnDetails

  constructor ({ validateDigitableLines, validAndReturnDetails }) {
    this.validateDigitableLines = validateDigitableLines
    this.validAndReturnDetails = validAndReturnDetails
  }

  public async handle (req: Request, res: Response): Promise<Response> {
    try {
      const { code } = req.params

      const isValid = this.validateDigitableLines(code)
      if (!isValid) return res.adaptorResponse(badRequest('Digitable line missing 47 caracters.'))

      const details = this.validAndReturnDetails.handle(code)

      if (!details) return res.adaptorResponse(badRequest('Digitable line is incorrect.'))

      return res.adaptorResponse(ok(details))
    } catch (err) {
      console.error(err)
      return res.adaptorResponse(serverError())
    }
  }
}
