import React, { useState, useEffect } from "react";

import Clients from "../assets/Satisfaction/th 3.png"
import userSatisfaction from "../assets/Satisfaction/546-5462936_customer-satisfaction-icon-png-clipart 1.png"
import doneWork from "../assets/Satisfaction/vector-man-with-laptop-minimalism-white-background-generative-ai_384720-8743 1.png"

const SecExpertise = () => {
  const [satisfaction, setSatisfaction] = useState(0);
  const [clients, setClients] = useState(0);
  const [workDone, setWorkDone] = useState(0);
  const [hasVisited, setHasVisited] = useState(false); // modified to trigger on hover

  useEffect(() => {
    if (hasVisited) {
      const intervalId = setInterval(() => {
        setSatisfaction((prev) => (prev < 100 ? prev + 1 : prev));
        setClients((prev) => (prev < 200 ? prev + 1 : prev));
        setWorkDone((prev) => (prev < 100 ? prev + 1 : prev));
      }, 10);

      return () => clearInterval(intervalId);
    }
  }, [satisfaction, clients, workDone, hasVisited]);

  // Function to start animation on mouse enter
  const handleMouseEnter = () => {
    if (!hasVisited) {
      setHasVisited(true);
    }
  };

  return (
    <div className="" onMouseEnter={handleMouseEnter}>
      <div className="md:flex items-center justify-evenly mx-10 rounded-xl my-2 p-5" style={{ background: "#D9D9D91A" }}>
        <div className="md:w-[25%] my-2" style={{ borderRight: "1px", borderColor: "#cccccc" }}>
          <img
            className="mx-auto w-44 mb-6"
            src={userSatisfaction}
            alt="User Satisfaction"
          />
          <p className="font-medium text-2xl md:text-4xl text-center md:font-semibold">
            {satisfaction}<span className="text-white">%</span>
          </p>
          <p className="font-medium text-2xl md:text-3xl text-center md:font-semibold text-white">User Satisfaction</p>
        </div>
        <div className="md:w-[25%] my-2" style={{ borderRight: "1px", borderColor: "#cccccc" }}>
          <img
            className="mx-auto w-32"
            src={Clients}
            alt="Clients"
          />
          <p className="font-medium text-2xl md:text-4xl text-center md:font-semibold">
            {clients}<span className="text-white">+</span>
          </p>
          <p className="font-medium text-2xl md:text-3xl text-center md:font-semibold text-white">Clients</p>
        </div>
        <div className="md:w-[25%] my-2">
          <img
            className="mx-auto mb-2 w-32"
            src={doneWork}
            alt="Work Done"
          />
          <p className="font-medium text-2xl md:text-4xl text-center md:font-semibold">
            {workDone}<span className="text-white">%</span>
          </p>
          <p className="font-medium text-2xl md:text-3xl text-center md:font-semibold text-white">Work done</p>
        </div>
      </div>
    </div>
  );
};

export default SecExpertise;
