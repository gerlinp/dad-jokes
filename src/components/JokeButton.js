import React from 'react';

function JokeButton({ onClick, text }) {
  return (
    <button id="jokeBtn" className="btn" onClick={onClick}>
      {text}
    </button>
  );
}

export default JokeButton;
