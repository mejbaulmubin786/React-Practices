import React, { useEffect } from 'react'
import Button from '../components/Button'
import Image from '../components/Image'
import project1 from '../assets/project1.png'
import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import List from '../components/List'
import { Link } from 'react-router-dom'

export default function CaseStudyPage() {
  useEffect(()=>{
    window.scrollTo({ top: 0})
  })
  return (
    <Section  className='bg-third py-20 md:py-32 '>
        <Container>
        <h2 className='text-black text-3xl md:text-text50 font-semibold font-robo pb-5 text-center'>TalksME</h2>
        <p className=' w-full md:w-[780px] px-4 md:px-4  mx-auto text-black text-sm md:text-lg font-normal font-robo  text-center pb-7 md:pb-14'>This page contains the case study of TalksME Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.</p>
        <Link to="https://github.com/sajibkhandev/TalksME_chattingApp">
        <Button text="Project Link"  className='flex mx-auto '/>
        </Link>
        
        <Image src={project1} className='mx-auto pt-10 md:pt-20 md:w-[600px] px-12 md:px-0' />

        <div className='pt-12 md:pt-16 md:w-[900px] mx-auto px-4 md:px-0'>
        <h3 className='text-black text-xl md:text-3xl font-semibold font-robo pb-5 '>Project Overview</h3>
        <Flex className='flex-col gap-y-5 '>
        <p className='text-black w-full   text-sm md:text-base font-normal font-robo'>TalksME is an Open-Source project which is a simple and clean multi-page portfolio website template for developers. I created this project for developers to quickly build a good-looking and fast-performing multi-page portfolio without having to code their portfolio from scratch.</p>
        <p className='text-black w-full   text-sm md:text-base font-normal font-robo'>Since the launch of this project, It has received more than 2k stars on Github and it has also got featured on hundreds of sites and CSS-tricks.com has also featured this template as the hottest frontend tool of 2021 in one of their articles which you can find here</p>
        <p className='text-black w-full   text-sm md:text-base font-normal font-robo'>TalksME is now being used by thousands of developers globally and it has helped many people in landing jobs & opportunities which makes me happy that my creation is helping other people in building their careers.</p>
        <p className='text-black w-full   text-sm md:text-base font-normal font-robo'>It has many other features like Dopefolio's repo contains a playground link which people can use to test the template with different theme colours to find their own preferred primary colour for the template.</p>
        <p className='text-black w-full   text-sm md:text-base font-normal font-robo'>Feel free to check out the Project by visiting the Project Link.</p>
        </Flex>
        <h4 className='text-black text-xl md:text-3xl font-semibold font-robo py-12 '>Tools Used</h4>
        <div className='flex flex-wrap gap-x-4 md:items-center '>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>React</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Tailwind</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>JavaScript</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Firebase</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>React Redux</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>GIT</li>
            <li className='mb-10 py-2 text-center w-[150px]  md:py-2  md:px-5 text-xs md:text-base bg-primary rounded list-none font-robo font-medium'>Github</li>
        </div>
        <h4 className='text-black text-xl md:text-3xl font-semibold font-robo py-6 md:py-10 '>See Live</h4>
        <Flex className='gap-x-8'>
        <Link to='https://talksme.vercel.app/'>
        <Button text="Project Live"/>
        </Link>
        <Link to='/'>
        <Button text="Go Back"/>
        </Link>
        </Flex>
        </div>

        </Container>
    </Section>
  )
}
