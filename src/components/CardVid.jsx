import React, {  useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const CardVid = (props) => {
  const [fixedVid, setfixedVid] = useState(false)
  const [Lastelm, setLastelm] = useState(false)
  const sectionRef = useRef(null);
  const lastElementRef = useRef(null);

  useEffect(() => {

    const lastElement = lastElementRef.current;

    
      const lastElmTrigger = lastElement && ScrollTrigger.create({
        trigger: lastElement,
        start: 'top bottom', // Adjust this to your needs
        onEnter: () => setLastelm(true),
        onLeaveBack: () => setLastelm(false),
      });


    return () => {
      lastElmTrigger && lastElmTrigger.kill();
    };
  }, []);

  useEffect(() => {
    const sectionElement = sectionRef.current;


    const sectionTrigger = sectionElement && ScrollTrigger.create({
      start: "top 140vh",
      end: "bottom 400vh",
    
      trigger: sectionElement,
    
      onEnter: () => {
        setfixedVid(true);
      },
      onLeave: () => {
        setfixedVid(false);
      },
      onLeaveBack: () => {
        setfixedVid(false);
      },
      onEnterBack: () => {
        setfixedVid(true);
      },
      // markers: true,
    });

    

  
    // Cleanup function to remove the ScrollTrigger instances on unmount
    return () => {
      sectionTrigger && sectionTrigger.kill();
    };
  }, []);



  return (
    <div className="container py-[15vh]">
      <div className={`inner-container flex gap-3 relative cv-scroll ${Lastelm && "items-end" }`}>
     
      
     
        <div className={`left flex flex-col gap-3 ${fixedVid? "w-[35%]" : "w-[70%]"} cv-scroll`} ref={sectionRef}>
    
        {Array(5).fill().map((_, index) => (
          
          <div key={index} ref={index >= Array.length ? lastElementRef : null}>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="none"
              viewBox="0 0 48 48"
              {...props}
            >
              <path
                fill="#1868DB"
                d="M16.55 32.674h-3.328c-5.02 0-8.622-3.075-8.622-7.578h17.898c.928 0 1.528.66 1.528 1.593V44.7c-4.474 0-7.476-3.624-7.476-8.676v-3.35Zm8.84-8.95h-3.328c-5.02 0-8.622-3.02-8.622-7.523h17.899c.927 0 1.582.604 1.582 1.537V35.75c-4.474 0-7.53-3.624-7.53-8.676v-3.35Zm8.895-8.896h-3.328c-5.02 0-8.622-3.075-8.622-7.578h17.899c.927 0 1.527.659 1.527 1.538v18.01c-4.474 0-7.476-3.623-7.476-8.675v-3.295Z"
              />
            </svg>

            <h4 className="text-lg font-medium">Jira</h4>
          </div>
          <h1 className="flex">
            Dream it, plan it, launch it
          </h1>
          <p className="flex w-[90%] text-justify text-[1rem]">
            {" "}
            The #1 tool for agile teams is now for all teams. Plan, track, and
            deliver your biggest ideas together.
          </p>
          <div className="bg-gray-50 p-[1vw] flex flex-row gap-3 mt-6">
            <div className="flex flex-col">
              <img src="https://wac-cdn.atlassian.com/misc-assets/webp-images/People-profile.webp" alt="logo" />
            </div>
            <div className="w-[70%] text-start">
              <p className="mb-2 text-[1rem]">
                “We've been able to reduce our cycle time and increase
                throughput by 200%, which means we're delivering capabilities to
                customers faster and increasing customer satisfaction.”
              </p>
              <h4 className="font-medium">Mai Lian Scarlett</h4>
              <p className="text-[0.8rem]">FORMER SENIOR DIRECTOR, AGILE TRANSFORMATION OFFICE, LUMEN</p>
            </div>
          </div>
          <div className="flex items-start mt-8">
        <button className="text-blue-600">Learn more <i className="ri-arrow-right-line"></i></button>
      </div>
      </div>
       ))}
      
        </div>
       
        <div className="right align-middle relative">
          <div className={`${fixedVid ? "vidDiv" : "relative" }`}>
          <video
            muted
            autoPlay
            loop
            className={`${fixedVid? "w-[84%]" : "w-[100%]"} border-gray-200 rounded-lg border-2`}
          >
            <source
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/CSD-10721_WAC_Hero_C_LowBR.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="flex mt-10"><button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium text-[1.2rem]">Get started with Jira</button></div>
         
        </div>
        </div>
      </div>
      
    </div>
  );
};

export default CardVid;