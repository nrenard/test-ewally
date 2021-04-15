import { cutText } from './index'

describe('cutText Shareds', () => {
  test('Should call cutText', () => {
    const response = cutText('teste', 1, 2)
    expect(response).toBe('e')
  })
})
