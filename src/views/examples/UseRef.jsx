import {useState, useEffect, useRef} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import '../../index.css'

const merge = (s1, s2) => {
    return  [...s1].map((e, i) => {
        return `${e}${s2[i] || ""}`
    }).join("")
}

const UseRef = (props) => {

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const count = useRef(0)
    //console.log(value1)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function()
        { count.current = count.current + 1
        myInput2.current.focus()
        },
        [value1]
    )
    useEffect(function()
        { count.current++
        myInput1.current.focus()
        },
        [value2]
    )
    
    //count.current = count.current + 1

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <div>
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>

                </div>
                </div>
                <input 
                    type="text" 
                    className="input" 
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                    ref={myInput1}
                />
            </div>
            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                    <input 
                        type="text" 
                        className="input" 
                        value={value2}
                        onChange={e => setValue2(e.target.value)}
                        ref={myInput2}
                    />
            </div>
        </div>
    )
}

export default UseRef
