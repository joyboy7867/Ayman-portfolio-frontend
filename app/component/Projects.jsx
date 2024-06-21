import axios from "axios";
import { useEffect, useState } from "react";
const Projects = () => {
    const [projects, setprojects] = useState([]);
    const getprojects = async () => {
        await axios
          .get("https://ayman-portfolio-backend.onrender.com/api/aymanpersonal/project")
          .then(async (found) => {
            
            setprojects(await found.data);
            
          });
      };
      useEffect(() => {
        getprojects();
      }, []);
    
    return <div className="mt-5 text-center ">
        <button className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Projects</button>
        <div className="lg:flex flex-wrap gap-10 items-center justify-center text-center pt-4  bg-gray-400 mb-24">
        {projects.map(ele=>{
            return(
                <div key={ele.Name} className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 rounded-lg mt-4 mb-4">
                <a href={ele.link} className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={ele.img}/>
                </a>
                <div className="mt-4">
                
                <h2 className="text-gray-900 title-font text-lg font-medium">{ele.Name}</h2>
                
                </div>
                </div> 
            )
        })}
       
       
            
            
            
            

           
          

        </div>
    </div>;
}



export default Projects;