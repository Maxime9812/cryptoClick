import React, { Component } from 'react';
import UpgradePPC from './UpgradePPC'

export default class Shop extends Component {
  render() {
  	const {upgradesPPC,deletePage} = this.props
  	    return (
  	    	<div id="shopMenu">
  	    		<div id="quitBar">
		    		<img id="quitIcons" src={require("../img/dots.png")} onClick={() => deletePage("about")} />
		    	</div>
  	    		<div id="about">
					<p>
						<a href="https://github.com/MathisTimo" target="blank">Mathis</a>
						<a href="https://github.com/williamandrieu" target="blank">William</a>
						<a href="https://github.com/Maxime9812" target="blank">Maxime</a>
					</p>
		      	</div>
		    </div>
				
    		);
  }
}