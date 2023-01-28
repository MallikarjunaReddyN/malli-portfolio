function Education() {
  const collages = [
    {
      degree: "B. Tech in ECE",
      name: "Kuppam Engineering College, Chittoor",
      from_to: "2015 - 2019",
    },
    {
      degree: "Higher Secondary",
      name: "Sri Chaithanya Jr College, Tirupati",
      from_to: "2015",
    },
    {
      degree: "Secondary (SSC)",
      name: "Z . P High School, Kadapa",
      from_to: "2013",
    },
  ];

  return (
    <section id="education" className="py-10 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-yellow-600">My</span> Education
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Studies</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {collages.map((collage, i) => (
            <div
              key={i}
              className={`min-w-[16rem] max-w-[16rem] min-h-[14rem] p-4 bg-slate-700  rounded-xl`}
            >
              <h3 className="text-xl my-4 font-bold">{collage.degree}</h3>
              <h3 className={`text-lg text-slate-400 my-4`}>{collage.name}</h3>
              <h3 className={`text-lg text-slate-400 my-4`}>
                {collage.from_to}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
