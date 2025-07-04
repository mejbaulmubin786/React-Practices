import React, {useState} from 'react'
import Card from './components/Card'

const App = () => {
  let [count, setCount] = useState(0)


  function handleClick(){
    setCount(count+1)

  }

  function handleClickDec(){
    setCount(count-1);
  }
  

  return (
    <>
    {/* <Card design="design-one" title="first-card" text="first-card-text" buttonText="First-Button" type={true} /> */}
    <h1>Count {count}</h1>
    <button disabled={count<10?false:true} onClick={handleClick}>Increment</button>
    <button disabled={count>0?false:true} onClick={handleClickDec}>Decrement</button>

    </>
  )
}

export default App
