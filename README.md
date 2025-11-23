# Projeto de Estudo Monorepo

Este é um projeto de estudo para demonstrar uma aplicação full-stack usando uma arquitetura monorepo.

## Estrutura do Projeto

O monorepo está organizado nos seguintes pacotes:

-   `packages/backend`: Um servidor simples em Express.js.
-   `packages/frontend`: Uma aplicação web construída com Vite.
-   `packages/common`: Uma biblioteca compartilhada com código comum (ex: modelos de dados) usada tanto pelo frontend quanto pelo backend.

## Tecnologias Utilizadas

-   [TypeScript](https://www.typescriptlang.org/)
-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [Vite](https://vitejs.dev/)
-   [npm Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)

## Começando

### Pré-requisitos

-   Node.js (v22 ou superior)
-   npm (v10.9 ou superior)

### Instalação

1.  Clone o repositório:
    ```bash
    git clone <repository-url>
    ```
2.  Navegue até o diretório raiz do projeto:
    ```bash
    cd monorepo
    ```
3.  Instale as dependências para todos os pacotes:
    ```bash
    npm install
    ```

## Scripts Disponíveis

Os seguintes scripts estão disponíveis na raiz do projeto:

-   `npm run build`: Compila todos os pacotes (`frontend`, `backend` e `common`).
-   `npm run clean`: Limpa os arquivos compilados de todos os pacotes.
-   `npm run start:dev`: Inicia os servidores de backend e frontend em modo de desenvolvimento.
-   `npm run start:backend`: Inicia apenas o servidor de backend.
-   `npm run start:frontend`: Inicia apenas o servidor de desenvolvimento do frontend.