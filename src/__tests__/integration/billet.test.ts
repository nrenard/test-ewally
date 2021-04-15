import supertest from 'supertest'

import server from '@/server'

import { digitableLineSuccess, digitableLineError, barcode } from '@/__mocks__'

describe('Billet Integration error', () => {
  it('should be able to take billet uncoded with success', async () => {
    const app = supertest(server)

    const response = await app.get(`/boleto/${digitableLineSuccess}`).send()

    expect(response.status).toBe(200)
    expect(response.body).toMatchObject({
      amount: '1.00',
      barCode: barcode,
      expirationDate: '2007-12-31'
    })
  })

  it('should be able to take billet uncoded with error digitable lines', async () => {
    const app = supertest(server)

    const response = await app.get('/boleto/312321').send()

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject({
      error: 'Digitable line missing 47 caracters.'
    })
  })

  it('should be able to take billet uncoded with error in dv', async () => {
    const app = supertest(server)

    const response = await app.get(`/boleto/${digitableLineError}`).send()

    expect(response.status).toBe(400)
    expect(response.body).toMatchObject({
      error: 'Digitable line is incorrect.'
    })
  })
})
