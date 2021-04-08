export const billetDecodedResponse = {
  type: 'object',
  properties: {
    barCode: {
      type: 'string'
    },
    amount: {
      type: 'string'
    },
    expirationDate: {
      type: 'string'
    }
  },

  required: ['barCode', 'amount', 'expirationDate']
}
