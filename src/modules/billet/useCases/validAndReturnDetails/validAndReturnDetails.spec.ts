import ValidAndReturnDetails from './index'

describe('ValidAndReturnDetails UseCases', () => {
  describe('BANK_BOND', () => {
    test('Should call Validation with incorrect value', async () => {
      const validAndReturnDetails = new ValidAndReturnDetails('00190500940144816069068093103143373700000000100')

      const result = validAndReturnDetails.handle()

      expect(result).toBe(null)
    })

    test('Should call Validation with correct value', async () => {
      const validAndReturnDetails = new ValidAndReturnDetails('00190500940144816069068093503143373700000000100')

      const result = validAndReturnDetails.handle()

      expect(result).toMatchObject({
        barCode: '00193373700000001000500940144816060680935031',
        amount: 'string',
        expirationDate: 'string'
      })
    })
  })

  describe('DEALERSHIP_PAYMENT', () => {
    // test('Should call Validation with incorrect value', async () => {
    //   const validAndReturnDetails = new ValidAndReturnDetails('82201000215048200974123220154098290108605940000')

    //   const result = validAndReturnDetails.handle()

    //   expect(result).toBe(null)
    // })

    // test('Should call Validation with correct value', async () => {
    //   const validAndReturnDetails = new ValidAndReturnDetails('82210000215048200974123220154098290108605940000')

    //   const result = validAndReturnDetails.handle()

    //   expect(result).toMatchObject({
    //     barCode: 'string',
    //     amount: 'string',
    //     expirationDate: 'string'
    //   })
    // })
  })
})
