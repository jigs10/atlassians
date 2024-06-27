import React, { useState } from "react";

const BtmNavCard = () => {
  const [border, setBorder] = useState(null);

  const logos = [
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/mercedes-benz-brand-logo1.svg",
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/roblox-brand-logo.svg",
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/royal-caribbean-brand-logo.svg",
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/lumen-brand-logo.svg",
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/doodle-brand-logo.svg",
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/dropbox-brand-logo.svg",
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/hcs-brand-logo.svg",
  ];
  return (
    <div className=" flex flex-col px-[9vw] justify-center">
      <div className="flex gap-[5rem] pb-[5vh] justify-center inner-div">
        <div className="flex items-center">
          <img 
            src="https://wac-cdn.atlassian.com/misc-assets/webp-images/MercedesBenz-357676847.webp"
            alt="mercidez"
            className="w-[150%]"
          />
        </div>
        <div className="in-inner-div flex flex-col text-start gap-4 justify-center text-white relative">
          <p>LARGE ENTERPRISE</p>
          <p className="text-[1.5rem]">
            “With Atlassian cloud, everything regarding server maintenance is
            done for us, and there’s less downtime and better performance.”
          </p>
          <div className="flex flex-col">
            <p className="font-bold">MEHMET SARI</p>
            <p>Modern Collaboration Platform Team, Mercedes Benz</p>
          </div>

          <p>Read Mercedes-Benz’s case study</p>
        </div>
      </div>
      <div>
   

    <ul className="flex gap-8 border-t border-gray-50">
      {logos.map((src, index) => (
        <li key={index} className="flex flex-col relative">
          <div className={`absolute -top-[1px] h-[3px] w-full bg-gray-200 ${border === index ? "block" : "hidden"}`}></div>
          <button className="mt-6" onClick={() => setBorder(index)}>
            <img src={src} alt={`Logo ${index + 1}`} />
          </button>
        </li>
      ))}
    </ul>

      </div>
    </div>
  );
};

export default BtmNavCard;
