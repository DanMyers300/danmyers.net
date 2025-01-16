import React, { useRef, useEffect } from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  const navToggleRef = useRef<HTMLButtonElement | null>(null);
  const navWrapperRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const navToggle = navToggleRef.current;
    const navWrapper = navWrapperRef.current;

    if (navToggle && navWrapper) {
      const handleClick = () => {
        if (navWrapper.classList.contains('active')) {
          navToggle.setAttribute('aria-expanded', 'false');
          navWrapper.classList.remove('active');
        } else {
          navWrapper.classList.add('active');
          navToggle.setAttribute('aria-expanded', 'true');
        }
      };

      navToggle.addEventListener('click', handleClick);

      return () => {
        navToggle.removeEventListener('click', handleClick);
      };
    }
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
              <a href="/">Home</a>
            </li>
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
