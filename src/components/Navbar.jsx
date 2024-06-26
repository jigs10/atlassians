import { React, useState } from "react";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [SearchVisible, setSearchVisible] = useState(false);

  const handleMouseEnter = (id) => () => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };


  // Step 3: Handle button click
  const handleSearchVisible = () => {
    setSearchVisible(!SearchVisible);
  };

  return (
    <nav className=" justify-between items-center flex flex-row "> 
    <div className={`flex flex-row gap-10 ${SearchVisible ? 'w-full' : ''}`}>
        <div>
          <a href="/">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={187}
              height={30}
              fill="none"
              viewBox="0 0 156 20"
              {...props}
            >
              <g fill="#3D6BAD">
                <path
                  d="M97.75 14.46c0-2.742-1.472-4.04-5.57-4.935-2.28-.49-2.829-1.01-2.829-1.732 0-.895.809-1.299 2.31-1.299 1.818 0 3.607.549 5.31 1.328V4.214c-1.184-.606-3.03-1.068-5.195-1.068-4.07 0-6.176 1.761-6.176 4.676 0 2.309 1.067 4.156 5.281 4.964 2.511.52 3.03.924 3.03 1.76 0 .809-.519 1.328-2.308 1.328-2.05 0-4.503-.693-6.09-1.645v3.78c1.27.636 2.944 1.328 6.06 1.328 4.417 0 6.177-1.962 6.177-4.877ZM142.139 3.377v15.73h3.348V7.129l1.414 3.175 4.733 8.803h4.214V3.377H152.5v10.16l-1.27-2.944-3.809-7.216h-5.282ZM120.869 3.377h-3.665v15.7h3.665v-15.7ZM112.96 14.46c0-2.742-1.472-4.04-5.57-4.935-2.28-.49-2.829-1.01-2.829-1.732 0-.895.808-1.299 2.309-1.299 1.818 0 3.608.549 5.311 1.328V4.214c-1.184-.606-3.031-1.068-5.195-1.068-4.07 0-6.177 1.761-6.177 4.676 0 2.309 1.068 4.156 5.282 4.964 2.511.52 3.03.924 3.03 1.76 0 .809-.519 1.328-2.309 1.328-2.049 0-4.502-.693-6.089-1.645v3.78c1.27.636 2.944 1.328 6.061 1.328 4.444 0 6.176-1.962 6.176-4.877ZM57.201 3.377v15.73h7.504l1.183-3.406h-5.022V3.377h-3.665ZM42.338 3.378v3.405h4.07v12.324h3.665V6.783h4.358V3.378H42.338ZM36.999 3.377h-4.82l-5.484 15.73h4.185l.78-2.656c.923.26 1.904.433 2.943.433 1.01 0 1.992-.144 2.944-.433l.78 2.655h4.184L37 3.378Zm-2.425 10.246a7.761 7.761 0 0 1-2.02-.289l2.02-6.869 2.02 6.87a7.587 7.587 0 0 1-2.02.288ZM77.692 3.377h-4.82l-5.483 15.7h4.185l.779-2.655c.923.26 1.905.433 2.944.433 1.01 0 1.991-.144 2.944-.433l.779 2.656h4.185l-5.513-15.7Zm-2.424 10.246a7.762 7.762 0 0 1-2.02-.289l2.02-6.869 2.02 6.87a7.762 7.762 0 0 1-2.02.288ZM134.029 3.377h-4.82l-5.484 15.7h4.185l.78-2.655c.923.26 1.904.433 2.943.433 1.01 0 1.992-.144 2.944-.433l.779 2.656h4.185l-5.512-15.7Zm-2.396 10.246a7.764 7.764 0 0 1-2.02-.289l2.02-6.869 2.021 6.87c-.664.173-1.328.288-2.021.288ZM5.682 8.832c-.288-.318-.721-.29-.923.086l-4.704 9.38c-.174.375.086.808.49.808h6.523a.533.533 0 0 0 .49-.317c1.443-2.915.578-7.331-1.876-9.957ZM9.117.289C6.49 4.445 6.664 9.034 8.395 12.497c1.732 3.463 3.06 6.09 3.146 6.292a.533.533 0 0 0 .49.317h6.523c.404 0 .693-.433.49-.808 0 0-8.773-17.547-9.004-17.98-.173-.404-.663-.433-.923-.029Z"
                  style={{
                    "--darkreader-inline-fill": "#3d6bad",
                  }}
                />
              </g>
            </svg>
          </a>
        </div>
     
        {!SearchVisible ? (
  <ul className="flex flex-row gap-10">
    <li>
      <a
        onMouseEnter={handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        href="/products"
      >
        Products
        <i className={hoveredItem === 1 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
      </a>
    </li>
    <li>
      <a
        onMouseEnter={handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        href="/teams"
      >
        Teams
        <i className={hoveredItem === 2 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
      </a>
    </li>
    <li>
      <a
        onMouseEnter={handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        href="/why-atlassian"
      >
        Why Atlassian
        <i className={hoveredItem === 3 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
      </a>
    </li>
    <li>
      <a
        onMouseEnter={handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
        href="/resources"
      >
        Resources
        <i className={hoveredItem === 4 ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
      </a>
    </li>
    <li>
      <a
        onMouseEnter={handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}
        href="/enterprise"
      >
        Enterprise
      </a>
    </li>
  </ul>
) : (
  <div className="w-full flex p-1 bg-gray-100 me-5 rounded-full">
    <input type="text" placeholder="Search Keywords" className=" px-4 flex-1 border-none outline-none bg-transparent text-gray-900 placeholder-gray-500" />
</div>

)}
  

      </div>
      <div className="flex flex-row gap-5 items-center nav-pt-2">
        <button onClick={handleSearchVisible}>
          <i className={`${!SearchVisible ? "ri-search-line" : "ri-close-line"} text-lg text-gray-400`}></i>
        </button>
        {!SearchVisible ? ( <>
        <div className="bg-gray-400 w-[1px] h-[24px]"></div>
        <a href="/sign-in" className="text-blue-600 text-[0.8vw]">
          Sign in
        </a>
        </> ) : ""}
      </div>
      <div className="menu hidden">
      <i className="ri-menu-line text-black text-[2rem]"></i>
      </div>
    </nav>
  );
};

export default Navbar;
