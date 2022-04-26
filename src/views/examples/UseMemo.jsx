import {useState, /*useEffect,*/ useMemo} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import '../../index.css'

const sum = (a, b) => {
    const future = Date.now() + 2000
    while(Date.now() < future) {}
    return a + b
}

const UseMemo = (props) => {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    //const result = sum(n1, n2)

    /*const [result, setResult] = useState(0)
    useEffect(_ => setResult(sum(n1,n2)), [n1, n2])*/

    const result = useMemo(_ => sum(n1,n2), [n1,n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle/>
            <div className="center">
                <input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))} />
            </div>
            <div className="center">
                <input type="number" className="input" value={n2} onChange={e => setN2(parseInt(e.target.value))} />
            </div>
            <div className="center">
                <input type="number" className="input" value={n3} onChange={e => setN3(parseInt(e.target.value))} />
            </div>
            <span className="text">{result}</span>
        </div>
    )
}

export default UseMemo
