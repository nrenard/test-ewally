import { BILLET_TYPES } from '@/modules/billet/constants'

import validBillet from './index'

describe('validBillet Helpers', () => {
  describe('BANK_BOND', () => {
    const validBilletBankBond = validBillet(BILLET_TYPES.BANK_BOND)

    test('Should call validBillet with correct code', async () => {
      const isValid = validBilletBankBond('00190500940144816069068093503143373700000000100')
      expect(isValid).toBe('00193373700000001000500940144816060680935031')
    })

    test('Should call validBillet with incorrect code', async () => {
      const isValid = validBilletBankBond('00190500940144816069068093503143373701000000100')
      expect(isValid).toBe(null)
    })
  })

  describe('DEALERSHIP_PAYMENT', () => {
    // const validBilletDealershipPayment = validBillet(BILLET_TYPES.DEALERSHIP_PAYMENT)

    // test('Should call validBillet with correct code', async () => {
    //   const isValid = validBilletDealershipPayment('21290001192110001210904475617405975870000002000')
    //   expect(isValid).toBe('81770000000010936599702411310797039001433708318')
    // })

    // test('Should call validBillet with incorrect code', async () => {
    //   const isValid = validBilletDealershipPayment('82210000215048200974123220254098290108605940')
    //   expect(isValid).toBe(null)
    // })
  })
})

// 21290001192110001210904475617405975870000002000
// 21299758700000020000001121100012100447561740
// 21295975800000020000001192110001219044756174
