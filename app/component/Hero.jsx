import IconCloud from "../component/magicui/icon-cloud";
import TypingAnimation from "../component/magicui/typing-animation";
import Ripple from "../component/magicui/ripple";
const slugs = [
    "tableau",
    "javascript",
    "powerbi",
    "xlsheet",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "googlesheet",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
const Hero = () => {
    return<div className="z-10">
         <Ripple
          numSquares={30}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}/>
         
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 lg:py-0 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font lg:text-6xl text-5xl mb-4 lg:font-extrabold font-extrabold  text-black">Greetings!  <br className="hidden lg:inline-block"/>    I'm Sayed Ayman 
        <br className="hidden lg:inline-block"/>
      </h1>
      <span className="text-3xl pb-2"> <TypingAnimation
      className="text-4xl font-semibold text-black dark:text-black"
      text="A Data Analyst And Designer"
    /></span>
      <p className=" leading-relaxed"> A data enthusiast and analytical mind at heart. With a passion for uncovering patterns and turning raw numbers into actionable insights,</p>
      
    </div>
    
    <div className="lg:max-w-lg lg:w-full m-0 md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded"/><IconCloud iconSlugs={slugs} />
    </div>
  </div>
 
 
</section>
    
    </div>
}



export default Hero;