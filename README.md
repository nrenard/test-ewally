# Este é um teste técnico para Ewally

## Architecture

- Express
- Jest
- Typescript
- Node

## Esta é árvore de código fonte:

```
  src
  |-- __mocks__
  |-- __tests__
  |-- @types
  |-- config
  |-- documentation
  |-- modules
  |-- shared
  |-- routes
  |-- services
  |-- server.ts
  |-- index.ts
```

## Instalação

Requisitos para rodar o projeto nodeJS >= 14. Clonar repositório, entrar na pasta e instalar suas dependências com o comando `yarn` ou `npm install` e copiar o arquivo `.env.example` para `.env`.


## Scripts

<details>
  <summary>
    <strong style="font-size: 15px;">Testes</strong>
  </summary>

  <br/>

  <b>Rodar testes</b>

  > `npm test`

  <b>Rodar cobertura de testes</b>

  > `npm run test:ci`
</details>

<details>
  <summary>
    <strong style="font-size: 15px;">Rodar código</strong>
  </summary>

  <br/>

  <b>Servidor de desenvolvimento</b>

  > `npm run dev`

  <b>Servidor de produção</b>

  <p>*** Antes rodar script de build ***</p>

  > `npm run start`

  <b>Buildar código</b>

  > `npm run build`
</details>