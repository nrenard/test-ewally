import { digitableLineSuccess } from '@/__mocks__'

import validateDigitableLines from './validateDigitableLines'

describe('validateDigitableLines Validations', () => {
  test('Should call validateDigitableLines with correct value', async () => {
    const isValid = validateDigitableLines(digitableLineSuccess)
    expect(isValid).toBe(true)
  })

  test('Should call validateDigitableLines with incorrect value', async () => {
    const isValid = validateDigitableLines('2129000119211000121090447561740597587000000200a')
    expect(isValid).toBe(false)
  })

  test('Should call validateDigitableLines wrong size value', async () => {
    const isValid = validateDigitableLines('2129000119211000121090447561740597587000000200')
    expect(isValid).toBe(false)
  })
})
