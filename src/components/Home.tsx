import Hero from './Hero.tsx';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <main>
        <Hero />
        <h1 className="hero-text">Dan Myers</h1>
        <hr className="separator-bar" />
      </main>
    </>
  );
}

export default Home;
