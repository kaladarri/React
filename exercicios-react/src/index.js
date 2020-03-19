import React from 'react'
import ReactDom from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import {CompA,CompB} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root');
ReactDom.render(
<div>
    <Hook/>
    {/* <Contador numero={0}/> */}
    {/* <ComponenteClasse valor="Sou um componente de Classe" /> */}
    {/* <Pai></Pai> */}
    {/* <ComponenteComFuncao/> */}
    {/* <Familia sobrenome="Pereira Neto">
        <Membro nome="Andre" />
        <Membro nome="Mariana" />
        {/* <Membro nome="Mariana" sobrenome="Pereira"/> }
    </Familia> */}
    
    {/* <FamiliaSilva/> */}
    {/* <MultiElementos/> */}
    {/* <CompA valor="Eu sou A"/>
    <CompB valor="Eu sou B"/>  */}
   {/*  <PrimeiroComponente valor="teste"></PrimeiroComponente> */}
</div>

, elemento);