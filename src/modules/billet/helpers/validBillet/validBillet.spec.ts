import validBillet from './index'

describe('validBillet Helpers', () => {
  describe('BANK_BOND', () => {
    test('Should call validBillet with correct code', async () => {
      const isValid = validBillet('00190500940144816069068093503143373700000000100')
      expect(isValid).toBe('00193373700000001000500940144816060680935031')
    })

    test('Should call validBillet with incorrect code', async () => {
      const isValid = validBillet('00190500940144816069068093503143373701000000100')
      expect(isValid).toBe(null)
    })
  })
})
