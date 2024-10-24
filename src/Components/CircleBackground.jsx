import React from 'react';

const CircleBackground = ({ num }) => {
  const generateCircles = (num) => {
    const circles = [];
    for (let i = 0; i < num; i++) {
      const size = Math.random() * 100 + 100; // Size between 100px and 200px
      const top = Math.random() * 100; // Random top position (0% to 100%)
      const left = Math.random() * 100; // Random left position (0% to 100%)
      const gradient =
        Math.random() > 0.5
          ? "radial-gradient(circle, #FDE0FF 0%, #D88EF3 45%, #D275F4 79%, #BA45E6 100%)"
          : "radial-gradient(circle, #ECEAFE 0%, #9E96F3 45%, #6A61EC 79%, #6159C8 100%)";
      circles.push({ size, top, left, gradient });
    }
    return circles;
  };

  const circles = generateCircles(num);

  return (
    <div
      style={{
        position: 'fixed', // Use fixed to keep circles in view on scroll
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1, // Send circles behind other content
        
      }}
    >
      {circles.map((circle, index) => (
        <div
          key={index}
          className="rounded-full blur-[4px]"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            position: 'absolute',
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            background: circle.gradient,
            borderRadius: '50%', // Ensure the divs are circles
            pointerEvents: 'none', // Prevent interactions with circles
          }}
        />
      ))}
    </div>
  );
};

export default CircleBackground;
