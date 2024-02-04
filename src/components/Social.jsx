import React from "react";

function Social({value}) {
  const social_media = [
    { icon: "logo-linkedin", link: "https://in.linkedin.com/in/mallikarjuna-reddy-nimmakayala-aa1825160" },
    { icon: "logo-instagram", link: "https://www.instagram.com/malli_reddy_n/?igshid=ZDdkNTZiNTM%3D" },
    { icon: "logo-github", link: "https://github.com/MallikarjunaReddyN" },
    { icon: "logo-facebook", link: "https://www.facebook.com/people/Mallikarjuna-Reddy-Nimmakayala/pfbid0Tk6NPLNLhYbz3rCExHZfe3FWiforiTbWg1L7FgAr3t8b2Pk8uEC2zEEMRrEn1S9cl/" },
    { icon: "logo-twitter", link: "https://mobile.twitter.com/mallireddy_1998" },
  ];
  return (
    <div className={`${value} text-3xl flex items-center md:justify-start justify-center gap-5`}>
      {social_media?.map((media) => (
        <div
          key={media.icon}
          className="text-gray-400 hover:text-white cursor-pointer "
        >
          <a href={media.link} target="_blank"> 
            <ion-icon name={media.icon}></ion-icon>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Social;
