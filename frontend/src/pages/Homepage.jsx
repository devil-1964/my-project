import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight } from 'lucide-react';
import img from '../assets/bg-bot.png';

const Homepage = () => {
  return (
    <div className="homepage flex items-center gap-24 h-full" style={{ backgroundImage: `url(${img})`, backgroundRepeat:"repeat"}}>
      <div 
        className="left flex-1 flex-col items-center justify-center gap-4 text-center px-5" 
        
      >
        <h1 className="text-6xl">
          <span className="text-[#9f9a9f]">
            <Typewriter
              words={['INTELLICHAT']}
              cursor
              loop={0}
              cursorStyle='_'
              typeSpeed={90}
              deleteSpeed={110}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <h3 className="">Your Ultimate Generative AI Solution</h3>
        <button className="p-2 font-semibold mt-2 mx-auto gap-1 flex items-center bg-white text-black rounded-lg">
          Getting Started <ArrowRight />
        </button>
      </div>
      <div className="right flex-1"></div>
    </div>
  );
}

export default Homepage;
