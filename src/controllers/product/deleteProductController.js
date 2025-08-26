export const deleteProductController = (req, res) => {
    const id = req.params.id
    const name = req.query.name
    res.json({ message: `Produto com ID ${id} excluído com sucesso!` })
}