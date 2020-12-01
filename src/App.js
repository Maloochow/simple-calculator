import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Result from './components/Result';
import Keypad from './components/Keypad';

const App = () => {
  const [ result, setResult ] = useState("")
  const [ num1, setNum1 ] = useState("")
  const [ operation, setOperation ] = useState("")
  const [ isNum2, setIsNum2 ] = useState(false)

  const reset = () => {
    setResult("")
    setNum1("")
    setOperation("")
  }

  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const calculate = () => {
    setResult(eval(num1 + operation + result))
  }

  const handleClick = (e) => {
    console.log(e)
    switch (e.target.innerText) {
        case "AC":
            reset()
            break;
        case "C":
            backspace()
            break;
        case "+/-":
            setResult( result[0] === "-" ? result.slice(1) : "-" + result)
            break;
        case "%":
            let newNum = Number(result)/100
            setResult(newNum.toString())
            break;
        case "+":
            setOperation("+")
            setNum1(result)
            setIsNum2(true)
            break;
        case "-":
          setOperation("-")
          setNum1(result)
          setIsNum2(true)
            break;
        case "x":
          setOperation("*")
          setNum1(result)
          setIsNum2(true)
            break;
        case "÷":
          setOperation("/")
          setNum1(result)
          setIsNum2(true)
            break;
        case "=":
            calculate()
            break;
        default:
           if (isNum2) {
             setResult(e.target.innerText)
             setIsNum2(false)
           } else {
             setResult(result + e.target.innerText)
           }
            break;
    }
}
  return (
    <div className="App">
      <div className="body">
        <Result result={result}/>
        <Keypad handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
