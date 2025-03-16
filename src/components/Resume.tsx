import React from 'react';
import resume from '/resume.png';

const Resume: React.FC = () => {
  return (
    <div className="h-[calc(100vh-70px)] mt-3 w-full">
      <img
        src={resume}
        alt="Resume"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default Resume;
