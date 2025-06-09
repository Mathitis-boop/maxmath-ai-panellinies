import React from "react";

interface SmartSpotsLeftNotificationProps {
  spotsLeft: number;
}

const SmartSpotsLeftNotification: React.FC<SmartSpotsLeftNotificationProps> = ({ spotsLeft }) => {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          background: '#fffbe6',
          color: '#ff6600',
          border: '2px solid #ffe0b2',
          borderRadius: 16,
          padding: '16px 28px',
          fontSize: '1.1rem',
          fontWeight: 600,
          boxShadow: '0 4px 24px 0 rgba(255, 165, 0, 0.10)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          animation: 'bounceIn 0.7s',
        }}
      >
        <span style={{ fontSize: 24, marginRight: 8, display: 'flex', alignItems: 'center' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-5-6.32V4a1 1 0 10-2 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 006 19h12a1 1 0 00.71-1.71L18 16z" fill="#ff9800"/>
          </svg>
        </span>
        <span style={{
          background: 'linear-gradient(90deg, #ff9800 0%, #ffcc80 100%)',
          color: '#fff',
          borderRadius: '50%',
          width: 44,
          height: 44,
          fontSize: '1.3rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px 0 rgba(255, 152, 0, 0.15)',
        }}>{spotsLeft}</span>
        <span>
          <b>Απομένουν μόνο {spotsLeft} θέσεις!</b>
        </span>
      </div>
      <style>{`
        @keyframes bounceIn {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default SmartSpotsLeftNotification; 