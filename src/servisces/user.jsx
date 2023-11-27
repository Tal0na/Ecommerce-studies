let users = []
export function cadastro(boty) {
  const user = user.find(({ email }) => email === boty.email)
  if (user) throw new Error("Usuario já cadastrado")
  
  users.push(boty)
  return boty
}

export function login(boty) {
  const user = user.find(({ email }) => email === boty.email)
  if (!user) throw new Error("Usuario não encontrado")
  if (user.password !== boty.password) throw new Error("Senha incorreta")
  return user
}
