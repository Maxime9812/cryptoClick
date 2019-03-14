import React, { Component } from 'react';

export default class InfoBar extends Component {
  render() {
  	const {playerName,coin,ppc,pps} = this.props
    return (
    	<div id="infoBar">
	      <p>Bonjour {playerName} !</p>
		  <div className="coinDiv"><p>{coin}</p><img className="miniCoin" src={require('../img/coin.png')} /></div>
		  <div className="coinDiv"><img className="miniCoin" src={require('../img/coin.png')} /><p>per click: {ppc}</p></div>
		  <div className="coinDiv"><img className="miniCoin" src={require('../img/coin.png')} /><p>per seconds: {pps}</p></div>
      	</div>
    );
  }
}