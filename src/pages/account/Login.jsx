import React from "react"
import Link from "next/link"

export default function Login () {
  return (
    <>
    <div className="bg-gray-200 p-6 max-w-md my-10 mx-auto rounded-md shadow-md">
      <input
        className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"
        type="text"
        placeholder="Seu e-mail"
      />
      <input
        className="w-full p-2 mb-4 border border-gray-300 rounded-md text-black"
        type="password"
        placeholder="Sua senha"
      />
      <button className="w-full p-2 bg-blue-500 text-white rounded-md">
        Entrar
      </button>
      <Link href="/account/Create" className="block text-center text-blue-500">
      Não possui uma conta? Registre-se aqui.
    </Link>
    </div>
  </>
  );
};

