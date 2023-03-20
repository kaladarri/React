import React from 'react'
import { useRef, useEffect } from 'react'
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1,setValue1] = useState("");
    const [value2,setValue2] = useState("");
    const count = useRef(0);
    const myInput1 = useRef(null);
    const myInput2 = useRef(null);

    useEffect(()=>{
        count.current++
        myInput2.current.focus()
    },[value1])

    useEffect(()=>{
        count.current++
        myInput1.current.focus()
    },[value2])

    const merge = function(s1,s2){
        var totalLen = s1.length + s2.length;
        var mergedStr = "";
        for(var x = 0; x < totalLen;x++){
            mergedStr = mergedStr+s1.substring(x, x+1) + s2.substring(x, x+1);
        }
        return mergedStr;
    }

    

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{merge(value1,value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" ref={myInput1} className="input" value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className="text">Valor 2:</span>
                <input type="text" ref={myInput2} className="input" value={value2} onChange={e=>setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
