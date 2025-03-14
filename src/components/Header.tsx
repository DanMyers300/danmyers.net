import { Link } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import '../styles/Header.css';
import resume from '/src/assets/Resume.pdf';

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

  const handleMenuClick = (title: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (title === 'resume' && isMobile) {
      e.preventDefault();
      window.open(resume, '_blank', 'noopener,noreferrer');
    }
  };

  const menuItems = [
    //{ title: 'about', href: '/about' },
    { title: 'contact', href: '/contact' },
    { title: 'resume', href: isMobile ? '#' : '/resume' }
  ];

  const listMenuItems = menuItems.map((item, index) => (
    <li key={index} className="navItem">
      <Link
        to={item.href}
        onClick={(e) => handleMenuClick(item.title, e)}
      >
        {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
      </Link>
    </li>
  ));

  return (
    <header className="siteHeader">
      <div className="wrapper siteHeaderWrapper">
        <Link to="/" className="brand">
          Dan
        </Link>
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
            {listMenuItems}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

