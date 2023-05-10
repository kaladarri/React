//Action Creator
export function alterarNumeroMinimo(novoNumero){
    return{
        type:'NUM_MIN_ALTERADO',
        payload:novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero){
    console.log('action altera maximo')
    return{
        type:'NUM_MAX_ALTERADO',
        payload:novoNumero
    }
}