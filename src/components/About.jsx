import React from "react";
import aboutImg from "../assets/images/malli.png";
import resume from "../assets/MallikarjunaReddy_CV.pdf"
const About = () => {
  const info = [
    { text: "Years experience", count: "04+" },
    { text: "Companies Work", count: "04" },
    { text: "Technical Skills", count: "15+" },
  ];
  return (
    <section id="about" className="pb-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-[#EE3F37]">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Fullstack developer with 4+ years of experience in building web applications using HTML, CSS, JavaScript, ReactJs, Java, Spring MVC, Spring Boot, Rest API, Microservices, Spring cloud, MySQL, PostgreSQL and Azure.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-[#EE3F37]">
                      {content.count}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a href={resume} target="_blank" data-text="Download CV"  download="MallikarjunaReddy_CV">
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-[#EE3F37] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
