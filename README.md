# Comandos

- npm init // Cria o arquivo package.json para iniciar um projeto node, que organiza as dependências e configurações de um projeto Node.js.

- npm i nome_pacote // Instala pacote específico 

- npm install ou npm i // Instala todos os pacotes do package.json

- npm start // Unico que pode ser usado sem o run, para iniciar o projeto

-npm run nome_do-script // Executa um script do Package json (apenas o start pode ignorar o comando run)

# Comandos Git

// configura usuário e email 
- git config --global user.name "..."
- git config --global user.email "..."

- git init (inicia o git em uma pasta)
- git remote add origin _url_do_github_ // vincula seu projeto local ao repositório do github

# Tópicos Importantes

- Freamework // Conjunto de recursos ou ferramentas para resolver um determinado problema ou criar uma solução

- JavaScript // É a linguagem de programação usada para web

- NPM (Node Package Menager) // Gerencia o pacote do node 

- Node.js // É o ambiente runtime que executa o JS no terminal / servidor da maquina

- Express // É um freamework para construir API Backend

- API // Conjuntos de rotas que dão resposts para usuarios

- HTTPs // Protocolo de transferencia que estabelece as regras das requisições e repostas da web / comunicação entre clientes e servidores

# ↑
  
- Get - Listar / tras as informações 
- Post - Cadastrar / cadastra dados
- Put - Edita os dados completos
- Patch - Atualizar dados parcialmente 
- Delete - Apaga os dados

#

- Como mudo o formado de importação de importação/exportação de require para inport // adicionar o package.json a propriedade (type:) "module"

#

- --whatch = observar // (Parametro para rodar js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)

### Sintaxe basica de uma rota da API

app.put('/user', (req, res) => {
  res.json('Usuário editado com sucesso')
})

- Método criar ou inserir: post
- Rota ou endereço: /produto
- Tipo de resposta: json

- Para que server o Router no express // Organização e facilidade de manutenção

- O que é um padrão de projeto // É uma forma de codificar que é amplamente conhecida

- Quem cria o padrão? - a própria comunidade

- MVC = Model, View, Controller

#### Qual o papel do MVC

- Organizar o codigo separando em tres camcadas

- Papel do model (M) // Acesso ao banco de dados e regras de negocios do proeto

- Camada view (V) // É a camada de vizualização / apresentação

- Controller (C) // Controlar a entrada, processamento e saida dos dados

#### ORM
##### Object / Relational / Model
- O que é // é uma forama de relacionar um código js e a base de dados

- Qual os beneficios de usar um ORM

- facilita realizar as operações no banco

- facilidade de modificar o banco de dados

#### Tipos de ORM
- Sequelize
- Prisma

#### Tipos de ORM
- Prisma
- Sequelize
- Mongoze

##### Qual a diferença de Dependencias e Dependencias Dev 

- Dependenvcas Dev sao ferramentas que só são usadas durante o desenvolvimento do projeto

- Dependencias são recursos que são usados dentro do projeto

## Comandos dos prisma

- Instalação do Prisma
  - npm i prisma - D
  - npm i @prisma/client

- Inicialização do Prisma
  - npx prisma init

- Gerar o model do prisma a partir de um BD existente
  - npx prisma db pull

- Gerar o BD a partir de um model do prisma
  - npx prisma db push

- Gerar os arquivos necessários para usar o prisma client no código
  -  npx prisma generate


#### Middlewaers  

- padrão de projeto usado no express que divide o codigo em funções que são chamadas de middlewares, e toda vez que ele termina de fazer o que tem que fazer, ele passa pro proximo

## Estudo para prova

- Freamework / Conjunto de recursos ou ferramentas para resolver um determinado problema ou criar uma solução

- Express / É um freamework para construir API Backend

- JavaScript / É a linguagem de programação usada para web

- NPM (Node Package Menager) / Gerencia o pacote do node

- Node.js / É o ambiente runtime que executa o JS no terminal / servidor da maquina

- HTTPs / Protocolo de transferencia que estabelece as regras das requisições e repostas da web / comunicação entre clientes e servidores

  - Get - Listar / tras as informações
  - Post - Cadastrar / cadastra dados
  - Put - Edita os dados completos
  - Patch - Atualizar dados parcialmente
  - Delete - Apaga os dados

- Como mudo o formado de importação de importação/exportação de require para inport / adicionar o package.json a propriedade (type:) "module"

- --whatch = observar / toda vez que salva o código ele desliga o servidor e liga novamente altomaticamente e deixa mais produtivo

- Router (Para que separar as rotas?) / organizar o código e facilitar a manutenção

- Parâmetros de rota. Exemplo: /:id
  - const id = req.params.id

- O que é um padrão de projeto / É uma forma de codificar que é amplamente conhecida

- MVC / Model, View, Controller

- Para que serve / Organizar o codigo separando em tres camadas 

  - Papel do model (M) / Acesso ao banco de dados e regras de negocios do proeto
  - Camada view (V) / É a camada de vizualização / apresentação
  - Controller (C) / Controlar a entrada, processamento e saida dos dados

- ORM / Object / Relational / Model

- O que é ORM // é uma forama de relacionar um código js e a base de dados que cria uma representação do BD 

o prisma da ferramentas para criar 

- Middlewaers = Meio / Metade
  - padrão de projeto usado no express que divide o codigo em funções que são chamadas de middlewares, e toda vez que ele termina de fazer o que tem que fazer, ele passa pro proximo

É uma forma de organizar o codigo onde cada função segue o fluxo


vao perder o acesso com o tokem


# Estudo para prova

#### Autenticação e Login de Usuário
- Como salvar a senha do usuário no BD de forma segura? 
  - Salvar com hash (Bcrypt)
- Autenticação (Login), o que verificar e fazer no login?
- JWT
  - Qual o significado de JWT?
    - Json Web Token
  - Quais as vantagens do JWT?
    - Payload já disponivel no token (Backend não precisa consultar o BD)
    - Assinado pelo segredo do Backend
    - Amplamente conhecido e com bibliotecas disponíveis
  - Como é enviado o Token para o backend?
    - Por meio do Header Autorization da requisição http

#### Validação de Dados (Regras de Negócio) com Zod
- Para que serve o Zod?
  - Definir regras de negócio estabelecendo regras de validação para cada um dos campos do meu modelo
- Para que serve o partial Zod?
  - Para o Zod não precisar validar os campos que não são necessarios no momento

#### ErroHandler (Middlawere para tratamento de erros da api)
- Para que serve o ErroHandler?
  - Capturar erros da aplicação, facilitar a manutenção, dar msg de qual erro é, não quebrar o seridor, e dar uma msg adequada para o usuário