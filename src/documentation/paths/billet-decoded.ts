export const billetDecodedPath = {
  get: {
    tags: ['Boleto'],
    summary: 'Rota para descodificar a linha digitável do boleto',
    parameters: [{
      in: 'path',
      name: 'code',
      description: 'linha digitável',
      required: true,
      schema: {
        type: 'string'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/billetDecodedResponse'
            }
          }
        }
      },
      400: {
        $ref: '#/components/badRequest'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
