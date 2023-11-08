import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import fullstackdevelopment from "../assets/images/job.gif";
import Social from "./Social";
const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex pt-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={fullstackdevelopment} alt="" className="md:w-11/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-yellow-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm <span>Mallikarjuna Reddy N</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <AnchorLink href="#contact"><button className="btn-primary mt-8">Contact Me</button></AnchorLink>
          <Social value="mt-8"/>
        </div>
      </div>
    </section>
  );
};

export default Home;
