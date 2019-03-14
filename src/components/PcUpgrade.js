import React, { Component } from 'react';
import UpgradePPS from './UpgradePPS'

export default class Shop extends Component {
  render() {
  	const {upgradesPPS} = this.props
  	    return (
				<div id="shopMenu">
		    		<div id="quitBar">
		    		<img id="quitIcons" src={require("../img/dots.png")} />
		    		</div>
				    <div id="shopContaine">
					    <UpgradePPS src={require("../img/chip.png")} prix="10" name="Intel Celeron" upgradeLvl={upgradesPPS} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip2.png")} prix="100" name="Intel Pentium" upgradeLvl={upgradesPPS} id="2" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip3.png")} prix="10" name="Intel Dual core" upgradeLvl={upgradesPPS} id="3" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip4.png")} prix="100" name="Intel I3" upgradeLvl={upgradesPPS} id="4" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip5.png")} prix="10" name="Intel I5" upgradeLvl={upgradesPPS} id="5" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip6.png")} prix="100" name="Intel I5 OC" upgradeLvl={upgradesPPS} id="6" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip7.png")} prix="10" name="Intel I7" upgradeLvl={upgradesPPS} id="7" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip8.png")} prix="100" name="Intel I7 OC" upgradeLvl={upgradesPPS} id="8" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip9.png")} prix="10" name="Intel I9" upgradeLvl={upgradesPPS} id="9" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip10.png")} prix="100" name="Intel I9 OC" upgradeLvl={upgradesPPS} id="10" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip11.png")} prix="10" name="Intel I12" upgradeLvl={upgradesPPS} id="11" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPS src={require("../img/chip12.png")} prix="100" name="Intel I12 ++" upgradeLvl={upgradesPPS} id="12" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
		    		</div>
		    		
		      	</div>
    		);
  }
}