import React, { Component } from 'react';
import Login from './Login'

export default class Game extends Component {
  render() {
    return (
      <div className="App">
      <p>CryptoClick</p>
      <p>bonjour {this.props.playerName} !</p>
      </div>
    );
  }
}
