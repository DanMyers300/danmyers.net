import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const ResumePage: React.FC = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);

  const handleOpenResume = () => {
    window.open('/Resume.pdf', '_blank');
  };

  if (isMobileDevice) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button onClick={handleOpenResume} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Open Resume in New Tab
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 20px)', marginTop: '20px' }}>
      <iframe
        src="/Resume.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Resume"
      />
    </div>
  );
};

export default ResumePage;
