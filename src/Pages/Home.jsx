import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Services from './Services'
import About from './About'
import Hire from '../Components/Hire'
import Clients from '../Components/Clients'
import Contact from './Contact'

const Home = () => (
    <div>
        <Navbar />
        <Hero />
        <Services/>
        <About/>
        <Hire/>
        <Clients/>
        <Contact/>
        
    </div>
)

export default Home