import React from "react";
import Image from "next/image";
import Link from "next/link";
/*TODO:Mural  */
/*TODO:Bolinhas com Promoção/desconto*/
/*TODO:Produtos*/
/*TODO:Ofertas*/
/*TODO:Duvidas Frequentes*/
const Main = () => {
  return (
    <main className="container mx-auto my-4">
      <h1 className="text-3xl font-bold mb-4">Bem-vindo à Página Principal</h1>

      {/* Seção de Destaques */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Destaques</h2>
        {/* Adicione aqui conteúdo relacionado aos destaques da sua página */}
      </section>

      {/* Seção de Produtos */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Nossos Produtos</h2>
        {/* Adicione aqui conteúdo relacionado aos produtos da sua página */}
      </section>

      {/* Seção de Informações Adicionais */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Mais Informações</h2>
        {/* Adicione aqui conteúdo adicional que você queira incluir na sua página principal */}
      </section>
    </main>
  );
};

export default Main;
