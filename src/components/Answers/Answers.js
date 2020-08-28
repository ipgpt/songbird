import React from "react";
import "./Answers.scss";

function Answers({
  answersList,
  falseList,
  handleBirdName,
  isRight,
  secretBird,
}) {
  return (
    <div className="answers">
      {answersList.map((item) => {
        return (
          <button
            className={
              isRight && item.name === secretBird.name
                ? "answers__button answers__button--true"
                : falseList.find((falseItem) => falseItem === item.name)
                ? "answers__button answers__button--false"
                : "answers__button"
            }
            disabled={falseList.find((falseItem) => falseItem === item.name) || isRight}
            onClick={handleBirdName(item.name)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default Answers;
