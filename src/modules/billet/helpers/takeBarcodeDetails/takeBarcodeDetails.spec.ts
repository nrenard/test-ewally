import { BILLET_TYPES } from '@/modules/billet/constants'

import takeBarcodeDetails from './index'

describe('takeBarcodeDetails Helpers', () => {
  describe('BANK_BOND', () => {
    const takeBarcodeDetailsBankBond = takeBarcodeDetails(BILLET_TYPES.BANK_BOND)

    test('Should call takeBarcodeDetails', async () => {
      const details = takeBarcodeDetailsBankBond('00193373700000001000500940144816060680935031')
      expect(details).toMatchObject({
        expirationDate: '2007-12-31',
        amount: '1.00'
      })
    })
  })

  describe('DEALERSHIP_PAYMENT', () => {
  })
})
