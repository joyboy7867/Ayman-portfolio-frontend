import axios from "axios";
import { useEffect, useState } from "react";
const Skill = () => {
  const [skill, setskill] = useState([]);
  const getskill = async () => {
    await axios
      .get("https://ayman-portfolio-backend.onrender.com/api/aymanpersonal/skill")
      .then(async (found) => {
        
        setskill(await found.data);
        
      });
  };
  useEffect(() => {
    getskill();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Expertise In...
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skill.map((ele) => {
              return (
                <div key={ele.Name} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span className="title-font font-medium">{ele.Name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;
