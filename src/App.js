import React, { Component } from 'react';
import Header from './HeaderComponent/Header';
import Quiz from './QuizComponent/Quiz';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Quiz />
      </div>
    );
  }
}

export default App;
