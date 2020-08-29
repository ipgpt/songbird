import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Description.scss";

function Description({ answersList, answer }) {
  const bird =
    answersList[answersList.findIndex((item) => item.name === answer)];
  return (
    <div className="description">
      {answer ? (
        <>
          <div className="description__content">
            <img
              className="description__bird-image"
              alt="bird"
              src={bird.image}
            />
            <div className="description__header">
              <h4 className="description__bird-name">{bird.name}</h4>
              <hr />
              <p className="description__bird-species">{bird.species}</p>
              <hr />
              <ReactAudioPlayer
                className="description__audio-player"
                src={bird.audio}
                controls
              />
            </div>
          </div>
          <p className="description__bird-info">{bird.description}</p>
        </>
      ) : (
        <>
          <p className="description__start-text">
            Послушайте плеер.
            <br />
            Выберите птицу из списка.
          </p>
        </>
      )}
    </div>
  );
}

export default Description;
