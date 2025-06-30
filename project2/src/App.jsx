import React from 'react'
import List from './components/List'
import Button from './components/Button'
import Image from './components/Image'
import Container from './components/Container'
const App = () => {
  return (
    <>
      <Container>
        <Image />
      <List text = "Home"/> 
      <List text = "About" className=""/>
      <List text = "Service" className=""/>
      <List text = "Portfolio" className=""/>
      <List text = "Price" className=""/>
      <List text = "Blog" className=""/>
      <Button text="Contact Us" />
      </Container>
    </>
  )
}

export default App