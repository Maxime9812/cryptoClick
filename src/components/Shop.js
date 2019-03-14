import React, { Component } from 'react';
import Login from './Login'
import Upgrade from './Upgrade'

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
					    <Upgrade type="ppc" src={require("../img/chip.png")} prix="10" name="Intel Celeron" upgradeLvl={upgradesPPC} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip2.png")} prix="100" name="Intel I5" upgradeLvl={upgradesPPC} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip.png")} prix="10" name="Intel Celeron" upgradeLvl={upgradesPPC} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip2.png")} prix="100" name="Intel I5" upgradeLvl={upgradesPPC} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip.png")} prix="10" name="Intel Celeron" upgradeLvl={upgradesPPC} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip2.png")} prix="100" name="Intel I5" upgradeLvl={upgradesPPC} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip.png")} prix="10" name="Intel Celeron" upgradeLvl={upgradesPPC} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip2.png")} prix="100" name="Intel I5" upgradeLvl={upgradesPPC} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip.png")} prix="10" name="Intel Celeron" upgradeLvl={upgradesPPC} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip2.png")} prix="100" name="Intel I5" upgradeLvl={upgradesPPC} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip.png")} prix="10" name="Intel Celeron" upgradeLvl={upgradesPPC} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
					    <Upgrade type="ppc" src={require("../img/chip2.png")} prix="100" name="Intel I5" upgradeLvl={upgradesPPC} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
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
			     	<p>PPS</p>
				    <Upgrade type="pps" src={require("../img/graphics-card.png")} prix="10" name="Intel Celeron" upgradeLvl={upgradesPPS} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
				    <Upgrade type="pps" src={require("../img/graphics-card2.png")} prix="100" name="Intel I5" upgradeLvl={upgradesPPS} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
		      	</div>
    		);
  		break;
  	}
    
  }
}
