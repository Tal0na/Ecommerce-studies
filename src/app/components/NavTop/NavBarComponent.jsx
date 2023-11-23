import React from "react"
import Image from "next/image"
import Link from "next/link"
/*TODO:Crie a conta  */
/*TODO:Entre  */
/*TODO:Compras  */
/*TODO:Informe seu cep */
/*TODO:Buscador  */
const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="container mx-auto flex justify-center items-center">
          contador 
          TODO:contafor revercivel
        </h1>
      </div>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Logo</h1>

        {/* Navegação */}
        <nav className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Início
          </Link>
          <Link href="/produtos" className="hover:text-gray-300">
            Produtos
          </Link>
          <Link className="hover:text-gray-300" href="/sobre">
            Sobre
          </Link>
          <Link href="/contato" className="hover:text-gray-300">
            Contato
          </Link>
        </nav>

        {/* Botão de Chamada para Ação (CTA) */}
        <Link
          href="/comprar"
          passHref
          as="a"
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Comprar Agora
        </Link>

        <Link href="/contato" className="hover:text-gray-300">
            carrinho
          </Link>
      </div>
    </header>
  )
}

export default Navbar
