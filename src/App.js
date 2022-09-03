import React from "react"
import { useState } from "react"
import Cabecera from './components/Cabecera'
import Listado from './components/Listado'


function App () {
  const [count, setCount] = useState (0)

  const updateCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Cabecera cantidad ={count}/>
      <Listado updateCount={updateCount}/>
    </div>
  );
}

export default App;
