import React from 'react';
import '../styles/Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <iframe
        src="/Resume.pdf"
        width="100%"
        height="1000px"
        title="Resume"
      />
    </div>
  );
};

export default Resume;
