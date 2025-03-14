import React from 'react';
import resume from '/src/assets/Resume.pdf';

const Resume: React.FC = () => {
  return (
    <div style={{ 
      height: 'calc(100vh - 70px)',
      width: '100%',
      overflow: 'hidden'
    }}>
      <iframe
        src={resume}
        title="Resume"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      />
    </div>
  );
};

export default Resume;
