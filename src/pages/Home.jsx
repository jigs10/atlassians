import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import CardVid from "../components/CardVid";
import NumberCounter from "../components/NumberCounter";
import NavCard from "../components/NavCard";
import BtmNavCard from "../components/BtmNavCard";
import Footer from "../components/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = (props) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const counterRef = useRef(null);

  const videos = [
    "https://wac-cdn.atlassian.com/misc-assets/webp-images/CSD-10721_WAC_Hero_C_LowBR.mp4",
  ];

  const nextVideo = () => {
    setCurrentVideoIndex((currentVideoIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (currentVideoIndex - 1 + videos.length) % videos.length
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounter(true);
          } else {
            setStartCounter(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      onEnter: () => {
        element.classList.add("animate");
      },
      onLeave: () => {
        element.classList.remove("animate");
      },
      onEnterBack: () => {
        element.classList.add("animate");
      },
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container px-[2vw]">
        <div className="hm-pt-1 px-[10vw] mb-[15vh]" ref={sectionRef}>
          <h1>
            The new Jira: <br />
            from{" "}
            <span>
              teams{" "}
              <div className="yellow-underline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={306}
                  height={42}
                  viewBox="0 0 420 60" // Add the viewBox attribute
                  {...props}
                >
                  <path
                    fill="#FFA900"
                    d="M.315 22.367c52.631-7.455 91.51 11.3 144.651-4.242 2.494 6.61 8.926 14.88 18.531 14.984-8.011-.137-20.856-17.391-7.961-5.84 7.583 8.8 40.636-2.033 15.306 5.675 17.492-1.656 33.514-12.41 45.321-21.974 19.648-13.628 4.765 12.704 19.015 25.906 20.192 18.348 81.285-29.58 68.956-29.588-7.838 6.007-18.365 9.758-22.711 16.41-76.666 39.478-21.431-33.425-67.112-21.144-74.567 50.7-36.918 4.862-80.739 8.068C108.06 28.995-.614.464.294 22.367h.02Z"
                    style={{
                      "--darkreader-inline-fill": "#cc8700",
                    }}
                  />
                </svg>
              </div>
            </span>{" "}
            to dreams
          </h1>
          <button className="get-started-btn">Get Started</button>
          <div className="video-carousel">
            <button className="carousel-btn rounded-full" onClick={prevVideo}>
              <i className="ri-arrow-left-s-line"></i>
            </button>
            <div className="p-5 vid-div absolute"></div>
            <video
              muted
              autoPlay
              loop
              className="carousel-video border-gray-200 rounded-lg border-2"
            >
              <source src={videos[currentVideoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <button className="carousel-btn rounded-full" onClick={nextVideo}>
              <i className="ri-arrow-right-s-line"></i>
            </button>
          </div>
        </div>
        <div className="hm-pt-2 px-[10vw]">
          <h1>Teamwork solutions for high-performing teams</h1>
          <CardVid />
        </div>

        <div className="hm-pt-3 my-[10vh] gap-[5vh]  flex-col items-center justify-center px-[10vw] flex">
          <div className="pt-3-div"></div>
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/atlassian-intelligence.svg"
              alt=""
            />
            <h4 className="font-semibold text-white">Atlassian Intelligence</h4>
          </div>
          <h1 className="text-[2.4rem] font-medium text-white">
            Transform teamwork with human-AI collaboration
          </h1>

          <video
            muted
            autoPlay
            loop
            className="carousel-video border-gray-200 rounded-lg border-2"
          >
            <source
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/CSD-10721_WAC_%20AI_LowBR.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <button className="bg-transparent px-4 py-2 border-2 border-gray-600 rounded-full font-medium">
            Explore Atlassian Intelligence
          </button>
        </div>

        <div
          className="hm-pt-4  justify-between my-[30vh] gap-9 py-[10vh] px-[8vw] bg-gray-200 flex"
          ref={counterRef}
        >
          <div className="pt-4-1 flex text-start justify-between items-start gap-4 ">
            <div>
              <h2 className="text-[2.5rem] font-bold">
                Teams across the globe run on Atlassian
              </h2>
              {startCounter && (
                <NumberCounter
                  start={0}
                  end={300000}
                  duration={1000}
                  className="text-[4rem] font-bold text-blue-600"
                  symbol={"+"}
                />
              )}
              <p>companies power team collaboration with Atlassian</p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-center gap-4">
                <div className="w-[0.2vw] h-[16vh] bg-black"></div>
                <div>
                  {startCounter && (
                    <NumberCounter
                      start={0}
                      end={200}
                      duration={1000}
                      className="text-[3rem] font-bold text-blue-600"
                      symbol={"+"}
                    />
                  )}
                  <p>countries have companies that use Atlassian</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-[0.2vw] h-[16vh] bg-black"></div>
                <div>
                  {startCounter && (
                    <NumberCounter
                      start={0}
                      end={80}
                      duration={1000}
                      className="text-[3rem] font-bold text-blue-600"
                      symbol={"%"}
                    />
                  )}
                  <p>of Fortune 500 companies use Atlassian products</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4-2 flex items-start ">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/earth%20(1).webp"
              width={350}
              alt=""
            />
          </div>
        </div>

        <div className="hm-pt-5  px-[10vw]">
          <h1 className="text-[2.5rem] font-bold">
            Empower everyone, on every team
          </h1>
          <NavCard />
        </div>
        <div className="hm-pt-6  px-[4vw]">
          <div className="flex flex-col items-center gap-3 my-[10vh]">
            <h1 className="text-[2.5rem] font-bold">For teams of all sizes</h1>
            <h5>
              Everyone from start-ups to large enterprises prefer Atlassian
            </h5>
            <a href="" className="text-blue-600">
              Explore all customers stories{" "}
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <div className="pt-6-2 bg-black py-[5vh] my-[6vh]">
            <BtmNavCard />
          </div>
          <div className="mb-[8vh] pt-6-3">
            <div className="flex justify-center  items-center gap-[10vw] py-10 bg-gray-200 rounded-xl">
              <div className="flex flex-col gap-4">
                <img
                  src="https://wac-cdn.atlassian.com/misc-assets/webp-images/team-24_attribution-logo-above-left_full-color_RGB.svg"
                  alt=""
                  className="w-[60%]"
                />
                <p className="text-start w-[95%]">
                  That's a wrap! Catch up on all the highlights and more.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-start">
                <h4>
                  <i className="ri-calendar-line"></i> April 30 - May 2, 2024
                </h4>
                <h4>
                  <i className="ri-map-pin-fill"></i> Las Vegas and digitally
                </h4>
                <button className="bg-transparent px-4 py-2 border-2 border-gray-600 rounded-full font-medium">
                  Watch on demand
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hm-pt-7  flex flex-col gap-[20vh] mb-[5vh] mt-[20vh] px-[4vw]">
          {/* <div className="flex item"> <div className="pt-7-imgs-1">
            <img className="img1" src="https://wac-cdn.atlassian.com/misc-assets/webp-images/big-star.svg" width={60} alt="" />
            <img className="img2" src="https://wac-cdn.atlassian.com/misc-assets/webp-images/sm-star.svg" width={30} alt="" />
          </div> */}
          <div className="pt-7-1 flex flex-col items-center justify-center gap-5">
            <h1 className="text-[3rem] w-[42%] leading-tight">
              Help us shape{" "}
              <span className="font-bold">the future of teamwork</span>
            </h1>
            <p className="w-[30%]">
              At Atlassian, we believe the impossible is possible - together.
              Join us today to help us inspire teamwork anywhere and everywhere,
              worldwide.
            </p>
            <button className="bg-transparent px-6 py-2 text-[1.3rem] border-2 border-gray-600 rounded-full font-medium">
              Share your story
            </button>
          </div>
          {/* <div className="pt-7-imgs-2"><img className="img3" src="https://wac-cdn.atlassian.com/misc-assets/webp-images/circle-checkmark.svg" width={70} alt="" /></div> */}
          
          {/* </div> */}
         
          <div className="pt-7-2 flex flex-col items-center justify-center gap-5 bg-blue-600 py-[15vh] text-white">
            <h1 className="text-[2rem] font-bold">
              Unleash the power of teamwork
            </h1>
            <p>Join millions teaming up on their best work</p>
            <button className="bg-transparent px-8 py-2 border-2  text-[1.3rem] rounded-full font-medium">
              Get started for free
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
