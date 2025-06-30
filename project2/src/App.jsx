import React from 'react'
import List from './components/List'
import Button from './components/Button'

const App = () => {
  return (
    <>
      <List text = "Home"/> 
      <List text = "About" className=""/>
      <List text = "Service" className=""/>
      <List text = "Portfolio" className=""/>
      <List text = "Price" className=""/>
      <List text = "Blog" className=""/>
      <Button text="Contact Us" />
    </>
  )
}

export default App