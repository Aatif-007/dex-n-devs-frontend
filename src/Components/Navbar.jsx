import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-between py-2'>
           <Link to={"/"}><span className='flex items-center p-0 m-0 gap-2'><p className='dexs text-xl md:text-2xl '>DEXS</p><p className='n text-xl md:text-2xl text-red-800 '>N</p><p className='devs text-xl  md:text-2xl'>DEVS</p></span></Link>
            <div>
                <ul className='hidden md:flex items-start justify-start gap-6 uppercase'>
                    <a href='#hero' className='text-sm text-primary font-medium'>Home</a>
                    <a href='#expertise' className='text-sm text-primary font-medium'>Services</a>
                    <a href="#about" className='text-sm text-primary font-medium'>About us</a>
                    <a href='#form' className='text-sm text-primary font-medium'>Contact us</a>
                    <Link className='text-sm text-primary font-medium' to={'/admin'}>Login</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar