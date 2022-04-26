import {useState, /*useEffect, useMemo,*/ useCallback} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import '../../index.css'
import UseCallbackButtons from './UseCallbackButtons'





const UseCallback = (props) => {

    const [count, setCount] = useState(0)

    //const inc = delta => setCount(count + delta)
    
    const inc = useCallback(delta => setCount(curr => curr + delta),[setCount])

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
            </div>
            <UseCallbackButtons inc={inc}/>   
        </div>
    )
}

export default UseCallback
