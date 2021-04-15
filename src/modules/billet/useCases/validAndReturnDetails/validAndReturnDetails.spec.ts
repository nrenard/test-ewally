import ValidAndReturnDetails from './index'

describe('ValidAndReturnDetails UseCases', () => {
  describe('BANK_BOND', () => {
    test('Should call Validation with incorrect value', async () => {
      const validAndReturnDetails = new ValidAndReturnDetails()

      const result = validAndReturnDetails.handle('00190500940144816069068093103143373700000000100')

      expect(result).toBe(null)
    })

    test('Should call Validation with correct value', async () => {
      const validAndReturnDetails = new ValidAndReturnDetails()

      const result = validAndReturnDetails.handle('00190500940144816069068093503143373700000000100')

      expect(result).toMatchObject({
        barCode: '00193373700000001000500940144816060680935031',
        amount: '1.00',
        expirationDate: '2007-12-31'
      })
    })
  })
})
