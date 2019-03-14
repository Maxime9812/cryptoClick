import React, { Component } from 'react';

export default class Miner extends Component {
  render() {
    const {coinMine} = this.props
    return (
      <div id="divMiner" onClick={coinMine}>
        <img id="close" draggable="false" src={require("../img/cancel.png")}/>
        <img id="pioche" draggable="false" src={require("../img/pickaxe.png")}/>
        <img id="coin" draggable="false" src={require("../img/coin.png")}/>
        <img id="eclats" draggable="false" src={require("../img/eclats.png")}/>
      </div>
    );
  }
}