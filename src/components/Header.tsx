import { Link } from "react-router-dom";
import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import resume from "/src/assets/Resume.pdf";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuClick = (
    title: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (title === "resume" && isMobile) {
      e.preventDefault();
      window.open(resume, "_blank", "noopener,noreferrer");
    }
  };

  const menuItems = [
    { title: "projects", href: "/projects" },
    { title: "contact", href: "/contact" },
    { title: "resume", href: isMobile ? "#" : "/resume" }
  ];

  const listMenuItems = menuItems.map((item, index) => (
    <li key={index} className="sm:inline-block">
      <Link
        to={item.href}
        onClick={(e) => handleMenuClick(item.title, e)}
        className="block py-3 sm:py-2 px-4 text-gray-300 no-underline hover:text-white"
      >
        {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
      </Link>
    </li>
  ));

  return (
    <header className="relative bg-[#162b3b] rounded-lg py-2">
      <div className="max-w-7xl px-4 mx-auto sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-bold text-xl text-gray-300 no-underline"
          >
            Dan
          </Link>
          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="block sm:hidden border-0 bg-transparent cursor-pointer p-1.5 
              focus:outline-none appearance-none"
            aria-expanded={isNavOpen}
            type="button"
            style={{ backgroundColor: "transparent" }}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="w-6 h-5 relative flex flex-col justify-center items-center">
              <span
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                  isNavOpen ? "rotate-45" : "-translate-y-1"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-white transition-all ${
                  isNavOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
                  isNavOpen ? "-rotate-45" : "translate-y-1"
                }`}
              ></span>
            </div>
          </button>
        </div>
        <nav className="w-full sm:w-auto">
          <ul
            className={`sm:mt-0 flex gap-1 list-none transition-all duration-300 ${
              isNavOpen
                ? "flex-col bg-[#162b3b] opacity-100 visible"
                : "flex-col max-h-0 sm:max-h-full overflow-hidden opacity-0 sm:opacity-100 invisible sm:visible"
            } sm:flex sm:flex-row sm:static`}
          >
            {listMenuItems}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
