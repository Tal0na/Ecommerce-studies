import React from "react"
import Link from "next/link"

export default function Create () {
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
    <button
      className="w-full p-2 bg-blue-500 text-white rounded-md"
    >
      Cadastrar
    </button>
    <Link href="/account/Login" className="block text-center text-blue-500 mt-2">
      Já possui uma conta?
    </Link>
  </div>
</>
  );
};
