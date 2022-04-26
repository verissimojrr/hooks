import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'


const UseRef = (props) => {

    const [count, inc, dec] = useCounter()

    //http://files.cod3r.com.br/curso-react/estados.json
    /*fetch('http://files.cod3r.com.br/curso-react/estados.json')
        .then(data => data.json())
        .then(json => console.log(json))*/

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)
    //console.log(response)

    const showStates = states => {
        //console.log(states)
        return states.map(({nome, sigla}) => {
            return <li key={nome}>{nome} - {sigla} {/*console.log(nome, sigla)*/}</li>
    })
}

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercicio 01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={_ => dec()}>-1</button>
                    <button className="btn" onClick={_ => inc()}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercicio 02"/>
            <ul>
                {response.data ? showStates(response.data) : false}
            </ul>
        </div>
    )
}

export default UseRef
