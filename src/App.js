import React from 'react';
import { createRoot } from 'react-dom/client';
import { animals } from './animals.js'; // Make sure animals.js is in the same directory
import './styles.css'; // Import your styles

const App = () => {
  const displayFact = (e) => {
    const factElement = document.getElementById('fact');
    const animalName = e.target.alt;
    const optionIndex = Math.floor(Math.random() * animals[animalName].facts.length);
    const funFact = animals[animalName].facts[optionIndex];
    factElement.innerHTML = funFact;
  };

  const title = '';
  const showBackground = true;

  const background = (
    <div>
      <img
        className='background'
        alt='ocean'
        src='/images/ocean.jpg'
      />
    </div>
  );

  const images = Object.keys(animals).map(animal => (
    <img 
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />  
  ));

  return (
    <div>
      {showBackground && background}
      <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
      <div className='animals'>{images}</div>
      <p id='fact'></p>
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

export default App;

