import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Question.scss";
import BirdImage from "../../assets/img/bird.jpg";

function Question({ bird, isRight }) {
  if (isRight) {
    return (
      <div className="question">
        <img className="question__bird-image" alt="bird" src={bird.image} />
        <div className="question__content">
          <h3 className="question__bird-name">{bird.name}</h3>
          <hr />
          <ReactAudioPlayer
            className="question__audio-player"
            src={bird.audio}
            controls
          />
        </div>
      </div>
    );
  }
  return (
    <div className="question">
      <img className="question__bird-image" alt="bird" src={BirdImage} />
      <div className="question__content">
        <h3 className="question__bird-name">*****</h3>
        <hr />
        <ReactAudioPlayer
          className="question__audio-player"
          src={bird.audio}
          controls
        />
      </div>
    </div>
  );
}

export default Question;
