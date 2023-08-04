import './App.css';
import Confetti from './Confetti';
import React, { useState } from 'react';


const shareMessage = 'I just ran my first container using Docker'
const shareLink = 'https://docker.com/'

const App = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const startConfetti = () => {
    setIsConfettiActive(true);
  };

  const resetConfetti = () => {
    setIsConfettiActive(false);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Congrats, ${name}!`);
    setName('');
  };

  return (
    <div className="App">
      {isConfettiActive && <Confetti />}
      <header className="App-header">
        <h1 style={{ marginBottom: "0px" }}>
          Congratulations!!!
        </h1>
        <p style={{ marginTop: "10px", marginBottom: "50px" }}>
          You ran your first container.
        </p>
        <div>
          <button onClick={startConfetti}>Start Confetti</button><br></br>  {/* Start Confetti Button */}
          <button onClick={resetConfetti}>Reset</button><br></br>     {/* Reset Confetti Button */}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>

          {/* Paragraph element to display the greeting */}
          {greeting && <p>{greeting}</p>}

          <a target="_blank" href={"https://twitter.com/intent/tweet?text=" + shareMessage + "&url=" + shareLink} class="fa fa-twitter" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://www.linkedin.com/sharing/share-offsite/?url=" + shareLink} class="fa fa-linkedin" rel="noopener noreferrer"> </a>
          <a target="_blank" href={"https://reddit.com/submit?title=" + shareMessage + "&url=" + shareLink} class="fa fa-reddit" rel="noopener noreferrer"> </a>
        </div>
      </header>
    </div>
  );
}

export default App;
