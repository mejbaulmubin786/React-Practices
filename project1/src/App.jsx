import React, {useState} from 'react'



const App = () => {
const [show, setShow]=useState("mubin")
const [count, setCount]=useState(0)

function handleIncrement(){
  setCount(count+10)
  console.log(show)
}

  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App