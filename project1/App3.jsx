import React, {useState} from 'react'
import Card from './components/Card'

const App = () => {
  let [show, setShow] = useState(false)

let handleShow=()=>{
   setShow(!show)
}

  return (
    <>
    <div>
      <button onClick={handleShow}>Open</button>
      {
        show ? <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, est.</p>:""
      }
    </div>

    </>
  )
}

export default App
