import React from 'react'

const Numkey = ({handleClick, num}) => {
    return (
        <button className="numkey" onClick={handleClick}>
            {num}
        </button>
    )
}

export default Numkey