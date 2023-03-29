import Cabecalho from "@/components/Cabecalho";
import Layout from "@/components/Layout";

export function getStaticProps(){
    return{
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props){
    return(
        <Layout>
            <Cabecalho titulo="Conteúdo Estático"></Cabecalho>
            <div>{
                props.numero
            }</div>
            
        </Layout>
    )
}