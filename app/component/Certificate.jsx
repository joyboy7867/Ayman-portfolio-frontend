import { cn } from "../../lib/utils";
import Marquee from "../component/magicui/marquee";
import axios from "axios";
import { useEffect, useState } from "react";







const ReviewCard = ({
  img,
  name,
  link,
}) => {
  return (
    <figure
    
      className={cn(
        "relative w-1/3 cursor-pointer overflow-hidden rounded-xl border m-0 p-0",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
        <h1 className="ml-28 p-4 font-extrabold">{name}</h1>
      <div className="flex flex-row items-center  w-1/3 m-0 p-0">
        <img className="w-full h-full" src={img} />

      </div>
      
      
    </figure>
  );
};

const MarqueeDemo = () => {
    
        const [certificate, setcertificate] = useState([]);
        const getcertificate = async () => {
          await axios
            .get("https://ayman-portfolio-backend.onrender.com/api/aymanpersonal/certificate")
            .then(async (found) => {
             
              setcertificate(await found.data);
             
            });
        }
        useEffect(() => {
            getcertificate();
        }, []);
  return (
    <section className="text-gray-600 body-font">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Certificate
            </h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
      {certificate.map(ele=>{
        return(
          <div key={ele.Name} className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-600 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-56 md:h-36 w-full object-fit object-center" src={ele.img}alt="blog"/>
            <div className="p-6">
              <h2 className="tracking-widest text-xs font-bold title-font text-gray-600 mb-1">{ele.Name}</h2>
              
              <div className="flex items-center flex-wrap ">
                <a href={ele.link} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">View 
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                
               
              </div>
            </div>
          </div>
        </div>
        )
      })}
      
    
    </div>
  </div>
</section>
    
   
  );
};

export default MarqueeDemo;
