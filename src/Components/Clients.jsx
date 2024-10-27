// import React from 'react';
// import adventure from '../assets/Clients/adventure.logo.jpg';
// import cafe from '../assets/Clients/cafe.logo.jpg';
// import fan from '../assets/Clients/fan.logo.jpg';
// import hindustan from '../assets/Clients/Hindustan.logo.jpg';
// import infra from '../assets/Clients/infra.logo.jpg';
// import leon from '../assets/Clients/Leon.logo.jpg';
// import ramnath from '../assets/Clients/ramnath.logo.jpg';
// import rider from '../assets/Clients/rider.logo.jpg';
// import vaish from '../assets/Clients/vaaishno.logo.png';
// import x from '../assets/Clients/x.logo.jpg';

// const Clients = () => {
//   const logos = [
//     adventure,
//     cafe,
//     fan,
//     hindustan,
//     infra,
//     leon,
//     ramnath,
//     rider,
//     vaish,
//     x
//   ];

//   return (
//     <div>
//       <h1 className="uppercase my-10 text-center text-primary text-2xl md:text-5xl font-bold">Our clients</h1>
//       <div className="overflow-hidden py-5">
//         <div className="flex animate-marquee space-x-8">
//           {logos.map((logo, index) => (
//             <img key={index} className="logo h-16 w-auto object-contain" src={logo} alt={`Logo ${index + 1}`} />
//           ))}
//           {/* Render logos twice for seamless scrolling */}
//           {logos.map((logo, index) => (
//             <img key={`copy-${index}`} className="logo h-16 w-auto object-contain" src={logo} alt={`Logo ${index + 1} Copy`} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Clients;

// src/components/Clients.js
import React from 'react';
import adventure from '../assets/Clients/adventure.logo.jpg';
import cafe from '../assets/Clients/cafe.logo.jpg';
import fan from '../assets/Clients/fan.logo.jpg';
import hindustan from '../assets/Clients/Hindustan.logo.jpg';
import infra from '../assets/Clients/infra.logo.jpg';
import leon from '../assets/Clients/Leon.logo.jpg';
import ramnath from '../assets/Clients/ramnath.logo.jpg';
import rider from '../assets/Clients/rider.logo.jpg';
import vaish from '../assets/Clients/vaaishno.logo.png';
import x from '../assets/Clients/x.logo.jpg';

const Clients = () => {
  const logos = [
    adventure,
    cafe,
    fan,
    hindustan,
    infra,
    leon,
    ramnath,
    rider,
    vaish,
    x
  ];

  return (
    <div className="overflow-hidden py-5 bg-white">
      <h1 className="uppercase my-10 text-center text-primary text-2xl md:text-5xl font-bold">Our Clients</h1>
      <div className="flex space-x-8 animate-marquee">
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} className="h-16 w-auto object-contain" src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
