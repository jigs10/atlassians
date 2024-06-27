import React, { useState } from 'react';

const NavCard = () => {
  const [selectedItem, setSelectedItem] = useState('Software');

  const navItems = [
    "Software",
    "Product management",
    "Marketing",
    "Project management",
    "Design",
    "IT"
  ];

  const arrayOfObjects = [
    {
      name: "Software",
      heading: "Supercharge dev productivity",
      paragraph: "Plan, track, and release world-class software with the number one software development tool for agile teams",
      mainImage: "https://wac-cdn.atlassian.com/misc-assets/webp-images/software-main.webp",
      img1: "https://wac-cdn.atlassian.com/misc-assets/webp-images/software-card-1.webp",
      img2: "https://wac-cdn.atlassian.com/misc-assets/webp-images/software-card-2.webp",
      img3: "https://wac-cdn.atlassian.com/misc-assets/webp-images/software-card-3.webp",
      ttl1: "Scrum",
      para1: "Easily plan, track, and manage work across sprints",
      ttl2: "Bug Tracking",
      para2: "Seamlessly report, track, and prioritize bugs to address development issues",
      ttl3: "DevOps",
      para3: "Develop, deploy, and manage applications with an open tools approach"
    },
    {
      name: "Product management",
      heading: "Build products like the best of them",
      paragraph: "Prioritize your most impactful ideas, build roadmaps to engage stakeholders, and plan and track your work with end-to-end visibility",
      mainImage: "https://wac-cdn.atlassian.com/misc-assets/webp-images/pm-main.webp",
      img1: "https://wac-cdn.atlassian.com/misc-assets/webp-images/pm-card-1.webp",
      img2: "https://wac-cdn.atlassian.com/misc-assets/webp-images/pm-card-2.webp",
      img3: "https://wac-cdn.atlassian.com/misc-assets/webp-images/pm-card-3.webp",
      ttl1: "Product discovery",
      para1: "Prioritize ideas and create custom shareable product roadmaps",
      ttl2: "Strategic planning",
      para2: "Present your business vision and help your team understand your strategic plan",
      ttl3: "Product requirements",
      para3: "Keep track of your pre-launch prep and post-launch progress"
    }
    // Add more objects for other nav items as needed
  ];

  const selectedItemData = arrayOfObjects.find(item => item.name === selectedItem);

  return (
    <div className="my-8">
      <div className="my-8">
        <ul className="flex gap-4 justify-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                className={`px-8 py-2 text-[1.2rem] border-2  rounded-full hover:text-black cursor-pointer ${selectedItem === item ? 'bg-blue-100 border-2 border-blue-600' : ''}`}
                onClick={() => setSelectedItem(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {selectedItemData && (
        <div>
          <div className="flex justify-between spe-div">
            <div className="text-start flex flex-col gap-6">
              <h4 className="text-[2rem] font-bold leading-tight">{selectedItemData.heading}</h4>
              <p className="w-[93%]">
                {selectedItemData.paragraph}
              </p>
              <a className="text-blue-600 flex items-center" href="">Learn more about {selectedItemData.name} <i className="ri-arrow-right-line"></i></a>
            </div>
            <div>
              <img src={selectedItemData.mainImage} alt={selectedItemData.name} />
            </div>
          </div>
          <p className="my-8">GET STARTED WITH A TEMPLATE</p>
          <div className="flex text-start gap-8 spe-div">
            {[selectedItemData.img1, selectedItemData.img2, selectedItemData.img3].map((img, imgIndex) => (
              <div key={imgIndex}>
                <div className="mb-5">
                  <img src={img} alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[1.5rem] font-bold">
                    {imgIndex === 0 ? selectedItemData.ttl1 : imgIndex === 1 ? selectedItemData.ttl2 : selectedItemData.ttl3}
                  </h4>
                  <p className="w-[93%]">
                    {imgIndex === 0 ? selectedItemData.para1 : imgIndex === 1 ? selectedItemData.para2 : selectedItemData.para3}
                  </p>
                  <a className="text-blue-600" href="">Try it out <i className="ri-arrow-right-line"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavCard;
