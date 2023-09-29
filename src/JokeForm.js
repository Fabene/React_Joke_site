import React, { useRef } from 'react';

function JokeForm() {
  const authorRef = useRef();
  const emailRef = useRef();
  const contentRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const author = authorRef.current.value;
    const email = emailRef.current.value;
    const content = contentRef.current.value;

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(`Blague postée par ${author} (${email}): ${content}`);
    } catch (error) {
      console.error('Erreur lors de la publication de la blague:', error);
    }
    
    authorRef.current.value = '';
    emailRef.current.value = '';
    contentRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Auteur:</label>
        <input type="text" name="author" ref={authorRef} required />
      </div>
      <div>
        <label>Email de l’auteur:</label>
        <input type="email" name="email" ref={emailRef} required />
      </div>
      <div>
        <label>Contenu de la blague:</label>
        <textarea name="content" rows="4" cols="50" ref={contentRef} required />
      </div>
      <button type="submit">Publier</button>
    </form>
  );
}

export default JokeForm;

