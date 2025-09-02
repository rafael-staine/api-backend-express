// import { Profiler } from "react"
import { list } from "../../models/profileModel"

export const listProfileController = async (req, res) => {

  const result = await list()
  
  res.json({
    message: 'Usuários consultados com sucesso!',
    profiles: result
  })
}
