import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Joke from './components/Joke';
import JokeButton from './components/JokeButton';

function App() {
  const [joke, setJoke] = useState(''); // State for the joke
  const [loading, setLoading] = useState(true); // State for loading
  const [buttonText, setButtonText] = useState('Get a Joke'); // State for button text

  // Function to fetch a joke
  const fetchJoke = async () => {
    setLoading(true); // Set loading to true before fetching
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };

    const response = await fetch('https://icanhazdadjoke.com/', config);
    const data = await response.json();
    setJoke(data.joke);
    setLoading(false); // Set loading to false after fetching
    setButtonText('Get A Joke'); // Update button text after the first press
  };

  // Fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke(); // Automatically fetch a joke on page load
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Header />
          {loading ? <p>Loading...</p> : <Joke joke={joke} />}
          <JokeButton onClick={fetchJoke} text={buttonText} />
        </div>
      </header>
    </div>
  );
}

export default App;
