import React from 'react'

const Operationkey = ({handleClick, operation}) => {
    return (
        <button className="op col1" onClick={handleClick}>
            {operation}
        </button>
    )
}

export default Operationkey