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
  validateDigitableLines: () => any
}

const makeSut = (): SutTypes => {
  const validateDigitableLines = () => true

  const sut = new BilletDecoded({ validateDigitableLines })

  return {
    sut,
    validateDigitableLines
  }
}

describe('BilletDecoded Controller', () => {
  test('Should call Validation with correct value', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(ok('ok'))
  })

  test('Should call Validation with incorrect value', async () => {
    const validateDigitableLines = () => false

    const sut = new BilletDecoded({ validateDigitableLines })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(badRequest('Code param is incorrect.'))
  })

  test('Should call with internal error', async () => {
    const validateDigitableLines = () => { throw new Error('') }

    const sut = new BilletDecoded({ validateDigitableLines })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(serverError())
  })
})
