import React from 'react';
import './App.scss';
import Header from '../Header';
import Question from '../Question';
import Answers from '../Answers';
import Description from '../Description';

function App() {
  return (
    <div className="App">
      <Header />
      <Question />
      <div className="App__answers-and-info">
        <Answers />
        <Description />
      </div>
      <button className="App__button">Next Level</button>
    </div>
  );
}

export default App;
