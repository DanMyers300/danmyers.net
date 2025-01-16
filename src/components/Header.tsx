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

  const menuItems = [
    { title: 'about', href: '/about' },
    { title: 'contact', href: '/contact' }
  ];

  const listMenuItems = menuItems.map((item, index) => (
    <li key={index} className="navItem">
      <a href={item.href}>
        {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
      </a>
    </li>
  ));

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
            {listMenuItems}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
