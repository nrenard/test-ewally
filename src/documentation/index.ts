import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Teste Prático Back End',
    description: 'Essa api foi devenvolida como teste prático para a empres ewally.',
    version: '1.0.0',
    contact: {
      name: 'Nicolas Renard',
      email: 'nicolasrenard1999@gmail.com',
      url: 'https://www.linkedin.com/in/nicolasrenard1999/'
    }
  },
  tags: [{
    name: 'Boleto',
    description: 'APIs relacionadas a Boleto'
  }],
  paths,
  schemas,
  components
}
