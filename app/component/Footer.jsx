import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
    return <div className=" bg-gray-200 h-16 p-0 m-0 text-center items-center relative lg:mt-16 flex justify-center gap-10 text-3xl">
       <Link href={"https://www.instagram.com/aymansayed_.44/"}><div><FaInstagram /></div></Link> 
       <Link href={"https://www.linkedin.com/in/ayman-sayed44ah/"}> <div><FaLinkedin /></div></Link> 
       <Link href={"/Contact"}>  <div><IoMail /></div></Link> 
       
    </div>;
}


export default Footer;