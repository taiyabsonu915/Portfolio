import React from 'react'


import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <>
      <hr /></>
     <footer py-12 >
     <div className="max-w-screen-2xl container mx-auto px-4 md:px-18 mt-10">
      <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-4">
        <FaInstagramSquare size={24}></FaInstagramSquare>
        <FaLinkedin size={24}></FaLinkedin> 
        <FaYoutube size={24}></FaYoutube>
        <FaGithub size={24} ></FaGithub>
        </div>
        <div className="mt-8 border-t border-gray--700 pt-8 flex flex-col items-center">
          <p className="text-sm">&copy;2024 your company All rights reserved 
          </p>
          <p className="text-sm  mb-5">supportive partner , I am</p>
         

        </div>
      </div>

      </div>
     </footer>
    </div>
  )
}

export default Footer
