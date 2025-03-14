import '../styles/Contact.css';
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
        className={className}
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
      <hr className="separator-bar" />
      <div className="contact-container">
        {renderEmailLink('mail-link', <MdEmail className="mail-icon" />)}
        {renderEmailLink('email-link', 'contact@danmyers.net')}
      </div>
    </main>
  );
}

export default Contact;
