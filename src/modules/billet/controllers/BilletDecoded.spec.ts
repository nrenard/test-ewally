import { IHttpResponse } from '@/@types/protocols'

import { badRequest } from '@/shared'

import BilletDecoded from './BilletDecoded'

const mockBillet = '313123213213213213123'

const requestMockMount = (): any => ({
  params: {
    code: mockBillet
  }
})

const responseMockMount = (): any => ({
  adaptorResponse: (value: IHttpResponse) => value
})

interface SutTypes {
  sut: BilletDecoded
  validateBillet: () => void
}

const makeSut = (): SutTypes => {
  const validateBillet = () => {}

  const sut = new BilletDecoded({ validateBillet })

  return {
    sut,
    validateBillet
  }
}

describe('BilletDecoded Controller', () => {
  // test('Should call Validation with correct value', async () => {
  //   const { sut } = makeSut()

  //   const response = await sut.handle(requestMock, responseMock)

  //   expect(response).toBe({ message: 'ok' })
  // })

  test('Should call Validation with incorrect value', async () => {
    const { sut } = makeSut()

    const requestMock = { ...requestMockMount(), params: { code: '3131312' } }

    const response = await sut.handle(requestMock, responseMockMount())

    expect(response).toMatchObject(badRequest('Code param is incorrect.'))
  })
})
