
import { useState } from 'react'
import './App.css'
import Inputs from './component/inputs';
import Results from './component/results';

function App() {
  const [ num1, setnum1] = useState();
  const [ num2, setnum2] = useState();
  const [ result, setResult] = useState();

  return (
    <>
    <h1>Calculate</h1>

      <div>
        
        <h2>Результат: {result}</h2>
        <Inputs num1={num1} num2={num2} setnum1={setnum1} setnum2={setnum2} setResult={setResult} />
        <Results result={result} />
        <h2>Результат: {result}</h2>
      </div>
    </>
  )
}

export default App
