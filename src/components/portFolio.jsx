import React from 'react'

import java from "../../public/java.png"
import python from "../../public/python.webp"
import mongoDB from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import reactjs from "../../public/reactjs.png"
import nodejs from "../../public/node.png"

import Analogpic from "../../public/Analogpic.png"
import Rockpic from "../../public/Rockpic.png"
import tic_pic from "../../public/tic_pic.png"
import bookstore1 from "../../public/bookstore1.png"
function PortFolio() {
  const cardItem=[
    {
      id:4,
      logo:bookstore1,
      name:"bookstoreAPP",
      link:"https://taiyab-frontend.onrender.com/"
    },
    {
      id:1,
      logo:Analogpic,
      name:"Analog(घड़ी) ",
      link:"https://taiyabsonu915.github.io/Analog/"
    },
    {
      id:2,
      logo:Rockpic,
      name:"Rock_scissor_paper--game",
      link:"https://taiyabsonu915.github.io/Tic_tac_toi_game/"
    },
    {
      id:3,
      logo:tic_pic,
      name:"tic_tac_toe--game",
      link:"https://taiyabsonu915.github.io/Rock-paper-scissor/"
    },
   
  ]
  return (
    <div
    name="Portfolio"
    className="max-w-screen-2xl container mx-auto px-4 md:px-18 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">
          Portfolio:-
        </h1>
        <span className="underline  font-semibold">featured Projects </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {
            cardItem.map(({id,logo,name,link})=>(
              <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover-scale-110 duration-300" key={id}>
                <img className="w-full h-[170px] p-1  border-[2px]" src={logo} alt="" />
                <div>
                  <div className="font-bold text-xl mb-2 px-2">{name}</div>
                  <p className="px-2 text-gray-700"></p>
                </div>
                <div className="px-6 py-4 space-x-3 justify-center md:ml-[70px] ml-[105px]">
                <a href={link}
                   target="_blank">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    Go to site
                    </button>
                  </a>
                  {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded ">Source code</button> */}
                </div>
              </div>
            ))
          }

        </div>
      </div>
     
    </div>
  )
}

export default PortFolio
