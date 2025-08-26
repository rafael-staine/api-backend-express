export const getByidProfileController = (req, res) => {
    const id = req.params.id
    res.json({ message: `Usuário está buscando o usuário de ID ${id}` })
}