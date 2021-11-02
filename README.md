# Burger Queen - API com Node.js

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Objetivos de aprendizagem](#3-objetivos-de-aprendizagem)
* [4. Considerações gerais](#4-considerações-gerais)
* [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
* [6. Hacker Edition](#6-hacker-edition)
* [7. Pistas, tips e leituras complementares](#7-pistas-tips-e-leituras-complementares)
* [8. HTTP API Checklist](#8-http-api-checklist)

## 1. Prefácio

Um pequeno restaurante de hamburgueres, que está crescendo, necessita de um
sistema para realizar pedidos usando um _tablet_, e que os enviem à
cozinha para que sejam preparados de forma ordenada e eficiente. <br />
A interface front-end da aplicação Burger Queen já foi criado. Agora
precisamos criar o back-end para manejar os dados. Neste caso, isso será
feito através de uma API rest que será compatível com as requisições
vindas do front.

## 2. Resumo do projeto

Como API, nesse caso nos referimos a um _servidor web_, que é basicamente
um programa que _ouve_ o que acontece na aplicação através de uma porta de rede,
pela qual podemos enviar _requisições_ (_requests_) e obter _respostas_ (_responses_). <br />
  Um servidor web deve _lidar_ com as requisições que chegam e devolver respostas,
que serão enviadas de volta ao _cliente_. Quando falamos de _aplicações de servidor_,
isso implica uma arquitetura de _cliente/servidor_, onde o cliente é um programa
que faz requisições através de uma rede (por exemplo o navegador, o cURL, etc)
e o servidor é o programa que recebe essas requisições e as responde. <br />
O [Node.js](https://nodejs.org/) nos permite criar servidores web super eficientes
de maneira relativamente simples, tudo isso usando JavaScript!

O cliente nos deu um [link para a documentação](https://lab-api-bq.herokuapp.com/api-docs/)
que especifica o comportamento esperado da API que iremos expor por
HTTP. Lá podemos encontrar todos os detalhes que os _endpoints_ deve
implementar na aplicação, que parâmetros esperam, o que devem responder, etc.

O objetivo de aprendizagem principal é adquirir experiência com o **Node.js**
como ferramenta para desenvolvimento de _aplicações de servidor_, junto com uma série
de outras ferramentas comumente utilizadas nesse contexto (Express como framework,
PostgreSQL como base de dados, containers de docker (Hacker Edition), etc).

Neste projeto, você desenvolverá um servidor web que deverá _servir_ `JSON`
através de uma conexão `HTTP`, e implantá-lo em um servidor na nuvem.

Ao final do projeto, você deverá estar familiarizada com conceitos como **rotas**
(_routes_), **URLs**, **HTTP** (verbos, request, response, headers, body, status
codes, etc), **JSON**, **conexão com uma base de dados** (`PostgreSQL`), **deployment**...

## 3. Objetivos de aprendizagem

### Node.js
### JavaScript
 **Mocking** (Hacker Edition)
 **Testes de integração (end-to-end)** (Hacker Edition)
 **Uso ES modules**
 **Módulos de CommonJS**
 **Uso de linter (ESLINT)**
 **Uso de identificadores descritivos (Nomenclatura | Semântica)**

### Git e GitHub

### Express.js
 **Rotas**
 **Uso e criação de middleware** (Hacker Edition)

### HTTP
 **Solicitações ou requisições (request) e respostas (response).**
 **Cabeçalhos (headers)**
 **Corpo (body)**
 **Verbos HTTP**
 **Codigos de status de HTTP**
 **Encodings e JSON**
 **CORS (Cross-Origin Resource Sharing)**
 
### Autenticação (Hacker Edition)

 **JWT (JSON Web Token)**
 **Armazenamento e acesso de senhas**

### Bases de dados (PostgreSQL)
 
 **Instalação**
 **Conexão**
 **Queries e comandos (criação, leitura, atualização, eliminação)**

## 4. Considerações gerais

Este projeto poderá ser realizado individualmente ou em duplas. Posteriormente,
poderá estar integrado com o projeto Burger Queen API client já realizado.

A lógica do projeto deve estar implementada totalmente em JavaScript (ES6).
Neste projeto está permitido usar bibliotecas ou frameworks.

## 5. Critérios de aceitação mínimos do projeto

### 5.1 API

Conforme estabelecido pela [documentação](https://lab-api-bq.herokuapp.com/api-docs/)
entregue pelo nosso cliente, a API deve expor os seguintes endpoints:

#### 5.1.1 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

#### 5.1.2 `/products`

* `GET /products`
* `GET /products/:productid`
* `POST /products`
* `PUT /products/:productid`
* `DELETE /products/:productid`

#### 5.1.3 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

#### 5.1.4 `/auth` (Hacker Edition)

* `POST /auth`

### 5.2 Implantação (Deployment)

O código do projeto deverá estar em um repositório no GitHub.
O _deploy_ para produção deverá ser feito utilizando um serviço de hospedagem como
o [Heroku](https://www.heroku.com/home), que tem integração com o
[PostgreSQL](https://www.heroku.com/postgres)

Cuidado para não subir as chaves de autenticação para o GitHub do projeto ;).

## 6. Hacker Edition

As seções chamadas Hacker Edition são opcionais. Se você terminou tudo e
ainda sobrou tempo, faça essa parte. Assim você poderá aprofundar e exercitar mais
sobre os objetivos de aprendizagem do projeto.

* Criptografar senha do usuário
* Endpoint de autenticação: `POST /auth`
* Middleware de autenticação - verificação do token
* Middleware de erros
* Criar a documentação da API
* Testes unitários para cada função
* Testes _"end to end"_ ou _e2e_ (de uma ponta a outra)
* Docker

#### Criptografar senha do usuário

É uma boa prática **NÃO** armazenar a senha do seu usuário no seu banco de dados, pois
colocaria a segurança de seu usuário em risco. Assim, ao invés de armazená-la como
um simples string, a ideia é armazenar uma `hash` criptografada. Por exemplo,
pode-se usar o [bcryptjs](https://www.npmjs.com/package/bcryptjs).

Assim, na autenticação (`POST /auth`), se a senha do usuário está certa ou não, poderá ser feita
comparando essa `hash`.

#### Criar a documentação da API

Sugerimos o uso do [Swagger](https://swagger.io/docs/specification/about/) ou [JSDoc](https://jsdoc.app/about-getting-started.html)
para escrever a sua própria documentação

#### Docker

Se quiser, também poderá se aventurar no Docker e dar os primeiros passos com containers.

Um container (que pode ser criado com Docker) serve para garantir que os ambientes
de desenvolvimento e produção sejam exatamente os mesmos, não importa em que
sistemas operacional/versão funciona o computador da desenvolvedora.
Terminando com o famoso (e temido) "na minha máquina funciona".

O Docker cria uma container de um sistema operacional onde podemos definir configurações
e versões de softwares, e é dentro de um desses containers que podemos testar e executar
nossos projetos independente do sistema operacional
que rodamos em nossa máquina física :)

Para este projeto te recomendamos a usar `docker-compose` localmente (em seu
computador) para executar a aplicação junto com a base de dados.

### Materiais para Hacker Edition

* [JSON web Token](https://jwt.io/)
* [jsonwebtoken library](https://www.npmjs.com/package/jsonwebtoken)
* [bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [JSDoc](https://jsdoc.app/about-getting-started.html)
* [Swagger](https://swagger.io/docs/specification/about/)
* [docker](https://docs.docker.com/)
* [docker compose](https://docs.docker.com/compose/)
* [Docker para desenvolvedores](https://github.com/gomex/docker-para-desenvolvedores)
(livro completo)
* [Tutorial com Docker](https://github.com/rfukui/do-excel-ao-sistema-complexo)
* [Exemplo com Docker](https://github.com/danielbdias/rest-api-with-db-in-nodejs)

***
