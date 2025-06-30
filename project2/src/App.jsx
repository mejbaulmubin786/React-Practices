import React from 'react'
import List from './components/List'

const App = () => {
  return (
    <>
      <List text = "Home"/> 
      <List text = "About" className=""/>
      <List text = "Service" className=""/>
      <List text = "Portfolio" className=""/>
      <List text = "Price" className=""/>
      <List text = "Blog" className=""/>
    </>
  )
}

export default App