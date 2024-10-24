import React from 'react'
import MyAbout from '../Components/Myabout'
import SecExpertise from '../Components/secExpertise'

const About = () => {
  return (
    <div id='about' className='py-5 mx-auto' style={{
      background: " linear-gradient(135deg, #EE9AE5 0%, #5961F9 100%)",
    }}>
      <MyAbout />
      <SecExpertise />
    </div>
  )
}

export default About