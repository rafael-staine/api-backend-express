export const editSupplierController = (req, res) => {
  const { id } = req.params
  const dados = req.body
  res.json({
    message: 'Fornecedor editado com sucesso!',
    supplier: { id, ...dados }
  })
}
