
import { useState } from 'react'
import Data from './data'


const App = () => {

  let [alldata, setAllData]=useState(Data)

  console.log(alldata)
  

  return (
    <>
    <div>
      <ul>
        {
          alldata.map(item=>(
            <li>{item.name}</li>
          ))
        }
      </ul>
    </div>
    </>
  )
}

export default App

