import React from "react";
import Vector from "../assets/vectors/Vector.png";
import Group from '../assets/vectors/Group.png'
import Super from '../assets/vectors/Vector (2).png'
import mobile from '../assets/vectors/Vector (1) copy.png'

const Square = () => {
  return (
    <>
      <div className="flex-wrap items-center justify-center md:grid grid-cols-2 gap-8 p-7 mx-auto ">
        <div
          className=" sm:w-full md:h-[350px]  text-white px-10 py-6 overflow-hidden my-3"
          style={{
            background:
              "linear-gradient(315.35deg, #EE9AE5 -4.01%, #5961F9 98.62%)","borderBottomRightRadius" : "20%"
          }}
        >
          <div className="w-[40px] md:w-[12%] lg:[20%]"><img className="w-[80%]" src={Vector} /></div>
          <p className="text-2xl font-medium tracking-wide my-3 md:text-3xl lg:text-3xl">Interactive Design</p>
          <p className="text-base md:text-xl lg:text-xl overflow-hidden">We keep your users in mind at every stage of your web app development – from brainstorming to design. The result? You will get a highly interactive web app with a hassle-free & unique user experience</p>
        </div>
        <div
          className="h-[350px]   text-white px-10 py-6 overflow-hidden my-3"
          style={{
            background: 
              "linear-gradient(59.92deg, #EE9AE5 -2.32%, #5961F9 98.99%)","borderBottomLeftRadius" : "20%"
          }}
        >
          <div className="w-[40px] md:w-[12%] lg:[25%]"><img className="w-[80%]" src={Group} /></div>
          <p className="text-2xl font-medium tracking-wide my-3 md:text-3xl lg:text-3xl">Latest Technology</p>
          <p className="text-base md:text-xl lg:text-xl overflow-hidden">
            You name the tech and we have it! Our unique team comes with tons of experience across all emerging and popular technology. We go the extra mile to empower your web app with the right and latest technology that helps you stand the test of time in every aspect.</p>
        </div>
        <div
          className="h-[350px]   text-white px-10 py-6 my-3 overflow-hidden"
          style={{
            background:
              "linear-gradient(239.82deg, #EE9AE5 -2.25%, #5961F9 99.08%)","borderTopRightRadius" : "20% "
          }}
        >
          <div className="w-[40px] md:w-[10%] lg:[25%]">
          <img className="w-[80%]" src={mobile} />
          </div>
          <p className="text-2xl font-medium tracking-wide my-3 md:text-3xl lg:text-3xl ">Compatible with all devices</p>
          <p className="text-base md:text-xl lg:text-xl overflow-hidden">The web apps we create are all-device compatible. You can access them from your smartphone, computer or tablet and other portable devices seamlessly and experience superlative performance. This means your website looks good on every screen!</p>
        </div>
        <div
          className="h-[350px]  text-white px-10 py-6 my-3 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #EE9AE5 0%, #5961F9 100%)","borderTopLeftRadius" : "20% "
          }}
        >
          <div className="w-[40px] md:w-[10%] lg:[25%]"><img className="w-[80%]" src={Super} /></div>
          <p className="text-2xl font-medium tracking-wide my-3 md:text-3xl lg:text-3xl">Super-customizable and easily scalable</p>
          <p className="text-base md:text-xl lg:text-xl overflow-hidden">We build flexible web apps that let you add unique functionalities easily and accommodate more users while you’re scaling up.</p>
        </div>
      </div>
    </>
  );
};

export default Square;

