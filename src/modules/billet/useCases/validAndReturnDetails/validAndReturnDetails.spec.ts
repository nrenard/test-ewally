import { digitableLineSuccess, digitableLineError, barcode } from '@/__mocks__'

import ValidAndReturnDetails from './index'

describe('ValidAndReturnDetails UseCases', () => {
  describe('BANK_BOND', () => {
    test('Should call Validation with incorrect value', async () => {
      const validAndReturnDetails = new ValidAndReturnDetails()

      const result = validAndReturnDetails.handle(digitableLineError)

      expect(result).toBe(null)
    })

    test('Should call Validation with correct value', async () => {
      const validAndReturnDetails = new ValidAndReturnDetails()

      const result = validAndReturnDetails.handle(digitableLineSuccess)

      expect(result).toMatchObject({
        barCode: barcode,
        amount: '1.00',
        expirationDate: '2007-12-31'
      })
    })
  })
})
