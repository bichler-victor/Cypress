# Desafio de Automação com Cypress

## Descrição
Este projeto contém testes E2E automatizados para o frontend e testes automatizados para a API utilizando o framework Cypress e a linguagem JavaScript. 
O objetivo é verificar a funcionalidade e a integridade da aplicação através de vários cenários de teste.

## Pré-requisitos
- Node.js v14+ (inclui npm)
- Cypress
- Git

## Instalação

### 1. Clone o Repositório
Clone este repositório (https://github.com/bichler-victor/Cypress) para a sua máquina local usando o comando:
```bash
git clone https://github.com/bichler-victor/Cypress.git
cd main

### 2. Instale as Dependências
Instale as dependências do projeto com npm ou yarn:

bash
Copiar código
npm install
# ou
yarn install

### 3. Estrutura do Projeto
A estrutura de pastas do projeto é a seguinte:

markdown
Copiar código
cypress/
  └─ e2e/
      ├─ frontend/
      │   └─ frontend.cy.js
      └─ api/
          └─ api.cy.js

### 4. Para executar os testes E2E e de API, utilize o comando:
npx cypress open
Isso abrirá a interface do Cypress onde você pode selecionar os testes E2E do frontend para execução.
