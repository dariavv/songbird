import React, { Component } from 'react';
import Score from './Score';
import GameMap from './GameMap';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <h1 className="header__logo">SongBeard</h1>
          <Score />
        </div>
        <GameMap />
      </div>
    );
  }
}

export default Header;
