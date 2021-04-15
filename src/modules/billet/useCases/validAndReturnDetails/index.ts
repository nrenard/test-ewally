import { IReturnHandle, IReturnValid, IValidAndReturnDetails } from '@/modules/billet/@types'

import { validBillet, takeBarcodeDetails } from '@/modules/billet/helpers'

export default class ValidAndReturnDetails implements IValidAndReturnDetails {
  private digitableLine: string

  private isValid (): IReturnValid {
    const barcode = validBillet(this.digitableLine)
    if (barcode) return barcode

    return null
  }

  public handle (code: string): IReturnHandle {
    this.digitableLine = code

    const barCode = this.isValid()

    if (!barCode) return null

    const {
      amount,
      expirationDate
    } = takeBarcodeDetails(barCode)

    return {
      barCode,
      amount,
      expirationDate
    }
  }
}
