import ClienteRepostorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/bd/ColecaoCliente";
import Cliente from "@/core/Cliente";
import { useState, useEffect } from "react";
export default function useClientes(){
    const repo: ClienteRepostorio = new ColecaoCliente()

    const [cliente,setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes,setClientes] =useState<Cliente[]>([]);
    const [visivel,setVisivel] = useState<'tabela' | 'form'>('tabela');

    useEffect(()=>{
        obterTodos        
    },[])

    function obterTodos(){
    repo.obterTodos().then(clientes=>{
        setClientes(clientes)
        setVisivel('tabela')
    })
    }

    function selecionarCliente(cliente:Cliente){
    console.log(cliente.nome)
    setCliente(cliente)
    setVisivel('form')
    }

    async function excluirCliente(cliente:Cliente){
    await repo.excluir(cliente)
    obterTodos()
    }

    async function salvarCliente(cliente:Cliente){
    await repo.salvar(cliente)
    obterTodos()
    }

    function novoCliente(){
    setCliente(Cliente.vazio());
    setVisivel('form')
    }

    return {
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        cliente,
        clientes,
        visivel,
        setVisivel
    }

}