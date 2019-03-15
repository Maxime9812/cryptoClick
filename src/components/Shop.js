import React, { Component } from 'react';
import UpgradePPC from './UpgradePPC'

export default class Shop extends Component {
  render() {
  	const {upgradesPPC,deletePage} = this.props
  	    return (
				<div id="shopMenu">
		    		<div id="quitBar">
		    		<img id="quitIcons" src={require("../img/dots.png")} onClick={() => deletePage("shop")} />
		    		</div>
				    <div id="shopContaine">
					    <UpgradePPC src={require("../img/chip.png")} prix="10" gain="2"  name="Intel Celeron" upgradeLvl={upgradesPPC} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip2.png")} prix="1000" gain="2" name="Intel Pentium" upgradeLvl={upgradesPPC} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip3.png")} prix="10000" gain="2" name="Intel Dual core" upgradeLvl={upgradesPPC} id="2" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip4.png")} prix="10000" gain="2" name="Intel I3" upgradeLvl={upgradesPPC} id="3" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip5.png")} prix="10000" gain="2" name="Intel I5" upgradeLvl={upgradesPPC} id="4" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip6.png")} prix="10000" gain="2" name="Intel I5 OC" upgradeLvl={upgradesPPC} id="5" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip7.png")} prix="10000" gain="2" name="Intel I7" upgradeLvl={upgradesPPC} id="6" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip8.png")} prix="10000" gain="2" name="Intel I7 OC" upgradeLvl={upgradesPPC} id="7" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip9.png")} prix="10000" gain="2" name="Intel I9" upgradeLvl={upgradesPPC} id="8" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip10.png")} prix="10000" gain="2" name="Intel I9 OC" upgradeLvl={upgradesPPC} id="9" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/gpu.png")} prix="10000" gain="2" name="750" upgradeLvl={upgradesPPC} id="10" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/graphiccard.png")} prix="10000" gain="2" name="950" upgradeLvl={upgradesPPC} id="11" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/graphiccard2.png")} prix="10000" gain="2" name="950 TI" upgradeLvl={upgradesPPC} id="12" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/gpu1.png")} prix="10000" gain="2" name="1080 TI" upgradeLvl={upgradesPPC} id="13" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/ASIC1.png")} prix="10000" gain="2" name="ASIC1" upgradeLvl={upgradesPPC} id="14" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/ASIC2.png")} prix="10000" gain="2" name="ASIC2" upgradeLvl={upgradesPPC} id="15" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/ASIC3.png")} prix="10000" gain="2" name="ASIC3" upgradeLvl={upgradesPPC} id="16" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/A9.png")} prix="10000" gain="2" name="A9" upgradeLvl={upgradesPPC} id="17" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/SC1.png")} prix="10000" gain="2" name="SC1" upgradeLvl={upgradesPPC} id="18" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
		    		</div>
		    		
		      	</div>
    		);
  }
}