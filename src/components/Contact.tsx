import { MdEmail } from 'react-icons/md';

function Contact() {
  const handleEmailClick = () => {
    window.open('mailto:contact@danmyers.net', '_blank');
  };

  return (
    <main>
      <div className="flex flex-col mt-16 items-center gap-2">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mx-auto mb-8">Contact Me</h1>
        <a
          href="mailto:contact@danmyers.net"
          className="no-underline hover:underline text-xl"
          onClick={(e) => {
            e.preventDefault();
            handleEmailClick();
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail className="text-white" />
        </a>
        <a
          href="mailto:contact@danmyers.net"
          className="no-underline mb-8 hover:underline text-lg"
          style={{ color: 'white' }}
          onClick={(e) => {
            e.preventDefault();
            handleEmailClick();
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          contact@danmyers.net
        </a>
      </div>
    </main>
  );
}

export default Contact;
