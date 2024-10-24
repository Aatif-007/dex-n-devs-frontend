import React, { useState, useEffect } from "react";

const SecExpertise = () => {
  const [satisfaction, setSatisfaction] = useState(0);
  const [clients, setClients] = useState(0);
  const [workDone, setWorkDone] = useState(0);
  const [hasVisited, setHasVisited] = useState(false); // new flag

  useEffect(() => {
    if (hasVisited) {
      const intervalId = setInterval(() => {
        if (satisfaction < 100) {
          setSatisfaction(satisfaction + 1);
        }
        if (clients < 200) {
          setClients(clients + 1);
        }
        if (workDone < 100) {
          setWorkDone(workDone + 1);
        }
      }, 10); // update every 10ms

      return () => clearInterval(intervalId); // clean up
    }
  }, [satisfaction, clients, workDone, hasVisited]);

  // set the flag to true when the component is mounted
  useEffect(() => {
    setHasVisited(true);
  }, []);

  return (
    <div className="">
      <div className="md:flex items-center justify-evenly mx-10 rounded-xl my-2 p-5" style={{ background: "#D9D9D91A" }}>
        <div className="  md:w-[25%] my-2" style={{ borderRight: "1px", borderColor: "#ccccc" }}>
          <img className="mx-auto w-44 mb-6" src={"https://s3-alpha-sig.figma.com/img/c056/c581/db793452cc816424b51924659ecbe749?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dGBeZPseyF2TTfWnqx6bB2G9Fqdk6rKl~icDcA-2v5ws7WMrwfQkhdEQkAC8IYsyY-8mxBVnKTw8Oi3v6CI5Oe~5XqJXOPjxb43YJlhVSp6YZk3e12XqlQPghoWDqgFaMFdillinUDnXC0xBLC5qKf4y4z9hDnf9PKjo~sg9SdNIhTG9BXWPjU6mLSDTm-3NFYRERHMUEH6u3zKSqpahpBN-238uq~mFw3tYGss9TelRrsHtb6yqHVMz9-YmJYwpRS9PmlE2KSob8wUrGTSrTjaUugSUhmD09tmd8SgzEa1gyDGUheYHaKkipJixPwh4c6LIAuGk8mIENxsIbj4WFQ__"} />
          <p className="font-medium text-2xl md:text-4xl text-center md:font-semibold">
            {satisfaction}<span className="text-white">%</span>
          </p>
          <p className="font-meduim text-2xl md:text-3xl text-center md:font-semibold text-white">User Satisfaction</p>
        </div>
        <div className="  md:w-[25%] my-2" style={{ borderRight: "1px", borderColor: "#ccccc" }}>
          <img className="mx-auto w-32" src={"https://s3-alpha-sig.figma.com/img/37ee/4615/24479eb5bb2ce38403daf2d658147a88?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dwcjfMiVuJFEwMRNEIb-1AuFDDqa0cZgI~6LAUUrcnTS~s25A9Ux0a9d28MxUIiVJ0mDVpo8plOqW3JnBGb2VRuPKzvaEEDibST27dQyxCJLpqAk1pVMnGGQkoiYrqwKYysPbP3vKEccfkT4iE39yJvvBedR2M~KOWW1gXrJyjBOXuq~TLpMRvpkKvOx0fKxR1Ly-bSJrj8bLneSnrp8qvaBLc3o2xi2Jd1KwU6xqbf2dhx9sk9N8ol8oUcsdESfN1a-D45YPct1jAhwq1R9mqjdjy7RFhyO-widxu7nhrh6sPKJGj7TQKHD4lXqVC928s7ZsKXL8rMqWeOFVdkEjA__"} />
          <p className="font-medium text-2xl md:text-4xl text-center md:font-semibold">
            {clients}<span className="text-white">+</span>
          </p>
          <p className="font-meduim text-2xl md:text-3xl text-center md:font-semibold text-white">Clients</p>
        </div>
        <div className="md:w-[25%] my-2">
          <img className="mx-auto mb-2 w-32" src={"https://s3-alpha-sig.figma.com/img/942e/dc3d/86a921a4ef31b74445b4118dec34913f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d52P8K7-5M3bLPNYX-AZQNndL0YYky2laDmWuo8Mz-denbldvE5dPt5Mgqdv4HfoDK9gBRwtr7ktyQKmK5PDA69LQGg87JqwsCK1TRlZ~mBdKTvRBzjckX8Hg1OAXDsqpy-LoSkJ72wwW4ztKbqLwC4E0JsMqlDucTuquTJxZ7DHvCjdmvPMtPptcJhxfPFDsClyyiErRJg-Pln44xMwOU4EAQreN3BNV5~Oli~7LIVxCxGIxh4-klsNOJGDsIfKJYV6ZIxE-7EHZbfWmJR0c4u0hXnmdgbNMAamINqNIPQuIElRPnHhId32ZAdu2RmgNBIdW8bDI1s5u9jjFFjK0w__"} />
          <p className="font-medium text-2xl md:text-4xl text-center md:font-semibold">
            {workDone}<span className="text-white">%</span>
          </p>
          <p className="font-meduim text-2xl md:text-3xl text-center md:font-semibold text-white">Work done</p>
        </div>
      </div>
    </div>
  );
};

export default SecExpertise;