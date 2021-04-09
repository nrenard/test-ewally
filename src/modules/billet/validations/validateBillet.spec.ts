import validateBillet from './validateBillet'

describe('validateBillet Validations', () => {
  test('Should call Validation with correct value', async () => {
    const isValid = validateBillet('313123213213213213123')
    expect(isValid).toBe(true)
  })
})
