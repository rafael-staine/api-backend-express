# Comandos

- npm init // Cria o arquivo package.json para iniciar um projeto node, que organiza as dependências e configurações de um projeto Node.js.

- npm i nome_pacote // Instala pacote específico 

- npm install ou npm i // Instala todos os pacotes do package.json

- npm start // Unico que pode ser usado sem o run, para iniciar o projeto

-npm run nome_do-script // Executa um script do Package json (apenas o start pode ignorar o comando run)

# Comandos Git

// configura usuário e email 
- git config --global user.name "rafael-staine"
- git config --global user.email "rafael.staine@aluno.ifsp.edu.br"

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
  
- Get - Pegar / tras as informações 
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

- O que é im padrão de projeto // É uma forma de codificar que é amplamente conhecida

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