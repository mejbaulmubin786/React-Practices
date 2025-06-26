import React, {useState} from 'react'
import Card from './components/Card'

const App = () => {
  let [condition, setCondition]=useState(false)

  setTimeout(()=>{
    setCondition(!condition)
  }, 1000)

  return (
    <>
    <div>
      <p onClick={()=>setCondition(!condition)}>click</p>
      {
        condition
        ?
        <div className='one'>
          <h1>This is div one</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam sequi blanditiis, sunt at ad doloribus doloremque eum porro! A porro accusantium reiciendis magnam tenetur facilis nulla ipsa nemo corporis commodi.
          Numquam eos libero in officiis consequatur aut quo nostrum aspernatur quibusdam hic voluptatem corrupti vitae accusamus quaerat error suscipit mollitia dignissimos delectus, ipsam fuga? Obcaecati earum ad voluptates facilis eum?
          Nihil natus esse, ex saepe fugit facilis fugiat laudantium eos perferendis alias rem reiciendis error necessitatibus, possimus exercitationem vero quod sint. Odit numquam, dolores quia natus laudantium nam sed saepe.
          Molestiae quod nam nulla perspiciatis accusamus quia doloremque dolorum, voluptate soluta omnis deserunt alias explicabo placeat voluptates modi a maiores cumque vel. Veniam porro architecto delectus voluptatem soluta. A, error.
          Doloremque, enim commodi earum veniam veritatis eius cum magnam consequuntur alias laboriosam excepturi aliquid odit blanditiis adipisci consequatur libero corrupti animi iste asperiores iusto explicabo totam, eveniet amet! Iure, nam.</p>
        </div>
        :
        <div className='two'>
          <h1>This is div two</h1>
          <button>Two button</button>
        </div>
      }
    </div>
    </>
  )
}

export default App
