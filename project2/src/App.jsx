import React from 'react'
import List from './components/List'
import Button from './components/Button'
import Image from './components/Image'
import Container from './components/Container'
import Flex from './components/Flex'
const App = () => {
  return (
    <>
      <Container>
        <Flex>
        <Image />
      <List text = "Home"/> 
      <List text = "About" className=""/>
      <List text = "Service" className=""/>
      <List text = "Portfolio" className=""/>
      <List text = "Price" className=""/>
      <List text = "Blog" className=""/>
      <Button text="Contact Us" />
      </Flex>
      </Container>
    </>
  )
}

export default App