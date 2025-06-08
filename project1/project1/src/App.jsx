import React from 'react'
import Title from './components/Title'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <Card design="design-one" title="Card-1" text="Some quick example text to build on the card title and make up the bulk of the card’s content." type={true}/>
      <Card design="design-two" title="Card-2" text="Some quick example text to build on the card title and make up the bulk of the card’s content." type={false}/>
      <Card design="design-one" title="Card-3" text="Some quick example text to build on the card title and make up the bulk of the card’s content." type={true}/>
      <Card />
    </>
  )
}

export default App