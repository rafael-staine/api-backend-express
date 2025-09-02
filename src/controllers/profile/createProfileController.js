import { create } from "../../models/profileModel.js";

export const createProfileController = async (req, res) => {
  const dados = req.body;

  const result = await create(dados);
  res.json({
    message: 'Usuário criado com sucesso!',
    profile: result
  });
}
