import Hero from './components/Hero';
import Stars from './components/Stars';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function App() {

  return (
    <>
      <main className="bg-black absolute w-screen h-screen position-relative">

        <Stars/>

        {/* Hero Container */}
        <div className="flex flex-col mt-15 items-center justify-center">
          <Hero />
          <p className="text-white mt-5 text-2xl bg-black font-bold"> Dan Myers </p>
          <p className="text-white mt-2 bg-black"> Software Engineer </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mt-5">
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
      </main>
    </>
  );
}

export default App
