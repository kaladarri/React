import Link from 'next/link'

export default function Navegador(props){
    return(
        <div>
            <Link href="/exemplo">
                Exemplo
            </Link>
            <Link href="/teste">
                Teste
            </Link>
            <Link href="/cliente/sp-01/abc">
                Cliente
            </Link>
            <Link href="/estado">
                Estado
            </Link>
            <Link href="/integracao">
                Integração
            </Link>
            <Link href="/estatico">
                Estático
            </Link>
        </div>
    )
}