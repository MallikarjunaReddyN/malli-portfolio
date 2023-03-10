import React from "react";
import aboutImg from "../assets/images/malli.png";
import resume from "../assets/MallikarjunaReddy_CV.pdf"
const About = () => {
  const info = [
    { text: "Years experience", count: "03+" },
    { text: "Companies Work", count: "03" },
    { text: "Technical Skills", count: "15+" },
  ];
  return (
    <section id="about" className="pb-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-yellow-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Fullstack developer with 3+ years of experience in building web applications using HTML, CSS, JavaScript, ReactJs, Java, Spring MVC, Spring Boot, Rest API, Microservices, Spring cloud and Postgres SQL.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-yellow-600">
                      {content.count}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={resume} target="_blank" data-text="Download CV"  download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-yellow-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
