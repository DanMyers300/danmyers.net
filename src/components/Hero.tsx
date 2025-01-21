import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

function Hero() {
  const [isSmallHeight, setIsSmallHeight] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallHeight(window.innerHeight < 620);
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!isSmallHeight && (
        <img src="/Hero.png" alt="Hero Image" className="hero-image" />
      )}
    </>
  );
}

export default Hero;
