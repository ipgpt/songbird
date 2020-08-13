import React from 'react';
import './App.scss';
import Header from '../Header';
import Question from '../Question';
import Answers from '../Answers';

function App() {
  return (
    <div className="App">
      <Header />
      <Question />
      <div className="App__answers-and-info">
        <Answers />
      </div>
      
    </div>
  );
}

export default App;
