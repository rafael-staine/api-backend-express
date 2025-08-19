import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
    const dados = req.body
    res.json({
        message: 'Supplier criado com sucesso!',
        profile: dados
    })
})

// Lista todos os profiles
router.get('/', (req, res) => {
    res.json({ message: 'Lista de todos os supplier' })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json({ message: `Você está buscando o supplier de ID ${id}` })
})

router.put('//:id', (req, res) => {
    const id = req.query.id
    const dados = req.body
    res.json({
        message: 'Supplier editado com sucesso!',
        profile: dados
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    const name = req.query.name
    res.json({ message: `Supplier com ID ${id} excluído com sucesso!` })
})

export default router