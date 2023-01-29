import React from "react";
import html from "../assets/images/html-logo.svg"
import css from "../assets/images/css-logo.svg"
import tailwindcss from "../assets/images/tailwindcss-logo.svg"
import js from "../assets/images/javascript-logo.svg"
import react from "../assets/images/react-logo.svg"
import java from "../assets/images/java-logo.svg"
import springboot from "../assets/images/springboot-logo.svg"
import restapi from "../assets/images/restapi-logo.png"
import spring from "../assets/images/spring-logo.svg"
import microservices from "../assets/images/microservices-logo.png"
import maven from "../assets/images/maven-logo.jpeg"
import gradle from "../assets/images/gradle-logo.svg"
import docker from "../assets/images/docker-logo.svg"
import mysql from "../assets/images/mysql-logo.svg"
import postgresql from "../assets/images/postgresql-logo.svg"
import redis from "../assets/images/redis-logo.svg"
import github from "../assets/images/github-logo.png"
import aws from "../assets/images/aws-logo.svg"

const Skills = () => {
  const skills = [
    {
      img: html,
      name: "HTML",
      logo: "logo-html5",
    },
    {
      img: css,
      name: "CSS",
    },
    {
      img: tailwindcss,
      name: "Tailwind CSS",
    },
    {
      img: js,
      name: "JavaScript",
    },
    {
      img: react,
      name: "ReactJs",
    },
    {
      img: java,
      name: "Java",
    },
    {
      img: springboot,
      name: "Spring Boot",
    },
    {
      img: restapi,
      name: "Rest API",
    },
    {
      img: spring,
      name: "Spring Data JPA",
    },
    {
      img: microservices,
      name: "Microservices",
    },
    {
      img: spring,
      name: "Spring Cloud",
    },
    {
      img: maven,
      name: "Maven",
    },
    {
      img: gradle,
      name: "Gradle",
    },
    {
      img: docker,
      name: "Docker",
    },
    {
      img: mysql,
      name: "MySQL",
    },
    {
      img: postgresql,
      name: "PostgreSQL",
    },
    {
      img: redis,
      name: "Redis",
    },
    {
      img: github,
      name: "Git & GitHub",
    },
    {
      img: aws,
      name: "AWS fundamentals",
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-yellow-600">My</span> Skills
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:w-[70%] lg:mx-auto place-items-center justify-center mt-12 gap-10 mx-4">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="bg-gray-900 grid gap-[2rem] justify-center items-center p-5 w-[10rem] h-[10rem] rounded-md hover:shadow-md hover:scale-[1.1] transition-[0.4s]"
            >
              <div className="justify-self-center w-16 h-16 border-[1px] border-yellow-500 rounded-full flex justify-center items-center">
                <img
                  src={skill.img}
                  alt="Figma Logo"
                  className={`w-[2.5rem] h-[2.5rem] ${["Rest API", "Microservices", "Maven", "Git & GitHub"].includes(skill.name) ? "rounded-full" : ""}`}
                />
              </div>
              <h3 className="mt-[-25px] skills__name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
