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
//     <div className="clients-container">
//       <div className="scrolling-logos">
//         {/* Render logos twice for continuous scrolling */}
//         {logos.concat(logos).map((logo, index) => (
//           <img key={index} className='logo' src={logo} alt={`Logo ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Clients;


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
    <div>
        <h1 className='uppercase my-10 text-center text-primary text-2xl md:text-5xl font-bold'>Our clients</h1>
    <div className="clients-container my-5">
      <div className="scrolling-logos">
        {/* Render logos twice for seamless scrolling */}
        {logos.map((logo, index) => (
          <img key={index} className='logo' src={logo} alt={`Logo ${index + 1}`} />
        ))}
        {logos.map((logo, index) => (
          <img key={`copy-${index}`} className='logo' src={logo} alt={`Logo ${index + 1} Copy`} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Clients;
