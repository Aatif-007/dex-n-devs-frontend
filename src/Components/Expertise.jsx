import { useState, useEffect } from 'react';
import { ServiceData } from '../assets/Services';
import Square from './Square';

const Expertise = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    const data = ServiceData;
    setServiceData(data);
  }, []);

  const generateCircles = (num) => {
    let circles = [];
    for (let i = 0; i < num; i++) {
      const size = Math.random() * 100 + 100; // Size between 100px and 200px
      const top = Math.random() * 100; // Random top position
      const left = Math.random() * 100; // Random left position
      const gradient =
        Math.random() > 0.5
          ? "radial-gradient(circle, #FDE0FF 0%, #D88EF3 45%, #D275F4 79%, #BA45E6 100%)"
          : "radial-gradient(circle, #ECEAFE 0%, #9E96F3 45%, #6A61EC 79%, #6159C8 100%)";
      circles.push({ size, top, left, gradient });
    }
    return circles;
  };

  const circles = generateCircles(10); // Generate 10 circles

  return (
    <div className='my-5 px-2 relative overflow-hidden' id='expertise'>
      <div className="absolute inset-0 pointer-events-none z-0">
      {circles.map((circle, index) => (
  <div
    key={index}
    className="rounded-full absolute flip-vertical-left" // Add the new class here
    style={{
      width: `${circle.size}px`,
      height: `${circle.size}px`,
      top: `${circle.top}%`,
      left: `${circle.left}%`,
      background: circle.gradient,
    }}
  />
))}
      </div>
      <h1 className='text-primary text-4xl font-semibold mb-8 mt-4 z-10 relative'>Our Expertise</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
        {serviceData.map((i) => (
          <div className="border flex-col items-center justify-center p-5 border-[#997AF1] backdrop-blur-md rounded-xl mx-3 my-2" key={i.id}>
            <img className='w-52 h-56 mx-auto' src={i.image} alt='Image is loading ...' />
            <p className='text-center text-2xl font-medium text-primary'>{i.text}</p>
          </div>
        ))}
      </div>
      <div className="top-1 z-10 relative">
        <Square />
      </div>
    </div>
  );
}

export default Expertise;
