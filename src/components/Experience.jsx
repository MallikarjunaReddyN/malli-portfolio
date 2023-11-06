import React from "react";
import dtici from "../assets/images/dtici.jpeg";
import miq from "../assets/images/miq.jpeg";
import xebia from "../assets/images/xebia.jpeg";
import huawei from "../assets/images/huawei.png";

function Experience() {
    const companies = [
      {
        img: dtici,
        name: "Daimler Trucks",
        designation: "Senior Consultant",
        from_to: "June 2023 - Present",
        social_media: [
          {icon: "logo-instagram", link: "https://www.instagram.com/daimlertruck_ag/?hl=en" },
          {icon: "logo-linkedin", link: "https://in.linkedin.com/company/daimler-truck-innovation-center-india" },
          {icon: "earth", link: "https://www.daimlertruck.com/en" },
        ]
      },  
      {
          img: miq,
          name: "MIQ Digital",
          designation: "Software Engineer - II",
          from_to: "Sept 2022 - May 2023",
          social_media: [
            {icon: "logo-instagram", link: "https://www.instagram.com/wearemiq/?hl=en" },
            {icon: "logo-linkedin", link: "https://in.linkedin.com/company/miq-digital" },
            {icon: "earth", link: "https://www.wearemiq.com/" },
          ]
        },
        {
          img: xebia,
          name: "Xebia IT Architects",
          designation: "Junior Consultant",
          from_to: "Apr 2021 - Sept 2022",
          social_media: [
            {icon: "logo-instagram", link: "https://www.instagram.com/life_at_xebia/?hl=en" },
            {icon: "logo-linkedin", link: "https://in.linkedin.com/company/xebia" },
            {icon: "earth", link: "https://xebia.com/" },
          ]
        },
        {
          img: huawei,
          name: "Huawei Technologies",
          designation: "Associate Software Engineer",
          from_to: "Oct 2019 - Apr 2021",
          social_media: [
            {icon: "logo-instagram", link: "https://www.instagram.com/huawei/?hl=en" },
            {icon: "logo-linkedin", link: "https://in.linkedin.com/company/huawei-india-r&d-center" },
            {icon: "earth", link: "https://www.huawei.com/en/" },
          ]
        },
      ];

  return (
    <section id="experience" className="py-10 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
        <span className="text-yellow-600">My</span> Experience
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Work</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
        {companies.map((company, i) => (
            <div key={i} className={`min-w-[12rem] max-w-[20rem] p-4 ${company.from_to.toLowerCase().includes("present") ? "bg-yellow-600" : "bg-slate-700" } rounded-xl`}>
            <img src={company.img} alt="" className="rounded-lg w-[310px] h-[200px]" />
            <h3 className="text-xl my-4 font-bold">{company.name}</h3>
            <h3 className={`text-lg ${company.from_to.toLowerCase().includes("present") ? "text-slate-700" : "text-slate-400" } my-4`}>{company.designation}</h3>
            <h3 className={`text-lg ${company.from_to.toLowerCase().includes("present") ? "text-slate-700" : "text-slate-400" } my-4`}>{company.from_to}</h3>
            <div className="flex gap-3 pl-24">
            { company.social_media?.map((media, i) => (
              <a key={i}
                href={media.link}
                target="_blank"
                className={`${company.from_to.toLowerCase().includes("present") ? "text-slate-700" : "text-slate-400" } text-2xl hover:text-white cursor-pointer`}
              >
                <ion-icon name={media.icon}></ion-icon>
              </a>
            ))}
            </div>
          </div>
        ))}
          
        </div>
      </div>
    </section>
  );
}

export default Experience;
