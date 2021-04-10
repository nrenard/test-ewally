import validateDigitableLines from './validateDigitableLines'

describe('validateDigitableLines Validations', () => {
  test('Should call validateDigitableLines with correct value', async () => {
    const isValid = validateDigitableLines('21290001192110001210904475617405975870000002000')
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
