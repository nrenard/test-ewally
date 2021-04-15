import { barcode } from '@/__mocks__'

import takeBarcodeDetails from './index'

describe('takeBarcodeDetails Helpers', () => {
  describe('BANK_BOND', () => {
    test('Should call takeBarcodeDetails', async () => {
      const details = takeBarcodeDetails(barcode)
      expect(details).toMatchObject({
        expirationDate: '2007-12-31',
        amount: '1.00'
      })
    })
  })
})
