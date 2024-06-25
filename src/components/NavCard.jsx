import React from "react";

const NavCard = () => {
  return (
    <div className="my-8">
      <div className="my-8">
        <ul className="flex gap-4 justify-center">
          <li><a className="px-8 py-2 text-[1.2rem] border-2 rounded-full" href="">Software</a></li>
          <li><a className="px-8 py-2 text-[1.2rem] border-2 rounded-full" href="">Product management</a></li>
          <li><a className="px-8 py-2 text-[1.2rem] border-2 rounded-full" href="">Marketing</a></li>
          <li><a className="px-8 py-2 text-[1.2rem] border-2 rounded-full" href="">Project management</a></li>
          <li><a className="px-8 py-2 text-[1.2rem] border-2 rounded-full" href="">Design</a></li>
          <li><a className="px-8 py-2 text-[1.2rem] border-2 rounded-full" href="">IT</a></li>
        </ul>
      </div>
      <div className="flex justify-between spe-div">
        <div className="text-start flex flex-col gap-6">
          <h4 className="text-[2rem] font-bold leading-tight">Supercharge dev productivity</h4>
          <p className="w-[93%]">
            Plan, track, and release world-class software with the number one
            software development tool for agile teams
          </p>
          <a className="text-blue-600 flex items-center" href="">Learn more about Software <i className="ri-arrow-right-line"></i></a>
        </div>
        <div>
          <img src="https://wac-cdn.atlassian.com/misc-assets/webp-images/software-main.webp" alt="" />
        </div>
      </div>
      <p className="my-8">GET STARTED WITH A TEMPLATE</p>
      <div className="flex text-start gap-8 spe-div">
        <div>
          <div className="mb-5"> 
            <img src="https://wac-cdn.atlassian.com/misc-assets/webp-images/software-card-1.webp" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[1.5rem] font-bold">Scrum</h4>
            <p className="w-[93%]">
            Easily plan, track, and manage work across sprints
            </p>
            <a className="text-blue-600" href="">Try it out <i className="ri-arrow-right-line"></i></a>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <img src="https://wac-cdn.atlassian.com/misc-assets/webp-images/software-card-2.webp" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[1.5rem] font-bold">Bug Tracking</h4>
            <p className="w-[93%]">
            Seamlessly report, track, and prioritize bugs to address development issues
            </p>
            <a className="text-blue-600" href="">Try it out <i className="ri-arrow-right-line"></i></a>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <img src="https://wac-cdn.atlassian.com/misc-assets/webp-images/software-card-3.webp" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[1.5rem] font-bold">DevOps</h4>
            <p className="w-[93%]">
            Develop, deploy, and manage applications with an open tools approach
            </p>
            <a className="text-blue-600" href="">Try it out <i className="ri-arrow-right-line"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCard;
