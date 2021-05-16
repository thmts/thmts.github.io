import React, {useEffect, useState}  from 'react'
import './Calculator.css'

export default function Calculator () {

    const [value, setValue] = useState ("")

    const appendNumber = (e) => {
        const ch = e.target.innerHTML
        setValue (value + ch);
    }

    const clearAll = (e) => {
        setValue ("");
    }

    return <div className="calc-container">
        <div  className="calc" >    
            <div className="screen" > 
                <label className="previous-result"> 12234</label>
                <label className="previous-result"> 135646</label>
                <label className="previous-result"> 135646</label>
                <label className="previous-result"> 135646</label>
                <label className="current-result"> {value}</label>
            </div>
            <button className="btn ce" onClick={clearAll}>CE</button>
            <button className="btn" onClick={appendNumber}>/</button>
            <button className="btn" onClick={appendNumber}>*</button>
            <button className="btn" onClick={appendNumber}>1</button>
            <button className="btn" onClick={appendNumber}>2</button>
            <button className="btn" onClick={appendNumber}>3</button>
            <button className="btn" onClick={appendNumber}>-</button>
            <button className="btn" onClick={appendNumber}>4</button>
            <button className="btn" onClick={appendNumber}>5</button>
            <button className="btn" onClick={appendNumber}>6</button>
            <button className="btn plus" onClick={appendNumber}>+</button>
            <button className="btn" onClick={appendNumber}>7</button>
            <button className="btn" onClick={appendNumber}>8</button>
            <button className="btn" onClick={appendNumber}>9</button>
            <button className="btn dot" onClick={appendNumber}>.</button>
            <button className="btn" onClick={appendNumber}>0</button>
            <button className="btn eq">=</button>
        </div>
    </div>
}