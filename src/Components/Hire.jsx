import userCentric from "../assets/ExpertiseImages/Saly-19.png"
import Complete from "../assets/ExpertiseImages/Saly-17.png"
import Enterpreneur from "../assets/ExpertiseImages/Saly-22.png"
import seasoned from "../assets/ExpertiseImages/Saly-38.png"
import quality from "../assets/ExpertiseImages/Saly-24.png"

const Hire = () => {
  return (
    <div className="mt-7 ">
      <h1 className="text-4xl text-center font-semibold text-primary lg:text-5xl my-10">
        Why hire DEX N DEVS
      </h1>
      <div className="">
        {/* parent */}
        {/* ----- FIrst div ----- */}
        <div className="flex-row md:flex items-center justify-between gap-x-2 md:flex-shrink-0">
          <div className="flex-row my-4 pb-2 px-2 md:w-[300px] md:h-[350px] border rounded-3xl border-purple-800 hover:border-2 transition-all duration-100 lg:overflow-hidden">
            <img src={userCentric} className=" mx-auto w-[180px]" />
            <p className="font-semibold text-sm text-center mt-1 mb-2 lg:text-lg">
              User-centric approach
            </p>
            <p className="text-sm text-center lg:text-lg">
              We keep in mind each stage of your user journey to build smart,
              immersive & seamless UX, giving your web app a headstart in the
              market.
            </p>
          </div>
          <div className="flex-row my-4 pb-2 px-2 md:w-[300px] md:h-[350px] border rounded-3xl border-purple-800 hover:border-2 transition-all duration-100 lg:overflow-hidden ">
            <img
              src={Complete}
              alt=""
              className=" mx-auto  w-[180px] h-[175px]"
            />
            <p className="font-semibold text-sm text-center mt-1 mb-2 lg:text-lg">
              Complete transparency
            </p>
            <p className="text-sm text-center lg:text-lg">
              Engage anytime with our developers through our open and 100%
              transparent communication loop that lets you keep all your worries
              at bay.
            </p>
          </div>
        </div>

        {/* ----Seocond div ------- */}

        <div className="flex-row md:flex items-center justify-center border border-purple-800 rounded-3xl md:w-[300px] md:max-h-[350px] mx-auto hover:border-2 transition-all duration-100 lg:overflow-hidden lg:pt-4">
          <div className="py-3 px-2">
            <img src={Enterpreneur}  className="mx-auto w-[180px]" />
            <p className="font-semibold text-center text-sm mb-2 mt-1 lg:text-lg">
              Enterpreneur-friendly
            </p>
            <p className="text-center text-sm lg:text-lg">
              Before we kickstart your project, we relate to you as
              entrepreneurs and ensure we are on the same page. This helps us
              understand you better and create solutions that align with your
              requirements.
            </p>
          </div>
        </div>
        {/* -------third -------line */}
        <div className="flex-row md:flex items-center justify-between gap-3">
          <div className="flex-row my-4 py-3 px-2 md:w-[300px] md:h-[350px] border rounded-3xl border-purple-800 hover:border-2 transition-all duration-100 lg:overflow-hidden">
            <img src={seasoned} alt="" className="mx-auto w-[180px]" />
            <p className="font-semibold text-center text-sm mb-2 mt-1 lg:text-lg">
              Seasoned developers
            </p>
            <p className="text-center text-sm lg:text-lg">
              Our developers have top-notch competency across different
              technologies to reduce turnaround time and transform your idea
              into a scalable web app the way you want it with zero tech
              hurdles.
            </p>
          </div>
          <div className="flex-row my-4 py-3 px-2 md:w-[300px] md:h-[350px] border rounded-3xl border-purple-800 hover:border-2 transition-all duration-100 lg:overflow-hidden">
            <img src={quality} alt="" className="mx-auto w-[180px]" />
            <p className="font-semibold text-center text-sm mb-2 mt-1 lg:text-lg">
              Quality assurance
            </p>
            <p className="text-center text-sm lg:text-lg">
              No bugs escape the experienced eyes of our quality analysts. We
              employ intensive testing to ensure your web app hits the bullseye
              at every level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
