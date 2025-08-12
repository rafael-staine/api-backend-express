import express from 'express'

const app = express()
const port = 3333

app.use(express.json())

app.get('/profile', (req, res) => {
  res.json({ message: 'Perfil de usuario!' })
})

app.post('/profile', (req, res) => {
  const dados = req.body
  console.log(dados)
  res.json({
    menssage: 'Usuário criado com sucesso!',
    profile: dados
  })
})

app.put('/profile', (req, res) => {
  const dados = req.body
  console.log(dados)
  res.json({
    menssage: 'Usuário editado com sucesso!',
    profile: dados
  })
})

app.delete('/profile', (req, res) => {
  const dados = req.body
  console.log(dados)
  res.json({
    menssage: 'Usuário deletado com sucesso!',
    profile: dados
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})