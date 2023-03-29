import Layout from "@/components/Layout"
import Cabecalho from "@/components/Cabecalho"
import { useRouter } from 'next/router'
export default function ClientePorCodigo(){

    const router = useRouter();
    return(
        <div>
            <Layout>
                <Cabecalho  titulo="Cliente"></Cabecalho>
                <span>Código = {router.query.codigo}</span><br/>
                <span>Filial = {router.query.filial}</span>
            </Layout>
        </div>
    )

}