import React from 'react';

const Result = ({result}) => {
    console.log(result)
    return (
        <div className="result">
            <p>{result}</p>
        </div>
    )
}

export default Result