# AB-WINTHOR

  Utilitários do Winthor para [node](http://nodejs.org).
  
  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]


```ts
import { Types as Winthor } from 'ab-winthor'

const cliente: Winthor.PCCLIENT = {
  CODCLI: 2,
  NOME: 'John Doe',
  ...
}
```

## Instalação

Este é um módulo [Node.js](https://nodejs.org/en/) disponível através do [npm registry](https://www.npmjs.com/).

Se for um projeto novo, certifique-se de criar um arquivo `package.json` primeiro através do comando [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

A instalação é feita utilizando 
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install ab-winthor
```

## Recursos (em desenvolvimento)

Esse pacote está em desenvolvimento. Estamos trabalhando para deixá-lo o mais completo possível. No momento, contém:

### Tipagem

* PCCLIENT (em densenvolvimento)
* PCPEDC (em densenvolvimento)
* PCPEDI (em densenvolvimento)
