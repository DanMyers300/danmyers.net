import React from 'react';
import { isMobile } from 'react-device-detect';
import '../styles/Resume.css';

export const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (isMobile) {
    e.preventDefault();
    window.open('/Resume.pdf', '_blank');
  }
};

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
