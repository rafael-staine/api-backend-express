export const deleteProfileController = (req, res) => {
    const id = req.params.id
    const name = req.query.name
    res.json({ message: `Usuário com ID ${id} excluído com sucesso!` })
}