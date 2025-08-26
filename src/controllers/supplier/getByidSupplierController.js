export const getByidSupplierController = (req, res) => {
  const { id } = req.params
  res.json({
    message: 'Fornecedor encontrado',
    supplier: { id }
  })
}
