import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    console.log('contador actualizado', count)
  }, [count])
  const handleIncrement=():void=>{
    setCount(count + 1);
  }

  const handleDecrement=():void=>{
    setCount(count - 1);
  }
  const handleReset=():void=>{
    setCount(0);
  }


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador con React + TypeScript</h1>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>➕ Incrementar</button>
      <button onClick={handleDecrement}>➖ Decrementar</button>
      <button onClick={handleReset}>🔁 Reiniciar</button>
    </div>
    
  )
}

export default App
