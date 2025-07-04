import React from 'react'

const App = () => {
  let data = [
  {
    name: "Mejbaul",
  },
  {
    name: "Mubin",
  },
  {
    name: "Mejbaul Mubin",
  },
  {
    name: "Rubel",
  },
  {
    name: "Mejbaul Mubin (Ruble)",
  }
]

  return (
    <div>
      <ul>
        {
          data.map(item=>(
            <li>{item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
