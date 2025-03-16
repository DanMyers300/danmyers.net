import { Link } from 'react-router-dom';
import React, { useRef, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import resume from '/src/assets/Resume.pdf';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navToggleRef = useRef<HTMLButtonElement | null>(null);
  const navWrapperRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const navToggle = navToggleRef.current;
    
    const handleClick = () => {
      setIsNavOpen(!isNavOpen);
    };

    navToggle?.addEventListener('click', handleClick);

    return () => {
      navToggle?.removeEventListener('click', handleClick);
    };
  }, [isNavOpen]);

  const handleMenuClick = (title: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (title === 'resume' && isMobile) {
      e.preventDefault();
      window.open(resume, '_blank', 'noopener,noreferrer');
    }
  };

  const menuItems = [
    { title: 'projects', href: '/projects' },
    { title: 'contact', href: '/contact' },
    { title: 'resume', href: isMobile ? '#' : '/resume' }
  ];

  const listMenuItems = menuItems.map((item, index) => (
    <li key={index} className="sm:inline-block">
      <Link
        to={item.href}
        onClick={(e) => handleMenuClick(item.title, e)}
        className="block py-6 px-4 text-gray-300 no-underline hover:text-white"
      >
        {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
      </Link>
    </li>
  ));

  return (
    <header className="relative bg-[#162b3b] rounded-lg">
      <div className="max-w-7xl px-4 mx-auto sm:flex sm:justify-between sm:items-center">
        <Link to="/" className="font-bold text-xl text-gray-300 no-underline">
          Dan
        </Link>
        <nav>
          <button
            ref={navToggleRef}
            className="block sm:hidden absolute right-4 top-4 bg-transparent border-0 cursor-pointer p-2.5"
            aria-expanded={isNavOpen}
            type="button"
          >
            <span className="sr-only">Toggle navigation</span>
            <div className={`w-6 h-0.5 bg-white relative transition-colors duration-300 ${isNavOpen ? 'bg-transparent' : ''}`}>
              <span className={`absolute w-6 h-0.5 bg-white left-0 transition-transform duration-300 ${isNavOpen ? 'translate-y-0 rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`absolute w-6 h-0.5 bg-white left-0 transition-transform duration-300 ${isNavOpen ? 'translate-y-0 -rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </button>
          <ul 
            ref={navWrapperRef} 
            className={`flex gap-5 list-none ${
              isNavOpen 
                ? 'flex-col absolute top-full right-0 left-0 z-10 bg-[#162b3b] mt-[15px] opacity-100 rounded-lg visible' 
                : 'flex-col absolute top-full right-0 left-0 z-10 bg-[#162b3b] -translate-y-5 opacity-0 invisible'
            } sm:flex sm:flex-row sm:static sm:visible sm:opacity-100 sm:translate-y-0`}
          >
            {listMenuItems}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
