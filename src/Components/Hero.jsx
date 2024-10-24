import React from "react";
import { useNavigate } from 'react-router-dom';

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
          <img src={'https://s3-alpha-sig.figma.com/img/8c08/e116/254eca5f17b913c874afb12ee4949f89?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G88-rnvppSf9-8XwcEAaz1GShXZAks3uYDo8d1QN2kB7TC6OIEYvLh9DVfe63LKWGengp9Ly3H83S4Ei2SXSTzpUwD0beB5hdyqRWpWP7xXbhiPCnHZRWePXtc0BhXCArGiPtslOelnjvYa9S9tNW67H~CTx950ELQ7eOc2OiJGfkg-iwBe8OEAwRVSoKl0xFeds9ISj7h~YJOpBnoer11yhKESxcxJrEbz4s2uhcJs2E-ycWllxiPF~TNLZnJkHW-2uh0pOacekvyJugjOhg8OsFrjFLWwpt~J~TEPU7A87c54F4Dapo999VtwyG~OKBxVUz1gO6MWQEO7XbAuLMg__'} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
