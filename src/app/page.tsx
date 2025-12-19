export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-600">CardápioSaaS</h1>
        <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
          Entrar
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          Seu Cardápio Digital
          <br />
          <span className="text-orange-600">Simples e Profissional</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Crie e gerencie o cardápio do seu restaurante de forma fácil e rápida.
          Seus clientes acessam pelo celular com QR Code.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
            Começar Grátis
          </button>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-orange-600 hover:bg-orange-50 transition">
            Ver Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Por que escolher nosso cardápio?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">📱</div>
            <h4 className="text-xl font-bold mb-3">Acesso por QR Code</h4>
            <p className="text-gray-600">
              Clientes escaneiam e acessam o cardápio instantaneamente no celular.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">✏️</div>
            <h4 className="text-xl font-bold mb-3">Fácil de Editar</h4>
            <p className="text-gray-600">
              Atualize preços e itens em segundos, sem precisar reimprimir nada.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="text-4xl mb-4">💰</div>
            <h4 className="text-xl font-bold mb-3">Economize</h4>
            <p className="text-gray-600">
              Sem gastos com impressão. Cardápio sempre atualizado e moderno.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Pronto para digitalizar seu cardápio?
          </h3>
          <p className="text-xl text-orange-100 mb-8">
            Comece hoje mesmo, é grátis!
          </p>
          <button className="bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition">
            Criar Meu Cardápio
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 CardápioSaaS. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
