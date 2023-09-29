import React, { useState, useEffect } from 'react';

function JokeDisplay() {
  const [randomJoke, setRandomJoke] = useState(null);

  useEffect(() => {
    const fetchRandomJoke = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        const fakeJoke = "Chuck Norris n'utilise pas de boucle for, il envoie ses ordres directement à la mémoire.";
        setRandomJoke(fakeJoke);
      } catch (error) {
        console.error('Erreur lors de la récupération de la blague aléatoire:', error);
      }
    };
  
    fetchRandomJoke();
  }, []);

  return (
    <div>
      <h2>Blague aléatoire :</h2>
      {randomJoke && <p>{randomJoke}</p>}
    </div>
  );
}

export default JokeDisplay;




