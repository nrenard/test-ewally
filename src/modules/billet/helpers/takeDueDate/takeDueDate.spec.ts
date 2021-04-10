import { BILLET_TYPES } from '@/modules/billet/constants'

import takeDueDate from './index'

describe('takeDueDate Helpers', () => {
  describe('BANK_BOND', () => {
    const takeDueDateBankBond = takeDueDate(BILLET_TYPES.BANK_BOND)

    test('Should call takeDueDate', async () => {
      const dueDate = takeDueDateBankBond(7587)
      expect(dueDate).toBe('2018-07-16')
    })
  })

  describe('DEALERSHIP_PAYMENT', () => {
    const takeDueDateDealershipPayment = takeDueDate(BILLET_TYPES.DEALERSHIP_PAYMENT)

    test('Should call takeDueDate', async () => {
      const dueDate = takeDueDateDealershipPayment('20180716')
      expect(dueDate).toBe('2018-07-16')
    })
  })
})
