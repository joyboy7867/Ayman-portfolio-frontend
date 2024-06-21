import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Ripple from "./component/magicui/ripple";
export default function Home() {
  return (
       <> 
       <div>
       <Ripple
          numSquares={30}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={1}
        className="h-full"/>
      
       <Hero/>
     </div>
     </>
   
  );
}
