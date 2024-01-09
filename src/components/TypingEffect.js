import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100 }) => {
  const [content, setContent] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingTimer = setInterval(() => {
      setContent((c) => c + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(typingTimer);
      }
    }, speed);

    const cursorTimer = setInterval(() => {
      setShowCursor((show) => !show);
    }, speed * 2);

    return () => {
      clearInterval(typingTimer);
      clearInterval(cursorTimer);
    };
  }, [text, speed]);

  return (
    <h1 className="text-4xl md:text-5xl font-bold">
      {content}
      <span
        className={`inline-block w-2 h-full bg-black transition-opacity duration-500 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
      ></span>
    </h1>
  );
};

export default TypingEffect;
