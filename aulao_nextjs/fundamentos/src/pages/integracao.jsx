import Layout from "@/components/Layout"
import Cabecalho from "@/components/Cabecalho"
import { useState } from "react"
export default function Integracao(){
    const [cliente,setCliente] = useState({});
    const [codigo,setCodigo] = useState(1)
    function obterCliente(codigo){
        fetch('http://localhost:3000/api/clientes/'+codigo)
            .then(resp=>resp.json())
            .then(dados=>setCliente(dados))
    } 
    
    return(
        <div>
            <Layout>
                <Cabecalho titulo="Integração"/>
                <div>
                    <input type="text" onChange={(e)=>setCodigo(e.target.value)} value={codigo}/>
                    <button onClick={()=> obterCliente(codigo)}>Obter Cliente</button>
                </div>
                <ul>
                    <li>Código:{cliente.id}</li>
                    <li>Nome:{cliente.nome}</li>
                    <li>Email:{cliente.email}</li>
                </ul>
            </Layout>
        </div>
    )
}