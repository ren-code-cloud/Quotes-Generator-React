import React, { useState } from 'react';
import Content from './components/Content.jsx';
import Medias from './components/Medias.jsx';
import Buttons from './components/Buttons.jsx';
import axios from 'axios';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [loading, setLoading] = useState(false);

  const fetchNewQuote = async () => {
    try {
      setLoading(true); // Start loading
      const response = await axios.get('https://api.quotable.io/random');
      setQuote({
        content: response.data.content,
        author: response.data.author,
      });
      setLoading(false); // Stop loading
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Stop loading in case of error
    }
  };

  return (
    <React.Fragment>
      <h1>Quote Generator</h1>
      <div className="container">
        {/* Content Component */}
        <Content quote={quote} />
        {/* Medias Component */}
        <Medias />
        {/* Buttons Component */}
        <Buttons fetchData={fetchNewQuote} />
      </div>
    </React.Fragment>
  );
};

export default App;