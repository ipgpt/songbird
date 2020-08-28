import React, { useState } from "react";
import "./App.scss";
import Header from "../Header";
import Question from "../Question";
import Answers from "../Answers";
import Description from "../Description";
import birdsData from "../../birds";

function App() {
  const answersNumber = 6;
  const [level, setLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [isRight, setIsRight] = useState(false);
  const [secretBird, setSecretBird] = useState(birdsData[0][0]);
  const [falseList, setFalseList] = useState([]);
  const getRandomIndex = (length) =>
    Math.floor(Math.random() * Math.floor(length));

  const handleLevel = () => {
    if (level < 5) {
      setFalseList([]);
      setIsRight(false);
      setLevel(level + 1);
      setSecretBird(birdsData[level + 1][getRandomIndex(answersNumber)]);
    }
  };

  const checkAnswer = (answer) => {
    if (secretBird.name === answer) {
      setIsRight(true);
      setScore(score + 5 - falseList.length);
    } else {
      setFalseList([...falseList, answer]);
    }
  };

  const handleBirdName = (answer) => () => {
    checkAnswer(answer);
  };

  return (
    <div className="App">
      <Header score={score} level={level} />
      <Question bird={secretBird} isRight={isRight} />
      <div className="App__answers-and-info">
        <Answers
          answersList={birdsData[level]}
          handleBirdName={handleBirdName}
          falseList={falseList}
          isRight={isRight}
          secretBird={secretBird}
        />
        <Description />
      </div>
      <button
        className={isRight ? "App__button" : "App__button App__button--off"}
        disabled={!isRight}
        onClick={handleLevel}
      >
        Следующий уровень
      </button>
    </div>
  );
}

export default App;
