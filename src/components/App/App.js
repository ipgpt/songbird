import React, { useState } from 'react';
import './App.scss';
import Header from '../Header';
import Question from '../Question';
import Answers from '../Answers';
import Description from '../Description';
import birdsData from '../../birds';

function App() {
  const [level, setLevel] = useState(0);
  const [score, seScore] = useState(0);
  const [answer, setAnswer] = useState(false);

  const handleLevel = () => {
    if (level < 5) {
      setLevel(level + 1);
    }
  };

  return (
    <div className="App">
      <Header score={score} level={level} />
      <Question bird={birdsData[0][0]} isTrue={true} />
      <div className="App__answers-and-info">
        <Answers />
        <Description />
      </div>
      <button className="App__button" onClick={handleLevel}>Next Level</button>
    </div>
  );
}

export default App;
