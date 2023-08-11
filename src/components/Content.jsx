import React, { useState, useEffect } from 'react';
import '../styles/Content.css';

const Content = ({ quote }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!quote) return;

    setLoading(true);
    setText('');

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < quote.content.length) {
        setText(prevText => prevText + quote.content.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setLoading(false);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, [quote]);

  return (
    <div className="content-field">
      <div className="typing-animation" id="text">
        {loading ? (
          <>
            Loading<span className="typing-dots"></span>
          </>
        ) : (
          text
        )}
      </div>
      <h4 id="author">{quote.author}</h4>
    </div>
  );
};

export default Content;