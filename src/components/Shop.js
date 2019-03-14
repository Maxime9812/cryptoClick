import React, { Component } from 'react';
import Login from './Login'
import UpgradePPC from './UpgradePPC'
import UpgradePPS from './UpgradePPS'

export default class Shop extends Component {
	constructor(props){
		super(props)
		this.changePage = this.changePage.bind(this)
		this.state = {page: "ppc"}
	}
	changePage(event){
		this.setState({page: event})
	}
  render() {
  	const {upgradesPPC,upgradesPPS} = this.props
  	switch(this.state.page){
  		case "ppc": return (
		    	<div id="shopMenu">
		    		<div id="quitBar">
		    		</div>
			    		<input type="button" value="PPC" onClick={() => this.changePage("ppc")}/>
			    		<input type="button" value="PPS" onClick={() => this.changePage("pps")}/>
				    <div id="shopContaine">
					    <UpgradePPC src={require("../img/chip.png")} prix="10" gain="2" name="Intel Celeron" upgradeLvl={upgradesPPC} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip2.png")} prix="1440" gain="4" name="Intel Pentium" upgradeLvl={upgradesPPC} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip3.png")} prix="17280" gain="8"name="Intel Dual core" upgradeLvl={upgradesPPC} id="2" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip4.png")} prix="207360" gain="16" name="Intel I3" upgradeLvl={upgradesPPC} id="3" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip5.png")} prix="2488320" gain="32" name="Intel I5" upgradeLvl={upgradesPPC} id="4" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip7.png")} prix="10" name="Intel I7" upgradeLvl={upgradesPPC} id="5" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/chip9.png")} prix="10" name="Intel I9" upgradeLvl={upgradesPPC} id="6" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <UpgradePPC src={require("../img/gpu.png")} prix="100" name="" upgradeLvl={upgradesPPC} id="7" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/graphiccard.png")} prix="100" name="" upgradeLvl={upgradesPPC} id="8" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/graphiccard2.png")} prix="100" name="" upgradeLvl={upgradesPPC} id="9" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/gpu1.png")} prix="100" name="" upgradeLvl={upgradesPPC} id="10" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/ASIC1.png")} prix="100" name="" upgradeLvl={upgradesPPC} id="11" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/ASIC2.png")} prix="100" name="" upgradeLvl={upgradesPPC} id="12" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/ASIC3.png")} prix="100" name="" upgradeLvl={upgradesPPC} id="13" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/A9.png")} prix="100" name="" upgradeLvl={upgradesPPC} id="14" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPC src={require("../img/SC1.png")} prix="100" name="" upgradeLvl={upgradesPPC} id="15" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
		    		</div>
		    		
		      	</div>
    		);
  		break;
  		case "pps": return (
		    	<div id="shopMenu">
		    		<div id="quitBar">
		    		</div>
			    		<input type="button" value="PPC" onClick={() => this.changePage("ppc")}/>
			    		<input type="button" value="PPS" onClick={() => this.changePage("pps")}/>
			     	<div id="shopContaine">
					    <UpgradePPS src={require("../img/A9.png")} prix="100" name="" gain="10" upgradeLvl={upgradesPPS} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
						<UpgradePPS src={require("../img/SC1.png")} prix="100" name="" gain="20"upgradeLvl={upgradesPPS} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
		      		</div>
		      	</div>
    		);
  		break;
  	}
    
  }
}
