import React from "react";
import { useNavigate } from 'react-router-dom';
import Heros from "../assets/vectors/Saly-10 (1).png"

const Hero = () => {

  const navigate = useNavigate()

  return (
    <div id="hero" className="py-3 rounded-3xl" style={{background: "linear-gradient(313.28deg, #EE9AE5 -2.13%, #5961F9 97.19%"
    , borderBottomRightRadius:"20%"}}> 
      <div className="flex-row items-center justify-center md:flex pt-20">
        {/* parent */}
        <div className="pl-16 px-3 ">
          <h1 className="text-4xl md:text-5xl font-semibold text-white ">Build your Dream</h1>
          <h2 className="text-4xl md:text-5xl mb-6" style={{color : "#E296E7"}}>Website</h2>
          <p className="text-base md:text-xl lg:text-xl text-white">Your website is your digital storefront, and we’re here to make it stand out. With a commitment to personalized service and state-of-the-art design, we craft websites that captivate visitors and boost your business.</p>
          <div className="flex mt-10 mb-9 gap-4">
            <a href="#form"><button id="contact" className="px-4 text-white py-2 rounded-2xl" style={{background : "#ED80FD", borderBottomLeftRadius : "1px" }}>Get Started</button></a>
            <button className="px-4 text-white py-2 rounded-2xl" style={{background:'#422684', borderTopRightRadius : "1px"}} onClick={()=>navigate('/portfolio')}>View Portfolio</button>
          </div>
        </div>

        <div className="flex-row md:w-full ">
          <img src={Heros} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
