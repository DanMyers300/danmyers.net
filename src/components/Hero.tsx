import { useEffect, useState } from 'react';
import hero from '/hero.png';

function Hero() {
  const [isSmallHeight, setIsSmallHeight] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallHeight(window.innerHeight < 620);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!isSmallHeight && (
        <img
          src={hero}
          alt="Hero Image"
          style={{
            width: 150,
            height: 150,
            borderRadius: 50,
            border: '5px solid #fff',
            objectFit: 'cover',
            objectPosition: 'center -50%',
            display: 'block',
            backgroundColor: 'white',
          }}
        />
      )}
    </>
  );
}

export default Hero;
