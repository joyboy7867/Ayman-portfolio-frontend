"use client"
import Link from "next/link";
import { Dock, DockIcon } from "../component/magicui/dock";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { HiIdentification } from "react-icons/hi2";
import axios from "axios";
import { useEffect, useState } from "react";

import { IoIosContact } from "react-icons/io";
import { IoCall } from "react-icons/io5";
const Navbar = () => {
  const [resume, setresume] = useState("");
  const getresume = async () => {
   let response=await axios
      .get("https://ayman-portfolio-backend.onrender.com/api/aymanpersonal/resume")
      
      setresume(response.data)
     
  };
  useEffect(() => {
    getresume();
  }, []);
    return <div className="text-black">
        
      
      <Dock className="lg:w-4/12 ">
        <DockIcon className="lg:mr-8 lg:ml-24 ml-4">
        
        <Link href={'/'}><AiFillHome className="h-8 w-8" /></Link>
        </DockIcon>
        <DockIcon className="lg:mr-10 ml-4">
        <Link href={"About"}><IoIosContact className="h-8 w-8" /></Link>
        </DockIcon>
        <DockIcon className="lg:mr-10 ml-4">
        <Link href={'Contact'}><IoCall className="h-8 w-8" /></Link>
        </DockIcon>
        <DockIcon className="lg:mr-10 ml-4">
        <Link href={resume}><HiIdentification  className="h-8 w-8" /></Link>
        </DockIcon>
       
      </Dock>
    
    </div>;
}



export default Navbar;