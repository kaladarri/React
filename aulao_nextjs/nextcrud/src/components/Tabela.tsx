import Cliente from "@/core/Cliente"
import { IconeEdicao, iconeLixo } from "./icones"

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente:Cliente) => void
    clienteExcluido?: (cliente:Cliente) => void
}

export default function Tabela(props:TabelaProps){

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
    function renderizarCabecalho(){
        console.log('render table')
        return(
            <thead className="text-gray-800 bg-gradient-to-r from-purple-200 to-purple-300">
                <tr>
                    <th className="p-4 text-left">Código</th>
                    <th className="p-4 text-left">Nome</th>
                    <th className="p-4 text-right">Idade</th>
                    {exibirAcoes? <th className="p-4">Ações</th>: false}
                </tr>
            </thead>    
        )
    }
    function renderizarDados(){
        return props.clientes?.map((cliente,index)=>{
            return(                
                    <tr className={index % 2 === 0? 'bg-purple-100':'bg-purple-50'} key={cliente.id}>
                        <td className="p-4 text-left">{cliente.id}</td>
                        <td className="p-4 text-left">{cliente.nome}</td>
                        <td className="p-4 text-right">{cliente.idade}</td>
                        {exibirAcoes? renderizarAcoes(cliente): false}
                    </tr>                
            )
        })
    }
    function renderizarAcoes(cliente:Cliente){
        return(
            <td className="p-4 text-center">
                {props.clienteSelecionado ? (<button onClick={()=> props.clienteSelecionado?.(cliente)} className="text-green-600 rounded-full p-2 hover:bg-white">{IconeEdicao}</button>):false}
                {props.clienteExcluido ? (<button onClick={()=> props.clienteExcluido?.(cliente)} className="text-red-600 rounded-full p-2 hover:bg-white">{iconeLixo}</button>):false}                
            </td>
        )
    }
    return(
        <table className="w-full">
              {renderizarCabecalho()}
              <tbody>{renderizarDados()}</tbody>
                      
        </table>
    )
}