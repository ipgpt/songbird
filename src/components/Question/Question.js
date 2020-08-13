import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Question.scss';
import BirdImage from '../../assets/img/bird.jpg';

function Question() {
  return (
    <div className="question">
      <img className="question__bird-image" alt="bird" src={BirdImage} />
      <div className="question__content">
        <h3 className="question__bird-name">*****</h3>
        <hr />
        <ReactAudioPlayer 
          className="question__audio-player"
          src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
          controls
        />
      </div>
    </div>
  );
}

export default Question;
