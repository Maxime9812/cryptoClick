import React, { Component } from 'react';

export default class Menu extends Component {
	constructor(props){
  		super(props)
  		this.settingsFunction = this.settingsFunction.bind(this)
  	}
  	settingsFunction(){
  		this.props.clickFunction("settings")
  		this.props.stopTime()
  	}
  render() {
  	const {clickFunction,coinMine,stopTime} = this.props
    return (
    	<div id="menus">
    		<div id="menuLeft">
	    		<img id="shop" src={require('../img/Shop.png')} onClick={() => clickFunction("shop")}/>
	    		<img id="shop" src={require('../img/Miner.png')} onClick={() => clickFunction("miner")}/>
	    		<img id="shop" src={require('../img/Settings.png')} onClick={() => this.settingsFunction()}/>
    		</div>
    		<div id="menuRight">
    		    <img id="shop" src={require('../img/About.png')} onClick={() => clickFunction("about")}/>
    		    <img id="shop" src={require('../img/pc.png')} onClick={() => clickFunction("pcUpgrade")}/>
    		</div>
      	</div>
    );
  }
}
