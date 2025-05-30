import Hero from './Hero.tsx';
import Projects from './Projects.tsx'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Contact from './Contact.tsx';
import Resume from './Resume.tsx';

function Home() {
  return (
    <main className="container mx-auto mt-5 px-4">
      <Hero />
      <h1 className="text-2xl font-bold text-white text-center mt-8">Dan Myers</h1>
      <p className="text-lg text-center text-white mt-4">Software Engineer</p>
      
      <div className="flex justify-center space-x-8 mt-8">
        <a
          href="https://www.linkedin.com/in/danpmyers/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-600 transition-colors"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a
          href="https://git.danmyers.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-600 transition-colors"
        >
          <FaGithub className="text-4xl" />
        </a>
      </div>
      <div className="w-4/5 h-1 bg-gray-200 mb-0 my-8 mx-auto"></div>
      <Projects />
      <div className="w-4/5 h-1 bg-gray-200 mb-0 mt-20 my-8 mx-auto"></div>
      <div className="m-5"> </div>
      <Resume />
      <div className="w-4/5 h-1 bg-gray-200 mb-0 mx-auto"></div>
      <Contact />
    </main>
  );
}

export default Home;
