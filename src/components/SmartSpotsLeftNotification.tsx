import React, { useEffect, useState } from "react";

interface SmartSpotsLeftNotificationProps {
  spotsLeft: number;
}

const SmartSpotsLeftNotification: React.FC<SmartSpotsLeftNotificationProps> = ({ spotsLeft }) => {
  // Remove auto-hide logic so the notification stays visible
  // const [visible, setVisible] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => setVisible(false), 8000); // auto-hide after 8s
  //   return () => clearTimeout(timer);
  // }, []);

  // if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 32,
      right: 32,
      background: '#fffbe6',
      color: '#ff6600',
      border: '2px solid #ffe0b2',
      borderRadius: 16,
      padding: '16px 28px',
      fontSize: '1.1rem',
      fontWeight: 'bold',
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      animation: 'bounceIn 0.7s',
    }}>
      <span role="img" aria-label="alert">⏰</span>
      <span>Απομένουν μόνο {spotsLeft} θέσεις!</span>
      <style>{`
        @keyframes bounceIn {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default SmartSpotsLeftNotification; 