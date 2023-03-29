import styles from '../styles/Home.module.css'
import Navegador from '@/components/Navegacao'

export default function inicio(){
    return (
        <div>
            <h1>Fundamentos Next.js & React</h1>
            <h2>Vamos estudar esse framework</h2>
            <div className={styles.roxo}>
                Teste modulo css
            </div>
            <Navegador/>
            
        </div>
    )
}