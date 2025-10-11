import React, { useEffect, useState } from 'react'

import Section from '../components/Section'
import Container from '../components/Container'
import Flex from '../components/Flex'
import logo from '../assets/logo.png'
import Image from '../components/Image'
import List from '../components/List'
import { Link } from 'react-scroll'
import { Link as RouterDom, useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

export default function Navber() {
    let location = useLocation()
    let [home, setHome] = useState(false)
    let [about, setAbout] = useState(false)
    let [project, setProject] = useState(false)
    let [service, setService] = useState(false)
    let [contact, setContact] = useState(false)
    let [navber, setNavber] = useState(false)
    let handleHome = () => {
        setHome(true)
        setAbout(false)
        setProject(false)
        setService(false)
        setContact(false)

    }
    let handleAbout = () => {
        setAbout(true)

        setHome(false)
        setProject(false)
        setService(false)
        setContact(false)

    }
    let handleProject = () => {
        setProject(true)

        setHome(false)
        setAbout(false)
        setService(false)
        setContact(false)

    }
    let handleService = () => {
        setService(true)

        setHome(false)
        setAbout(false)
        setProject(false)
        setContact(false)

    }
    let handleContact = () => {
        setContact(true)

        setHome(false)
        setAbout(false)
        setProject(false)
        setService(false)

    }

    let content = <div className='z-10 bg-primary md:hidden w-full absolute top-[140px] left-0 '>
        <div >
            <ul className='text-center pt-5 pb-[70px]'>
                {location.pathname === '/' ? (<Link onClick={handleHome} to="hero" spy={true} smooth={true} offset={-170} duration={100} ><List text="Home" className={`m-7 md:m-0 after:absolute after:-bottom-[2px] after:left-0 md:hover:after:w-1/2 ${home ? "md:hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></Link>) : (<RouterDom to='/'><List text="Home" className={`m-7 md:m-0 after:absolute after:-bottom-[2px] after:left-0 md:hover:after:w-1/2 ${home ? "md:hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></RouterDom>)}

                {location.pathname === '/' ? (<Link onClick={handleAbout} to="about" spy={true} smooth={true} offset={-50} duration={600} ><List text="About" className={`m-7 md:m-0 after:absolute after:-bottom-[2px] after:left-0 md:hover:after:w-1/2 ${about ? "md:hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></Link>) : (<RouterDom to='/'><List text="About" className={`m-7 md:m-0 after:absolute after:-bottom-[2px] after:left-0 md:hover:after:w-1/2 ${about ? "md:hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></RouterDom>)}

                {location.pathname === '/' ? (<Link onClick={handleProject} to="project" spy={true} smooth={true} offset={-25} duration={1200}><List text="Project" className={`m-7 md:m-0 after:absolute after:-bottom-[2px] after:left-0 md:hover:after:w-1/2 ${project ? "md:hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></Link>) : (<RouterDom to='/'><List text="Project" className={`m-7 md:m-0 after:absolute after:-bottom-[2px] after:left-0 md:hover:after:w-1/2 ${project ? "md:hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></RouterDom>)}

                {location.pathname === '/' ? (<Link onClick={handleService} to="service" spy={true} smooth={true} offset={-40} duration={1600}><List text="Service" className={`m-7 md:m-0 after:absolute after:-bottom-[2px] after:left-0 md:hover:after:w-1/2 ${service ? "md:hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></Link>) : (<RouterDom to='/'><List text="Service" className={`m-7 md:m-0 after:absolute after:-bottom-[2px] after:left-0 md:hover:after:w-1/2 ${service ? "md:hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></RouterDom>)}

                {location.pathname === '/' ? (<Link onClick={handleContact} to="contact" spy={true} smooth={true} offset={-10} duration={2000}><List text="Contact" className={`m-7 md:m-0 after:absolute after:-bottom-[2px] after:left-0 md:hover:after:w-1/2 ${contact ? "md:hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></Link>) : (<RouterDom to='/'><List text="Contact" className={`m-7 md:m-0 after:absolute after:-bottom-[2px] after:left-0 md:hover:after:w-1/2 ${contact ? "md:hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></RouterDom>)}
            </ul>
        </div>
    </div>
    let handleNavber = () => {
        setNavber(!navber)
    }
    
    
    return (
        <Section className='bg-primary py-12 relative'>
            <Container>
                <Flex>
                    <div className='mx-2 sm:mx-4 md:w-1/2 md:mx:4 lg:mx-0'>
                        <Flex className='items-center gap-x-1 sm:gap-x-3 md:gap-x-4'>
                            <RouterDom to='/'><Image src={logo} className='w-[55px] sm:w-[65px] sm:h-[65px]  lg:w-[75px] lg:h-[75px] rounded-full' /></RouterDom>
                            <RouterDom to='/'><h2 className='text-secondary text-xl md:text-[24px] lg:text-text28 font-robo font-semibold'>MEJBAUL MUBIN</h2></RouterDom>
                        </Flex>
                    </div>
                    <div className='hidden md:w-1/2 md:justify-end md:flex  md:items-center md:mx-8 xl:mx-0'>
                        <ul className='flex  gap-x-7'>

                            {location.pathname === '/' ? (<Link onClick={handleHome} to="hero" spy={true} smooth={true} offset={-170} duration={100} ><List text="Home" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${home ? "hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></Link>)
                                :
                                <RouterDom to='/'><List text="Home" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${home ? "hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></RouterDom>
                            }
                            {location.pathname === '/' ? (
                                <Link onClick={handleAbout} to="about" spy={true} smooth={true} offset={-50} duration={600} ><List text="About" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${about ? "hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></Link>
                            ) : (
                                <RouterDom to="/"><List text="About" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${about ? "hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></RouterDom>
                            )}

                            {location.pathname === '/' ? (<Link onClick={handleProject} to="project" spy={true} smooth={true} offset={-25} duration={1200}><List text="Project" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${project ? "hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></Link>)
                                :
                                <RouterDom to='/'><List text="Project" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${project ? "hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></RouterDom>
                            }
                            {location.pathname === '/' ? (
                                <Link onClick={handleService} to="service" spy={true} smooth={true} offset={-40} duration={1600}><List text="Service" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${service ? "hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></Link>
                            ) : (
                                <RouterDom to='/'><List text="Service" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${service ? "hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></RouterDom>
                            )}

                            {location.pathname === '/' ? (<Link onClick={handleContact} to="contact" spy={true} smooth={true} offset={-10} duration={2000}><List text="Contact" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${contact ? "hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></Link>)
                                :
                                (<RouterDom to='/'><List text="Contact" className={`after:absolute after:-bottom-[2px] after:left-0 hover:after:w-1/2 ${contact ? "hover:after:w-full" : ""}  after:h-[3px] after:bg-white`} /></RouterDom>)
                            }
                        </ul>

                    </div>
                    <div>
                        {navber && content}
                    </div>
                    <button onClick={handleNavber} className="text-2xl block md:hidden absolute top-1/2 -translate-y-1/2 right-5 sm:right-7">
                        {navber ? <ImCross className="text-sm text-secondary" /> : <FaBars className="text-base text-secondary" />}
                    </button>
                </Flex>

            </Container>

        </Section>
    )
}
