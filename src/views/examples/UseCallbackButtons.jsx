import React from 'react'
import '../../index.css'




const UseCallbackButtons = (props) => {

    //console.log('render...')

    return (
        <div className="UseCallbackButtons">
            <button className="btn" onClick={_ => props.inc(6)}>+6</button>
            <button className="btn" onClick={_ => props.inc(12)}>+12</button>
            <button className="btn" onClick={_ => props.inc(18)}>+18</button>
        </div>    
    )
}

export default React.memo(UseCallbackButtons)