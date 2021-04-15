import { digitableLineSuccess, digitableLineError, barcode } from '@/__mocks__'

import validBillet from './index'

describe('validBillet Helpers', () => {
  describe('BANK_BOND', () => {
    test('Should call validBillet with correct code', async () => {
      const isValid = validBillet(digitableLineSuccess)
      expect(isValid).toBe(barcode)
    })

    test('Should call validBillet with incorrect code', async () => {
      const isValid = validBillet(digitableLineError)
      expect(isValid).toBe(null)
    })
  })
})
