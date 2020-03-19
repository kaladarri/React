import React, {Component} from 'react'

export default class Contador extends Component{
    // Solução 1
    // constructor(props){
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    state= {
        numero:0
    }

    //Solução 3
    maisUm = () =>{
        // this.state.numero++
        this.setState({
            numero: this.state.numero +1
        })
    }

    menosUm = () =>{
        // this.state.numero++
        this.setState({
            numero: this.state.numero -1
        })
    }


    alterarNumero = (diferenca) =>{
        // this.state.numero++
        this.setState({
            numero: this.state.numero + diferenca
        })
    }
    
    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>
                <button onClick={this.menosUm}>Decrementar</button>
                <button onClick={() => this.alterarNumero(10)}>Incrementar 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementar 10</button>
                {/*
                Solução 2
                 <button onClick={() => this.maisUm()}>Incrementar</button> */}
            </div>
        )
    }
}