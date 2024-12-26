import React from 'react'

import html from "../../public/html.png"
import css from "../../public/css.jpg"
import java from "../../public/java.png"
import javascript from "../../public/javascript.png"
import mongodb from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import node from "../../public/node.png"
import reactjs from "../../public/reactjs.png"
import c from  "../../public/c.png"
import cpp from  "../../public/cpp.png"
import cs from  "../../public/cs.png"
import sql from  "../../public/sql.png"
import api from  "../../public/api.png"
import cmd from  "../../public/cmd.png"
function Experience() {
  const cardItem=[
    {
      id:1,
      logo:html,
      name:"html"
    },
    {
      id:2,
      logo:css,
      name:"css"
    },
    {
      id:4,
      logo:javascript,
      name:"javascript"
    },
    {
      id:3,
      logo:java,
      name:"java"
    },
    
    {
      id:5,
      logo:mongodb,
      name:"MongoDB"
    },
    {
      id:6,
      logo:express,
      name:"express"
    },
    {
      id:6,
      logo:reactjs,
      name:"reactjs"
    },
     {
      id:6,
      logo:node,
      name:"nodeJS"
    },
    {
      id:7,
      logo:c,
      name:"c language"
    },
    {
      id:8,
      logo:cpp ,
      name:"c++"
    },
    {
      id:9,
      logo:cs,
      name:"c#"
    },
    {
      id:10,
      logo: sql,
      name:"SQL"
    },
    {
      id:11,
      logo:api,
      name:""
    },
    {
      id:12,
      logo:cmd,
      name:"CMD"
    },


  ]
  return (
    <div 
    name="Skills"
    className="max-w-screen-2xl container mx-auto px-4 md:px-18 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">
          SKILLS:-
        </h1>
        <span className="  font-semibold">i've many SKILLS which have  below</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-5">
          {
            cardItem.map(({id,logo,name})=>(
              <div className="flex flex-col items-center justify-center border-[2px] rounded-full  md:w-[200px] md:h-[200px] p-1  hover-scale-110 duration-300" key={id}>
                <img className="w-[150px]  p-1 rounded-full" src={logo} alt="" />
                <div>
                  <div className="">{name}</div>
                </div>
              </div>
            ))
          }

        </div>
      </div>
     
    </div>
  )
}

export default Experience;
