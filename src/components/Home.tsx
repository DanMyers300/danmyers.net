import Hero from './Hero.tsx';
import '../styles/Home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
  return (
    <>
      <main>
        <Hero />
        <h1 className="hero-text">Dan Myers</h1>
        <p className="title-blurb">Software Engineer</p>
        <hr className="separator-bar" />
        
        <div className="social-links">
          <a href="https://www.linkedin.com/in/danpmyers/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://git.danmyers.net" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
      </main>
    </>
  );
}

export default Home;
