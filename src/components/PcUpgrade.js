import React, { Component } from 'react';
import UpgradePPS from './UpgradePPS'

export default class Shop extends Component {
  render() {
  	const {upgradesPPS,deletePage} = this.props
  	    return (
				<div id="shopMenu">
		    		<div id="quitBar">
		    		<img id="quitIcons" src={require("../img/dots.png")} onClick={() => deletePage("pcUpgrade")}/>
		    		</div>
				    <div id="shopContaine">
					    <UpgradePPS src={require("../img/badcomputer.png")} prix="10000" gain="1" name="Bad computer" upgradeLvl={upgradesPPS} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/computer.png")} prix="100000" gain="3" name="Computer" upgradeLvl={upgradesPPS} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/gaming.png")} prix="1000000" gain="5" name="Gaming" upgradeLvl={upgradesPPS} id="2" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/server1.png")} prix="10000000" gain="20" name="Serveur 1" upgradeLvl={upgradesPPS} id="3" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/server2.png")} prix="100000000" gain="230" name="Serveur 2" upgradeLvl={upgradesPPS} id="4" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/quantum.png")} prix="1000000000" gain="500" name="Quantum" upgradeLvl={upgradesPPS} id="5" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
		    		</div>
		    		
		      	</div>
    		);
  }
}