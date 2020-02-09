import React from 'react';

const Options = props => {
  const idCurrentBird = props.currentBird.id;
  console.log('TCL: idCurrentBird', idCurrentBird);
  const clickAction = e => {
    console.log('TCL: e.target.id', e.target.id);
    if (props.state) {
      if (+e.target.id !== +idCurrentBird) {
        e.target.style.backgroundColor = 'red';
      } else {
        e.target.style.backgroundColor = 'green';
        props.setState(false);
      }
    }
  };
  return (
    <div className="game__options">
      {props.BirdsDataItem.birds.map(({ name, id }) => (
        <div
          key={id}
          id={id}
          onClick={clickAction}
          className="game__options-item"
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Options;
