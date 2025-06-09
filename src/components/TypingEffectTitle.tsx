import React, { useState, useEffect } from 'react';

const phrases = [
  'Ακρίβεια',
  'AI',
  'Feedback',
  'Πραγματική Εξάσκηση',
];

const TypingEffectTitle: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < phrases[currentPhrase].length) {
        timeout = setTimeout(() => {
          setDisplayed(phrases[currentPhrase].slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed('');
        setTyping(true);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, currentPhrase]);

  return (
    <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
      Κατάκτησε τα Μαθηματικά με...
      <br />
      <span className="relative inline-block">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 bg-clip-text text-transparent animate-[gradientShift_3s_ease-in-out_infinite]">
          {displayed}
          <span className="inline-block w-2 h-8 align-middle bg-gray-400 ml-1 animate-pulse" style={{verticalAlign: 'middle'}}></span>
        </span>
      </span>
    </h1>
  );
};

export default TypingEffectTitle; 