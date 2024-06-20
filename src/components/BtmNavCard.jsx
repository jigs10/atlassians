import React from "react";

const BtmNavCard = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <img className="h-[300px] w-max"
            src="https://wac-cdn.atlassian.com/misc-assets/webp-images/MercedesBenz-357676847.webp"
            alt=""
          />
        </div>
        <div className="flex flex-col text-start gap-4">
          <p>LARGE ENTERPRISE</p>
          <p className="text-[1.8rem] w-[80%]">
            “With Atlassian cloud, everything regarding server maintenance is
            done for us, and there’s less downtime and better performance.”
          </p>
          <div className="flex flex-col">
            <p>MEHMET SARI</p>
            <p>Modern Collaboration Platform Team, Mercedes Benz</p>
          </div>

          <p>Read Mercedes-Benz’s case study</p>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <button>
              <img
                src="https://wac-cdn.atlassian.com/misc-assets/webp-images/mercedes-benz-brand-logo1.svg"
                alt=""
              />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BtmNavCard;
