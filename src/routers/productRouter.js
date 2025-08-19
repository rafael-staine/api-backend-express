import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
        message: 'Produto criado com sucesso!',
        profile: dados
    })
})

// Lista todos os profiles
router.get('/', (req, res) => {
    res.json({ message: 'Produto de todos os usuários' })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: `Produto está buscando o usuário de ID ${id}` })
})

router.put('//:id', (req, res) => {
    const id = req.query.id
    const dados = req.body
    res.json({
        message: 'Produto editado com sucesso!',
        profile: dados
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    const name = req.query.name
    res.json({ message: `Produto com ID ${id} excluído com sucesso!` })
})

export default router