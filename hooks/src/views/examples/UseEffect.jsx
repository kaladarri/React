import React,{useState} from 'react'
import { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseEffect = (props) => {
    const [number,setNumber] = useState(1)
    const [fatorial,setFatorial] = useState(1)
    const [parImpar,setParImpar] = useState("")
    function calcFatorial(n){
        if(n<0) return -1
        if(n==0) return 1
        return calcFatorial(n - 1) * n
    }
    function verificaParImpar(n){
        if(n%2 == 0){
            return 'Par';
        }else{
            return 'Ímpar'
        }
    }
    useEffect(()=>{
        setFatorial(calcFatorial(number))
        setParImpar(verificaParImpar(number));
    },[number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e=>setNumber(e.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                    <span className="text">Par ou Ímpar:</span>
                    <span className="text red">{parImpar === -1 ? 'Não existe' : parImpar}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e=>setNumber(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseEffect
