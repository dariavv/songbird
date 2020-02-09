import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import Voice from '../../assets/audio/test.mp3';
import Pic from '../../assets/images/bird.jpg';
import 'react-h5-audio-player/src/styles.scss';

const GameInfo = props => {
  return (
    <div className="game__info">
      <img src={Pic} className="bird-pic" alt="bird" width="200" height="150" />
      <span className="bird-name">******</span>
      <span className="game__info-name">NameLatin</span>
      <AudioPlayer src={Voice} />
      <p className="game__info-description">Lorem ipsum,</p>
    </div>
  );
};

export default GameInfo;
