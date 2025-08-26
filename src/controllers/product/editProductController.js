export const editProductController = (req, res) => {
    const id = req.query.id
    const dados = req.body
    res.json({
        message: 'Produto editado com sucesso!',
        profile: dados
    })
}