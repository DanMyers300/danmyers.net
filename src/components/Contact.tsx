import React from 'react';
import { MdEmail } from 'react-icons/md';

function Contact() {
  const handleEmailClick = () => {
    window.open('mailto:contact@danmyers.net', '_blank');
  };

  const renderEmailLink = (className: string, children: React.ReactNode) => {
    return (
      <a
        href="mailto:contact@danmyers.net"
        className={`text-current no-underline hover:underline ${className}`}
        onClick={(e) => {
          e.preventDefault();
          handleEmailClick();
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  };

  return (
    <main>
      <h1>Contact Me</h1>
      <hr className="w-4/5 h-1 bg-gray-300 my-5" />
      <div className="flex flex-col items-center gap-2">
        {renderEmailLink('text-xl text-white', <MdEmail />)}
        {renderEmailLink('text-lg', 'contact@danmyers.net')}
      </div>
    </main>
  );
}

export default Contact;
