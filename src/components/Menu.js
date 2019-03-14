import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
  	const {clickFunction,coinMine} = this.props
    return (
    	<div id="menus">
    		<div id="menuLeft">
	    		<img id="shop" src={require('../img/Shop.png')} onClick={() => clickFunction("shop")}/>
	    		<img id="shop" src={require('../img/Miner.png')} onClick={() => clickFunction("miner")}/>
	    		<img id="shop" src={require('../img/Settings.png')} onClick={() => clickFunction("miner")}/>
    		</div>
    		<div id="menuRight">
    		    <img id="shop" src={require('../img/About.png')} onClick={() => clickFunction("shop")}/>
    		</div>
      	</div>
    );
  }
}
