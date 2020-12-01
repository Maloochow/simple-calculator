import React from 'react'
import Numkey from './Numkey'
import Operationkey from './Operationkey'

const Keypad = (props) => {

    return (
        <div className="keypad">
            <Operationkey operation="AC" handleClick={props.handleClick}/>
            <Operationkey operation="+/-" handleClick={props.handleClick}/>
            <Operationkey operation="%" handleClick={props.handleClick}/>
            <Operationkey operation="÷" handleClick={props.handleClick}/>
            <Numkey num="7" handleClick={props.handleClick}/>
            <Numkey num="8" handleClick={props.handleClick}/>
            <Numkey num="9" handleClick={props.handleClick}/>
            <Operationkey operation="x" handleClick={props.handleClick}/>
            <Numkey num="4" handleClick={props.handleClick}/>
            <Numkey num="5" handleClick={props.handleClick}/>
            <Numkey num="6" handleClick={props.handleClick}/>
            <Operationkey operation="-" handleClick={props.handleClick}/>
            <Numkey num="1" handleClick={props.handleClick}/>
            <Numkey num="2" handleClick={props.handleClick}/>
            <Numkey num="3" handleClick={props.handleClick}/>
            <Operationkey operation="+" handleClick={props.handleClick}/>
            <Operationkey operation="C" handleClick={props.handleClick}/>
            <Numkey num="0" handleClick={props.handleClick}/>
            <Numkey num="." handleClick={props.handleClick}/>
            <Operationkey operation="=" handleClick={props.handleClick}/>
        </div>
    )
}

export default Keypad