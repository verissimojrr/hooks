import PageTitle from '../../components/layout/PageTitle'
import {useState} from 'react'
import SectionTitle from '../../components/layout/SectionTitle';
import '../../index.css'

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Inicial...')
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => setCount(count -1)}>-1</button>
                    <button className="btn" onClick={() => setCount(count +1)}>+1</button>
                    <button className="btn" onClick={() => setCount(current => current +1000)}>1000</button>
                </div>
                
            </div>
            <SectionTitle title="Exercicio #02"/>
            <div className="center">
            <spam className="spam">{name}</spam>
                <input type="text" className="input" placeholder='Digite aqui...' onChange={e => setName(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseState
