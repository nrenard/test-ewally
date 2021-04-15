import { IReturnHandle, IReturnValid, IValidAndReturnDetails } from '@/modules/billet/@types'

import { validBillet } from '@/modules/billet/helpers'

import { BILLET_TYPES } from '../../constants'

const validDealershipPayment = validBillet(BILLET_TYPES.DEALERSHIP_PAYMENT)
const validBankBond = validBillet(BILLET_TYPES.BANK_BOND)

export default class ValidAndReturnDetails implements IValidAndReturnDetails {
  private readonly digitableLine: string

  constructor (code: string) {
    this.digitableLine = code
  }

  private isValid (): IReturnValid {
    let barcode: string

    barcode = validDealershipPayment(this.digitableLine)
    if (barcode) return { type: BILLET_TYPES.DEALERSHIP_PAYMENT, barcode }

    barcode = validBankBond(this.digitableLine)
    if (barcode) return { type: BILLET_TYPES.BANK_BOND, barcode }

    return null
  }

  public handle (): IReturnHandle {
    const barCode = this.isValid()

    if (!barCode) return null

    return {
      barCode: barCode.barcode,
      amount: 'string',
      expirationDate: 'string'
    }
  }
}
