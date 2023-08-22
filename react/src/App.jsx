function App() {
  return (
    <>
      <header>
        <div>
          <img className="h-[5rem] xl:my-6" src="./hoffbyp.svg" alt="Logo" />
        </div>
        <div>
          <div className="tracking-tight">
            <h1>Adicionar Novos Clientes</h1>
            <h2>Gerenciar Clientes</h2>
          </div>
          <div>
            <label>Nome do Cliente:</label>
            <input placeholder='Nome Completo'></input>
          </div>
          <div>
            <label>Email do Cliente:</label>
            <input placeholder='user@company.com'></input>
          </div>
          <div>
            <label>Telefone do Cliente:</label>
            <input placeholder='Número para Contato'></input>
          </div>
          <div>
            <button type='submit'>CRIAR</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
