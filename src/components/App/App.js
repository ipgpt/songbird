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
    } else {
      setLevel(level + 1);
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

  const handleRepeatGame = () => {
    setScore(0);
    setLevel(0);
    setIsRight(false);
    setSecretBird(birdsData[0][0]);
  };

  return (
    <div className="App">
      <Header score={score} level={level} />
      {level === 6 ? (
        <div className="App__gameover">
          <h1 className="App__finish-headline">Поздравляем!</h1>
          <h4 className="App__finish-text">
            Вы прошли викторину и набрали {score} из 30 возможных баллов.
          </h4>
          <hr />
          <button className="App__button" onClick={handleRepeatGame}>
            Попробовать еще раз!
          </button>
        </div>
      ) : (
        <>
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
            {level !== 5 ? "Следующий уровень" : "Закончить игру"}
          </button>
        </>
      )}
    </div>
  );
}

export default App;
