import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import useClientes from '@/hooks/useClientes'

export default function Home() {

  const {novoCliente,selecionarCliente,excluirCliente,salvarCliente,cliente,clientes,visivel,setVisivel} = useClientes()  


  return (
    <>
       <div className={`
          flex h-screen justify-center items-center
          bg-gradient-to-r from-purple-500 to-blue-500 text-white
       `}>
          <Layout titulo="Cadastro Simples">
          {visivel === 'tabela'?(
            <>
              <div className="flex justify-end">
                <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
              </div>            
              <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente}></Tabela>
            </>):(
            <Formulario clienteMudou={salvarCliente} cancelado={()=>setVisivel('tabela')} cliente={cliente}></Formulario>)}
          </Layout>
       </div>
    </>
  )
}
