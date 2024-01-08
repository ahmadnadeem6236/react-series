/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(10)
  
  const addValue = () =>{
    console.log('clicked',counter);
    setCounter(counter+1)
  }
  const remValue = () =>{
    console.log('clicked',counter);
    if (counter != 0) {
      setCounter(counter-1)
    }
  }


  return (
    <>
      <h1>Nadeem Ahmad</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>
        Add Value 
      </button>
      <br/>
      <button onClick={remValue}>Remove Value</button>
    </>
  )
}

export default App
