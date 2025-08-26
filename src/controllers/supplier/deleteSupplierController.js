export const deleteSupplierController = (req, res) => {
  const { id } = req.params
  res.json({
    message: 'Fornecedor deletado com sucesso!',
    supplier: { id }
  })
}
