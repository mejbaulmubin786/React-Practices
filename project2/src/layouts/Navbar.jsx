import React from 'react'
import List from '../components/List'
import Button from '../components/Button'
import Image from '../components/Image'
import Container from '../components/Container'
import Flex from '../components/Flex'

const Navbar = () => {
  return (
    <nav className='bg-secondary'>
      <Container>
        <Flex className='justify-center items-center'>
          <div className='w-2/12 bd-red-500'>
            <Image />
          </div>
          <div className='w-8/12 bd-blue-500'>
            <Flex className='justify-center items-center gap-x-[42.5px]'>
              <List text="Home" />
              <List text="About" className="" />
              <List text="Service" className="" />
              <List text="Portfolio" className="" />
              <List text="Price" className="" />
              <List text="Blog" className="" />
            </Flex>
          </div>
          <div className='w-2/12 bd-green-500'>
            <Button text="Contact Us" />
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar