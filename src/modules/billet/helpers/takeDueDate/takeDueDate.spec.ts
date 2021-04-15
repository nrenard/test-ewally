import takeDueDate from './index'

describe('takeDueDate Helpers', () => {
  describe('BANK_BOND', () => {
    test('Should call takeDueDate', async () => {
      const dueDate = takeDueDate(7587)
      expect(dueDate).toBe('2018-07-16')
    })
  })
})
