import React from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { useReducer } from 'react'

import { initialState, reducer} from './../../store/index';
import{login, numberAdd2} from '../../store/actions'

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ? 
                (<span className="text">{state.user.name}</span>) : 
                (<span className="text">Sem usuario</span>)
                }
                <span className="text">{state.number}</span>
                <div>
                    {/*<button className="btn" onClick={_ => dispatch({type: 'login', payload: 'Maria'})}>Login</button>
                    <button className="btn" onClick={_ => dispatch({type: 'numberAdd2'})}>+2</button>*/}
                    <button className="btn" onClick={_ => login(dispatch, "Joao")}>Login</button>
                    <button className="btn" onClick={_ => numberAdd2(dispatch)}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
