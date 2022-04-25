import {useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import '../../index.css'

const calcFatorial = num => {
    const n = parseInt(num)
    if (n< 0) return -1
    if(n === 0) return 1
    return calcFatorial(n-1) * n
}

const UseEffect = (props) => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(() => setFatorial(calcFatorial(number)), [number])

    const [status, setStatus] = useState('Impar')

    useEffect(() => setStatus(number % 2 === 0 ? 'Par' : 'Impar'), [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <div>
                    <span className="text">Fatorial:</span>
                    <span className="text red">{fatorial < 0 ? 'Não existe!' : fatorial}</span>
                </div>
                
                <input 
                    type="number" 
                    className="input" 
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>
            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <div>
                    
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
