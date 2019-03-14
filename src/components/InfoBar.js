import React, { Component } from 'react';

export default class InfoBar extends Component {
  render() {
  	const {playerName,coin,ppc,pps} = this.props
    return (
    	<div id="infoBar">
	      <p>bonjour {playerName} !</p>
		  <p>coins : {coin}</p>
		  <p>Coins per click: {ppc}</p>
		  <p>Coins per seconds: {pps}</p>
      	</div>
    );
  }
}
