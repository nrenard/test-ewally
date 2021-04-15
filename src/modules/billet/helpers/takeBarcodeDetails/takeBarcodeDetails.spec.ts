import takeBarcodeDetails from './index'

describe('takeBarcodeDetails Helpers', () => {
  describe('BANK_BOND', () => {
    test('Should call takeBarcodeDetails', async () => {
      const details = takeBarcodeDetails('00193373700000001000500940144816060680935031')
      expect(details).toMatchObject({
        expirationDate: '2007-12-31',
        amount: '1.00'
      })
    })
  })
})
