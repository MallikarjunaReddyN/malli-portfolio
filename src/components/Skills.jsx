import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      logo: "logo-html5",
    },
    {
      name: "CSS",
      logo: "logo-css3",
      level: "Expect",
    },
    {
      name: "Tailwind CSS",
      logo: "logo-nodejs",
    },
    {
      name: "JavaScript",
      logo: "logo-react",
    },
    {
      name: "ReactJs",
      logo: "logo-html5",
    },
    {
      name: "Java",
      logo: "logo-css3",
    },
    {
      name: "Spring Boot",
      logo: "logo-nodejs",
    },
    {
      name: "Rest API",
      logo: "logo-react",
    },
    {
      name: "Spring Data JPA",
      logo: "logo-html5",
    },
    {
      name: "Microservices",
      logo: "logo-css3",
    },
    {
      name: "Spring Cloud",
      logo: "logo-nodejs",
    },
    {
      name: "Maven & Gradle",
      logo: "logo-react",
    },
    {
      name: "Docker",
      logo: "logo-html5",
    },
    {
      name: "MySQL",
      logo: "logo-css3",
    },
    {
      name: "PostgreSQL",
      logo: "logo-nodejs",
    },
    {
      name: "Redis",
      logo: "logo-nodejs",
    },
    {
      name: "Git & GitHub",
      logo: "logo-react",
    },
    {
      name: "AWS fundamentals",
      logo: "logo-react",
    },
    
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
        <span className="text-yellow-600">My</span> Skills
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 place-items-center justify-center mt-12 gap-10 mx-4">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-yellow-600 relative min-w-[10rem] lg:min-w-[14rem] max-w-[20rem] min-h-[8rem] bg-gray-900 lg:px-6 pt-12 rounded-xl"
            >
              
              <p className="text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
