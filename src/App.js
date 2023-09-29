import './App.css';
import React from 'react';
import JokeForm from './JokeForm';
import JokeDisplay from './JokeDisplay';

function App() {
  return (
    <div>
      <h1>Jokes Page</h1>
      <JokeForm />
      <JokeDisplay />
    </div>
  );
}

export default App;
