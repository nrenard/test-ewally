import validateBillet from './validateBillet'

describe('validateBillet Validations', () => {
  test('Should call validateBillet with correct value', async () => {
    const isValid = validateBillet('32131312321321312312312321321312381238912322')
    expect(isValid).toBe(true)
  })

  test('Should call validateBillet with incorrect value', async () => {
    const isValid = validateBillet('321313123213213123123123213213123812389123a')
    expect(isValid).toBe(false)
  })

  test('Should call validateBillet wrong size value', async () => {
    const isValid = validateBillet('321313123213213123123123213213123812389123')
    expect(isValid).toBe(false)
  })
})
