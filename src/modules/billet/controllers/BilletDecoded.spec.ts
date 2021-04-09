import { IHttpResponse } from '@/@types/protocols'

import { badRequest, serverError, ok } from '@/shared'

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
  validateBillet: () => any
}

const makeSut = (): SutTypes => {
  const validateBillet = () => true

  const sut = new BilletDecoded({ validateBillet })

  return {
    sut,
    validateBillet
  }
}

describe('BilletDecoded Controller', () => {
  test('Should call Validation with correct value', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(ok('ok'))
  })

  test('Should call Validation with incorrect value', async () => {
    const validateBillet = () => false

    const sut = new BilletDecoded({ validateBillet })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(badRequest('Code param is incorrect.'))
  })

  test('Should call with internal error', async () => {
    const validateBillet = () => { throw new Error('') }

    const sut = new BilletDecoded({ validateBillet })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(serverError())
  })
})
