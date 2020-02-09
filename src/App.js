import React, { useState } from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Options from './components/Options';
import GameInfo from './components/GameInfo';
import './styles/main.scss';
import BirdsData from './utils/BirdsData';

const App = () => {
  const randomBird = birds => birds[Math.floor(Math.random() * birds.length)];

  // const [score, setScore] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [currentBird, setCurrentBird] = useState(
    randomBird(BirdsData[currentStep].birds)
  );
  const [state, setState] = useState(true);

  const goNextLevel = () => {
    if (currentStep < BirdsData.length - 1) {
      setCurrentStep(currentStep + 1);
      setCurrentBird(randomBird(BirdsData[currentStep + 1].birds));
    } else {
      console.log(1111);
    }
    setState(true);
  };

  return (
    <div className="wrapper">
      <Header BirdsData={BirdsData} />
      <Quiz currentBird={currentBird} />
      <div className="game">
        <Options
          BirdsDataItem={BirdsData[currentStep]}
          currentBird={currentBird}
          setState={setState}
          state={state}
        />
        <GameInfo />
      </div>
      <button
        type="button"
        onClick={goNextLevel}
        className="btn"
        disabled={state}
      >
        Next Level
      </button>
    </div>
  );
};

export default App;
