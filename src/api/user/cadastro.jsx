import { cadastro } from "../../servisces/user"

export default function handler(req, res) {
  try {
    const newUser = cadastro(req,boty)
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json(err.message)
  }
}
