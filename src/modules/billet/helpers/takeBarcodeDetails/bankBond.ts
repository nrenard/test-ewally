import { cutText } from '@/shared'

import { BILLET_TYPES } from '../../constants'
import { takeDueDate } from '../index'

interface IDetails {
  expirationDate: string
  amount: string
}

const takeDueDateBankBond = takeDueDate(BILLET_TYPES.BANK_BOND)

export default (barcode: string): IDetails => {
  const dueDateFactor = cutText(barcode, 5, 9)
  const cents = cutText(barcode, 17, 19)
  const dolar = cutText(barcode, 9, 17)

  const amount = `${Number(dolar)}.${cents}`
  const expirationDate = takeDueDateBankBond(Number(dueDateFactor))

  return {
    amount,
    expirationDate
  }
}
