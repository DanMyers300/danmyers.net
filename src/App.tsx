import Hero from './components/Hero';
import Stars from './components/Stars';
import Contact from './components/Contact'
import Resume from './components/Resume';
import Projects from './components/Projects';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {
  return (
    <>
      <main className="bg-black absolute w-screen min-h-screen">
        {/* Stars Container */}
        <div className="absolute inset-0 z-0">
          <Stars />
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          {/* Hero Container */}
          <div className="relative flex flex-col items-center justify-center pt-20">
            <Hero />
            <p className="text-white mt-5 text-2xl bg-black font-bold">
              Dan Myers
            </p>
            <p className="text-white mt-2 bg-black"> Software Engineer </p>
          </div>

          {/* Social Icons */}
          <div className="relative flex justify-center space-x-8 mt-5">
            <a
              href="https://www.linkedin.com/in/danpmyers/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="https://git.danmyers.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300"
            >
              <FaGithub className="text-4xl" />
            </a>
          </div>

          <div className="w-4/5 h-1 bg-gray-200 mb-0 my-8 mx-auto relative z-10"></div>
          <Projects />
          <div className="w-4/5 h-1 bg-gray-200 mb-0 my-8 mx-auto relative z-10"></div>
          <Resume />
          <div className="w-4/5 h-1 bg-gray-200 mb-0 my-8 mx-auto relative z-10"></div>
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
