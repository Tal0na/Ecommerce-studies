import { useState } from "react"
import { setCookie } from "cookies-next"
import { useRouter } from "next/router"

import Link from "next/link"
export default function CadastroPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const router = useRouter()

  const handleChangeForm = (event, field) => {
    setForm({
      ...form,
      [field]: event.target.value,
    })
  }

  const handleForm = async (e) => {
    e.preventDefault()

    if (!form.name) return setError("O nome é obrigatório")
    if (!form.email) return setError("O e-mail é obrigatório")
    if (!form.password) return setError("a senha é obrigatório")

    setError("")
    try {
      const response = await fetch(`/api/user/cadastro`, {
        method: "POST",
        body: JSON.stringify(form),
      })

      const json = await response.json()

      if (response.status !== 200) throw new Error(json)
      setCookie("authorization", json)
      router.push("/")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className="bg-gray-200 p-6 max-w-md my-10 mx-auto rounded-md shadow-md">
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"
          type="text"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full p-2 bg-blue-500 text-white rounded-md"
          onClick={handleCadastro}
        >
          Cadastrar
        </button>
        <Link
          href="/account/Login"
          className="block text-center text-blue-500 mt-2"
        >
          Já possui uma conta?
        </Link>
      </div>
    </>
  )
}
