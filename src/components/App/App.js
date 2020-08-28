import React, { useState } from 'react';
import './App.scss';
import Header from '../Header';
import Question from '../Question';
import Answers from '../Answers';
import Description from '../Description';
import birdsData from '../../birds';

function App() {
  const answersNumber = 6;
  const [level, setLevel] = useState(0);
  const [score, seScore] = useState(0);
  const [isRight, setIsRight] = useState(false);
  const [secretBird, setSecretBird] = useState(birdsData[0][0]);
  const getRandomIndex = (length) => Math.floor(Math.random() * Math.floor(length));
  const handleLevel = () => {
    if (level < 5) {
      setLevel(level + 1);
      setSecretBird(birdsData[level][getRandomIndex(answersNumber)]);
    }
  };

  return (
    <div className="App">
      <Header score={score} level={level} />
      <Question bird={secretBird} isRight={isRight} />
      <div className="App__answers-and-info">
        <Answers />
        <Description />
      </div>
      <button
        className={isRight ? 'App__button' : 'App__button App__button--off'}
        disabled={!isRight}
        onClick={handleLevel}
      >Следующий уровень</button>
    </div>
  );
}

export default App;
