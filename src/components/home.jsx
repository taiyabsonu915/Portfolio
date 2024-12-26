import React from 'react'
import { useRef ,useEffect} from "react";
import { ReactTyped,Typed } from "react-typed";
import { useState } from "react";

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";

const Home = () => {

  const videoRef = useRef(null); // Video element ka reference
  const [isMuted, setIsMuted] = useState(true); // Initial state for sound

  useEffect(() => {
    // Video automatically play hone ke liye ensure karte hain
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []); // Empty dependency array to run only once on load

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Sound toggle karte hain
      setIsMuted(!isMuted); // State ko update karte hain
    }
  }

  
  return (
    <>
    <div
    name="Home"
     className="w-[90px]max-w-screen-2xl container mx-auto px-4 md:px-18 my-20">
      <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 ml-12 mt-24 space-y-2 text-xl order-2 md:order-1"><span className="text-center">
      <ReactTyped
        className="text-green-700 font-bold text-4xl"
          strings={["WELCOME !!! IN MY FEED"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </span>
      <div className="flex space-x-1 text-2xl md:text-4xl">
        <h1>hello I am  <ReactTyped
        className="text-red-700 font-bold"
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        /> </h1>
       
      </div>
      <p className="text-sm md:text-md text-justify text-1.5xl">"Hello, I'm a passionate MERN, Full-stack developer with a knack for creating dynamic and user-friendly web applications. With expertise in technologies like React, Node.js, MongoDB, and Tailwind CSS, I strive to deliver seamless and efficient solutions. This portfolio showcases my journey, projects, and skills as a software engineer. Dive into my feed to explore my work and feel free to connect with me for collaboration or opportunities." </p>
      <br />

      {/* social media icon */}
      <div className="flex flex-col items-center md:flex-row justify-between space-y-2 md:space-y-0 ">
      <div className="space-y-3">
        <h1 className="font-bold ml-8">Availble on </h1>
        <div className="ml-[5px]">
          <ul  className="flex space-x-5">
          <li> 
            <a href="https://www.instagram.com/taiyabli321"
            target="_blank">
            <FaInstagramSquare className="text-2xl cursor-pointer"></FaInstagramSquare>
            </a>
            </li>
          <li>
          <a href="https://www.linkedin.com/mynetwork/grow/?skipRedirect=true"
            target="_blank">
            < FaLinkedin className="text-2xl cursor-pointer"></FaLinkedin>
            </a>
          
          </li>
          <li>
          <a href="https://www.youtube.com/@TaiyabSonu-v1m"
            target="_blank">
            < FaYoutube className="text-2xl cursor-pointer"></FaYoutube> 
            </a>
          </li>
          <li>
          <a href="https://www.github.com/taiyabsonu915"
            target="_blank">
             <FaGithub className="text-2xl cursor-pointer" ></FaGithub> 
            </a>
          </li>
          </ul>
          
        </div>
      </div>

      {/* sill */}
      <div className=" ">
       <h1 className="font-bold mt-2 ml-2 md:ml-7"> Currently working on</h1>
       <div className="flex space-x-5 mt-[10px] ml-7">
        <SiMongodb className="text-xl md:text-3xl hover:scale-110" ></SiMongodb>
        <SiExpress className="text-xl md:text-3xl hover:scale-110"></SiExpress>
        <RiReactjsFill className="text-xl md:text-3xl hover:scale-110"></RiReactjsFill>
       < FaNodeJs  className="text-xl md:text-3xl hover:scale-110"></FaNodeJs >
       </div>
      
      </div>
      </div>
     

      
         </div>
      <div className="md:w-1/2 md:ml-40 md:mt-15 order-1 mt-2">
       {/* <img className="rounded-full md:w-[450px] md:h-[450px] " src="sonu.png" alt="" /> */}
       <video
       className="rounded-full md:w-[443px] md:h-[250px] "
        ref={videoRef}
        width="600"
        height="340"
        autoPlay
        loop
        muted={isMuted} // Video muted shuru hoti hai
        style={{ border: "1px solid black" }}
      >
        <source src="vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br />
      <button
      className=" hover:bg-pink-800 rounded-full bg-pink-200 ml-[120px] md:ml-[160px]" 
        onClick={toggleSound}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        {isMuted ? "Sound On" : "Sound Off"}
      </button>
      {/* <button className=" hover:bg-pink-800 rounded-full bg-pink-200 ml-[120px] md:ml-[200px]" onClick={playWithSound} style={{ marginTop: "10px", padding: "10px" }}>
        Play with Sound
      </button> */}
      </div>

      </div>
      
    </div>
    <hr className=""/>
    </>
  
  )
}

export default Home;