import { login } from "../../servisces/user"

export default function handler(req, res) {
  try {
    const user = login(req,boty)
    res.status(200).json(user)
  } catch (err) {
    res.status(400).json(err.message)
  }
}
