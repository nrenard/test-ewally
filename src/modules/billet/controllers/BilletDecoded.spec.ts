import { IHttpResponse } from '@/@types/protocols'

import { badRequest, serverError, ok } from '@/shared'

import BilletDecoded from './BilletDecoded'

const mockBillet = '313123213213213213123'

const data = {
  barCode: '3131231312321313321',
  expirationDate: '2007-12-31',
  amount: '1.00'
}

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
  validAndReturnDetails: { handle: () => any }
}

const makeSut = (): SutTypes => {
  const validateDigitableLines = () => true
  const validAndReturnDetails = {
    handle: () => (data)
  }

  const sut = new BilletDecoded({ validateDigitableLines, validAndReturnDetails })

  return {
    sut,
    validateDigitableLines,
    validAndReturnDetails
  }
}

describe('BilletDecoded Controller', () => {
  test('Should call Validation with correct value', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(ok(data))
  })

  test('Should call Validation with incorrect value', async () => {
    const validateDigitableLines = () => false

    const sut = new BilletDecoded({ validateDigitableLines, validAndReturnDetails: () => {} })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(badRequest('Digitable line missing 47 caracters.'))
  })

  test('Should call with internal error', async () => {
    const validateDigitableLines = () => { throw new Error('') }

    const sut = new BilletDecoded({ validateDigitableLines, validAndReturnDetails: () => {} })

    const response = await sut.handle(requestMockMount(), responseMockMount())

    expect(response).toMatchObject(serverError())
  })
})
