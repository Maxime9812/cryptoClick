import React, { Component } from 'react';

export default class Miner extends Component {
  render() {
    const {coinMine,deletePage} = this.props
    return (
      <div id="divMiner">
          <div id="quitBar">
            <img id="quitIcons" src={require("../img/dots.png")} onClick={() => deletePage("miner")} />
          </div>
        <div id="Miner" onClick={coinMine}>
          <img id="pioche" draggable="false" src={require("../img/pickaxe.png")}/>
          <img id="coin" draggable="false" src={require("../img/coin.png")}/>
          <img id="eclats" draggable="false" src={require("../img/eclats.png")}/>
        </div>
      </div>
    );
  }
}