import Layout from "@/components/Layout"
import Cabecalho from "@/components/Cabecalho"
import { useState } from "react";
export default function Estado(){
    const [numero,setNumero] = useState(0)

    function incrementar(){
        setNumero(numero + 1)
    }
    return(
        <div>
            <Layout>
                <Cabecalho titulo="Componente com Estado"/>
                <span>{numero}</span><br/>
                <button onClick={incrementar}>Incrementar</button>
            </Layout>
        </div>
    )
}