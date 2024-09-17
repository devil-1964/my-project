import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight } from 'lucide-react';
import img from '../assets/bg-bot.png';
import bot from '../assets/bot.png';
import dot from '../assets/bg-dot.png';
import { Link } from 'react-router-dom';

const Homepage = () => {



  return (
    <div
      className="homepage flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-24 h-full p-4"
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="left flex-1 flex flex-col items-center justify-center gap-2 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl">
          <span className="text-[#9f9a9f]">
            <Typewriter
              words={['INTELLICHAT']}
              cursor
              loop={0}
              cursorStyle='_'
              typeSpeed={170}
              deleteSpeed={190}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <h3 className="text-lg sm:text-xl font-semibold lg:text-2xl">
          Your Ultimate Generative AI Solution
        </h3>
        <h2 className='font-medium text-sm bg-gradient-to-r bg-clip-text text-transparent from-gray-400 via-white to-zinc-400'>Discover the future of AI with our advanced generative models. Our systems deliver personalized results based on your input, streamlining your creative and operational goals</h2>
        <Link to="/dashboard">
          <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold mt-2 mx-auto gap-1 flex items-center bg-white text-black rounded-lg hover:bg-zinc-100 border-2 border-transparent hover:border-black">
            Getting Started <ArrowRight />
          </button>
        </Link>
        {/* Test backend on */}

      </div>
      <div className="right flex-1 flex items-center justify-center h-full">
        <div
          className='imgCont flex rounded-lg items-center justify-center bg-[#3e3a3e] m-4 border-dashed border-4 border-[#9f9a9f]'
          style={{
            backgroundImage: `url(${dot})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
          }}
        >
          <img src={bot} alt="BotPNG" className='w-48 sm:w-60 lg:w-72 sua' />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
