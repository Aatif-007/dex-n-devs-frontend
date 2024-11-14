import sideImage from "../assets/Satisfaction/Saly-13.png"
const MyAbout = () => {
  return (
    <div
      className="my-5 rounded-xl p-4 px-9 "
      
    >
      <h1 className="text-4xl font-medium text-primary mt-4  md:text-4xl">About us</h1>
      <div className="md:flex items-center justify-center">
        <div className="md:w-3/4">
          <p className="text-white text-2xl md:text-3xl mt-5 mb-4 ">Welcome to <span className="text-primary font-medium">DEX N DEVS</span> a one stop Solutions</p>
          <p className="text-white text-sm md:text-xl tracking-tight">
            At dexNdevs Solutions, we turn ideas into beautifully crafted
            websites. Our mission is to deliver innovative web solutions that
            elevate your online presence and drive results. Our vision is to be
            the leading web development partner known for transforming digital
            dreams into reality through creativity and cutting-edge technology.
          </p>
        </div>
        <div className="right w-[90%] md:w-4/12">
          <img src={sideImage} className="w-full animate-pulse"  alt="Loading img..." />
        </div>
      </div>
    </div>
  );
};

export default MyAbout;
