import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import CardVid from "../components/CardVid";
import NumberCounter from "../components/NumberCounter";
import NavCard from "../components/NavCard";
import BtmNavCard from "../components/BtmNavCard";

const Home = () => {
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

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="hm-pt-1">
          <h1>
            The new Jira: <br />
            from <span>teams</span> to dreams
          </h1>
          <button className="get-started-btn">Get Started</button>
          <div className="video-carousel">
            <button className="carousel-btn rounded-full" onClick={prevVideo}>
              <i className="ri-arrow-left-s-line"></i>
            </button>
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
        <div className="hm-pt-2">
          <h1>Teamwork solutions for high-performing teams</h1>
          <CardVid />
        </div>

        <div className="hm-pt-3 my-[10vh] gap-[5vh] flex flex-col items-center justify-center">
          <div className="flex gap-2 justify-center items-center">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/atlassian-intelligence.svg"
              alt=""
            />
            <h4 className="font-semibold">Atlassian Intelligence</h4>
          </div>
          <h1 className="text-[2.4rem] font-medium">
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
          className="hm-pt-4 flex justify-between my-[30vh] gap-9"
          ref={counterRef}
        >
          <div className="pt-4-1 flex text-start justify-between items-start gap-4">
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
          <div className="pt-4-2 flex items-start">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/earth%20(1).webp"
              width={350}
              alt=""
            />
          </div>
        </div>

        <div className="hm-pt-5 ">
<h1 className="text-[2.5rem] font-bold">Empower everyone, on every team</h1>
<NavCard/>
        </div>
<div className="hm-pt-6">
        <div className="flex flex-col items-center gap-3 my-[10vh]">
          <h1 className="text-[2.5rem] font-bold">For teams of all sizes</h1>
          <h5>Everyone from start-ups to large enterprises prefer Atlassian</h5>
          <a href="" className="text-blue-600">Explore all customers stories <i class="ri-arrow-right-line"></i></a>
        </div>
        <div className="pt-6-2">
          <BtmNavCard/>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;
