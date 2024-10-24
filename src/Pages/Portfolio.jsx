import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import CircleBackground from "../Components/CircleBackground";
import ConstructionImage from "../Components/Construction";
import EducationImages from "../Components/Education"
import foodImage from "../Components/Food";
import MarketingImage from "../Components/Marketing"
import buisnessImages from "../Components/Business";
import Contact from "../Components/Form";
import Footer from "../Components/Footer";

const Portfolio = () => {
  const [construction, setConstruction] = useState([]);
  const [education,setEducation] = useState([])
  const [food,setFood] = useState([])
  const [marketing,setMarketing] = useState([])
  const [business,setBusiness] = useState([])

  const Construction = async () => {
    setConstruction(ConstructionImage);
  };

  const Education = async() => {
    setEducation(EducationImages)
  }
  const Food = async() => {
    setFood(foodImage)
  }

  const Marketing = async() => {
    setMarketing(MarketingImage)
  }

  const Business = async() => {
    setBusiness(buisnessImages)
  }

  useEffect(() => {
    Construction();
    Education()
    Food()
    Marketing()
    Business()
  }, []);
  return (
    <div>
      <Navbar />
      <CircleBackground num={30} />
      <div className="flex items-center justify-center">
        <div className="mt-20">
          <h1 className="text-2xl font-semibold text-pink-600 my-8 md:text-3xl lg:text-4xl text-center">
            100+ website,{" "}
            <span className="text-primary">Experience you can trust with</span>{" "}
          </h1>
        </div>
      </div>
      <p className="text-primary font-semibold text-center md:text-xl lg:text-xl">
        Since 2021, Dex N Devs has built webiste for a diverse of client of
        India. Help local buisnesses to grow. With over 150+ satisfied clients
        over 100% of satisfaction our experience developer and designer as over
        3+ years of experience in top product or service based IT companies.
      </p>
      <div></div>

      <div>
        <div className="construction mt-16">
          <h1 className="text-center font-semibold text-2xl  md:text-3xl  lg:text-4xl text-primary">
            <span className="text-pink-600">Real Estate & Construction,</span>{" "}
            Website Portfolio
          </h1>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
              {construction.map((image, index) => (
                <div
                  className="border border-purple-700 rounded-xl p-2 hover:scale-110 md:hover:scale-150 duration-300"
                  key={index}
                >
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* -------------------------Education websites------------------- */}

      <div className="education mt-16">
        <h1 className="text-center font-semibold text-2xl  md:text-3xl  lg:text-4xl text-primary">
          <span className="text-pink-600">Education,</span>{" "}
          Website Portfolio
        </h1>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
            {education.map((image, index) => (
              <div
                className="border border-purple-700 rounded-xl p-2 hover:scale-110 md:hover:scale-150 duration-300"
                key={index}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ----------------------FOOD WEbsite -------------------------- */}
      <div className="food mt-16">
        <h1 className="text-center font-semibold text-2xl  md:text-3xl  lg:text-4xl text-primary">
          <span className="text-pink-600">Food & Restraunts,</span>{" "}
          Website Portfolio
        </h1>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
            {food?.map((image, index) => (
              <div
                className="border border-purple-700 rounded-xl p-2 hover:scale-110 md:hover:scale-150 duration-300"
                key={index}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

{/* ----------------------- Marketing Websites------------------- */}

      <div className="food mt-16">
        <h1 className="text-center font-semibold text-2xl  md:text-3xl  lg:text-4xl text-primary">
          <span className="text-pink-600">Marketing,</span>{" "}
          Website Portfolio
        </h1>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
            {marketing.map((image, index) => (
              <div
                className="border border-purple-700 rounded-xl p-2 hover:scale-110 md:hover:scale-150 duration-300"
                key={index}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Buisness and Consultanies websites */}
      <div className="food mt-16">
        <h1 className="text-center font-semibold text-2xl  md:text-3xl  lg:text-4xl text-primary">
          <span className="text-pink-600">Business Services & Consultancies,</span>{" "}
          Website Portfolio
        </h1>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8">
            {business.map((image, index) => (
              <div
                className="border border-purple-700 rounded-xl p-2 hover:scale-110 md:hover:scale-150 duration-300"
                key={index}
              >
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 bg-primary rounded-2xl">

      <Contact />
      <Footer />
      </div>
    </div>
  );
};

export default Portfolio;

