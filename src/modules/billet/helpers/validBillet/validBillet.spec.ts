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
    const validBilletDealershipPayment = validBillet(BILLET_TYPES.DEALERSHIP_PAYMENT)

    test('Should call validBillet with correct code', async () => {
      const isValid = validBilletDealershipPayment('82210000215048200974123220154098290108605940')
      expect(isValid).toBe('8220000215048200974123220154098290108605940')
    })

    test('Should call validBillet with incorrect code', async () => {
      const isValid = validBilletDealershipPayment('82210000215048200974123220254098290108605940')
      expect(isValid).toBe(null)
    })
  })
})
