import React from 'react';
import resume from '/src/assets/Resume.pdf';

const Resume: React.FC = () => {
  return (
    <div className="h-[calc(100vh-70px)] mt-3 w-full overflow-hidden">
      <iframe
        src={resume}
        title="Resume"
        className="w-full h-full border-none"
      />
    </div>
  );
};

export default Resume;
