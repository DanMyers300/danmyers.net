import React from 'react';
import { isMobile } from 'react-device-detect';
import resume from '../../public/Resume.pdf';
import '../styles/Resume.css';

export const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (isMobile) {
    e.preventDefault();
    window.open(resume, '_blank');
  }
};

const Resume: React.FC = () => {
  return (
    <div className="resume-container">
      <iframe
        src={resume}
        width="100%"
        height="1000px"
        title="Resume"
      />
    </div>
  );
};

export default Resume;
