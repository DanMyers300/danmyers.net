import React from 'react';
import { isMobile } from 'react-device-detect';
import resume from '/src/assets/Resume.pdf';

export const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (isMobile) {
    e.preventDefault();
    window.open(resume, '_blank');
  }
};

const Resume: React.FC = () => {
  return (
    <div className="p-5">
      <iframe
        src={resume}
        className="w-full h-[1000px]"
        title="Resume"
      />
    </div>
  );
};

export default Resume;
