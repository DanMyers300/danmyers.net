import '../styles/Contact.css';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <main>
      <h1>Contact Me</h1>
      <br />
      <div className="contact-container">
        <a href="mailto:contact@danmyers.net" className="email-link" target="_blank" rel="noopener noreferrer">
          contact@danmyers.net
        </a>
        <a href="mailto:contact@danmyers.net" className="mail-link" target="_blank" rel="noopener noreferrer">
          <MdEmail className="mail-icon" />
        </a>
      </div>
    </main>
  );
}

export default Contact;
