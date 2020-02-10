import React from 'react';
import Wrong from '../../assets/sounds/wrong.mp3';
import Success from '../../assets/sounds/success.wav';

let scoreResult = 5;
const Options = props => {
  const playSound = src => {
    const audio = new Audio();
    audio.src = src;
    audio.autoplay = true;
  };
  const clickAction = (item, e) => {
    if (props.state) {
      props.setTempBird(item);
      if (+item.id !== +props.currentBird.id) {
        e.target.style.backgroundColor = '#F64B4B';
        playSound(Wrong);
        if (scoreResult > 0) {
          scoreResult -= 1;
        }
      } else {
        e.target.style.backgroundColor = '#00bc8c';
        playSound(Success);
        props.setState(false);
        props.setScore(props.score + scoreResult);
        scoreResult = 5;
      }
      console.log('TCL: clickAction -> scoreResult', scoreResult);
    }
  };
  return (
    <div className="game__options">
      {props.BirdsDataItem.birds.map(item => (
        <button
          type="button"
          className="game__options-item"
          key={item.id}
          id={item.id}
          onClick={e => clickAction(item, e)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Options;
