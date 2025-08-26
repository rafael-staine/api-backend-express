export const getByidProductController = (req, res) => {
    const id = req.params.id
    res.json({ message: `Produto está buscando o usuário de ID ${id}` })
}