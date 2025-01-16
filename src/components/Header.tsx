import React, { useRef, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const navToggleRef = useRef<HTMLButtonElement | null>(null);
  const navWrapperRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const navToggle = navToggleRef.current;
    const navWrapper = navWrapperRef.current;

    const handleClick = () => {
      const isActive = navWrapper?.classList.contains('active');
      navToggle?.setAttribute('aria-expanded', String(!isActive));
      navWrapper?.classList.toggle('active');
    };

    navToggle?.addEventListener('click', handleClick);

    return () => {
      navToggle?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header className="siteHeader">
      <div className="wrapper siteHeaderWrapper">
        <a href="/" className="brand">
          Dan
        </a>
        <nav className="nav">
          <button
            ref={navToggleRef}
            className="navToggle"
            aria-expanded="false"
            type="button"
          >
            <span className="hamburger"></span>
          </button>
          <ul ref={navWrapperRef} className="navWrapper">
            <li className="navItem">
              <a href="/about">About</a>
            </li>
            <li className="navItem">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
