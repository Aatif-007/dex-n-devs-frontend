import React, { useState, useEffect } from "react";

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
            src="https://s3-alpha-sig.figma.com/img/c056/c581/db793452cc816424b51924659ecbe749?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lVfhVALn7kcswTxkoip~VvOax4VToPCr9vytx8Wxv6TDU-PLNJSVvLran0qhereAusItQff0TbeK~4LVyqjqOr0pHQ9HGMpJC6WbiEbHKpWL7rnNbdSQ11-WhBjLohWPdanV45xqrF1if8Yplk3fxv5D7FOJiD0QGrj~BV4iqxTb0yi-YsQE30gys0ppcfZcBqMSdmgqtx6BmoAFpeyZUFzmNcua-xZ150440S9DyrxBUTccgLsrxJaJkqCCIWXc3WnEOw~nSYm3KH5npzXYsd5M1XmOctIkvBr5mfiZFyVcs2F88MJN5JgggBbX3NPdfjZvdzEk7CUnpK5OyJL5CA__"
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
            src="https://s3-alpha-sig.figma.com/img/37ee/4615/24479eb5bb2ce38403daf2d658147a88?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1ctxA3cn4czEYmKT07BYDTPpqtfRWB4H9SVA~1-sZB00ICRr5qcmqZv3g~FQFtmfDrz0PJLNilVdP4HFDp3tdl2MYE~2TwMQQQIxNs8r-doQWFRRJkDTqCSeG2MV09O~U2osuzXtVFlpxjlb6Z4HxOaZeKlyecFgI9ZVHa-KiTkns8vOZMFiYXBVOHHbwd-yj1Q8RZDQNOcGjkyF6hozuHh4va6zCuaslPCc6dIE2XsPnfoBNopL6MZF48vB7zSae~E6xFZ-VKWI~z476X4vcTF3N5OPR00siKhIeh~A0mO4ouBUTq-dkQzEHd4zr1wM1JG8RYUjA1wSGZMLJfBQQ__"
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
            src="https://s3-alpha-sig.figma.com/img/942e/dc3d/86a921a4ef31b74445b4118dec34913f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zzz0aBhamGJmXGUWXBZJF~glaosnDMHF8wPj2rapq54~yeoG6dOrX6XNwouySJLO4vyh-Wj5tB-~XfUk4CV8gfsCVWKqnNuTfKaEjxU2Kv6c4yPM3FY1uo3W1y3jNtAiboRFnbLZx-3E1VkyihN7netiR7p~vRmGrND9beho1XxfB-L01wbq8Y961zq3CfJPzkkXLWJNm4NE5WvSlKSQCtKrDqVVI0fFeRkF9o8npg5FLp~hRkYaV6Huy42MJe0nBaEt0c6t4R-trgB1TXDeqHxoyUg6z0N5DyQYLumJO0ZIVjSkcl7YEcMvv8LncZSSvTzUGQA2ZhBw-KGm44y6Mw__"
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
