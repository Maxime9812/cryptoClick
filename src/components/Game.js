import React, { Component } from 'react';
import Login from './Login'
import Shop from './Shop'
import InfoBar from './InfoBar'
import Menu from './Menu'
import Miner from './Miner'
import Timer from './Miner'

export default class Game extends Component {
	constructor(props){
		super(props)
		this.updateCoin = this.updateCoin.bind(this)
		this.upgrade = this.upgrade.bind(this)
		this.setPage = this.setPage.bind(this)
		this.startTimer = this.startTimer.bind(this)
		this.state = {
			coin: 0,
			ppc: 1,
			page: "",
			upgradesPPC:[1,1],
			upgradesPPS:[1,1],
			pps:0,
			secondes: 0,
			minutes: 0,
			heure: 0

		}
	}

	componentDidMount () {
		this.startTimer()
	}

	 startTimer(){
	 	this.myInterval = setInterval(() => {
	      this.setState(prevState => ({ coin: this.state.coin+this.state.pps,
	        secondes: prevState.secondes + 1,minutes: Math.floor((this.state.secondes+1)/60),heure:Math.floor(this.state.secondes/3600)
	     	 })
	      )
	    }, 1000)
	 }

	updateCoin(){
		this.setState({coin: this.state.coin+this.state.ppc})
	}
	incrementPpc(){
		this.setState({ppc: this.state.ppc+this.state.upgradeLvl})
	}
	upgrade(price,nbP,id,type){
		
		switch(type){
			case "ppc": this.state.upgradesPPC[id] = this.state.upgradesPPC[id]+ 1;
						this.setState({coin: this.state.coin-price,ppc: this.state.ppc+nbP})
			break;
			case "pps": this.state.upgradesPPS[id] = this.state.upgradesPPS[id]+ 1;
						this.setState({coin: this.state.coin-price,pps: this.state.pps+nbP})
			break;
		}
		
	}
	setPage(event){
		this.setState({page: event})
	}

  render() {
  	switch(this.state.page){
  		case "shop": return (
			      <div className="App">
				    <div id="windows" src={require('../img/BG1.jpg')} draggable="false">
				    	<div id="desktop">
					    	<Menu clickFunction={this.setPage}/>
					    	<Shop upgradesPPS={this.state.upgradesPPS} upgradesPPC={this.state.upgradesPPC} myCoin={this.state.coin} gameFunction={this.upgrade}/>
				    	</div>
				    </div>
				    <InfoBar id="infoBar" pps={this.state.pps} playerName={this.props.playerName} coin={this.state.coin} ppc={this.state.ppc}/>
			      </div>
		    );
  		break;
  		case "miner": return (
			      <div className="App">
				    <div id="windows" src={require('../img/BG1.jpg')} draggable="false">
				    	<div id="desktop">
					    	<Menu clickFunction={this.setPage} />
					    	<Miner coinMine={this.updateCoin}/>
				    	</div>
				    </div>
				    <InfoBar id="infoBar" pps={this.state.pps} playerName={this.props.playerName} coin={this.state.coin} ppc={this.state.ppc}/>
			      </div>
		    );
  		break;
  		case "": return (
			      <div className="App">
				    <div id="windows" src={require('../img/BG1.jpg')} draggable="false">
				    	<div id="desktop">
					    	<Menu clickFunction={this.setPage}/>
				    	</div>
				    </div>
				    <InfoBar id="infoBar" pps={this.state.pps} playerName={this.props.playerName} coin={this.state.coin} ppc={this.state.ppc}/>
			      </div>
		    );
  		break;
  	}
  	if(this.state.shop === true){
  		
  	}else if(this.state.Miner === true){
  		return (
	      <div className="App">
		    <div id="windows" src={require('../img/BG1.jpg')} draggable="false">
		    	<div id="desktop">
			    	<Menu onClick={this.setShop} coinMine={this.updateCoin}/>
			    	<Miner onClick={this.updateCoin}/>
		    	</div>
		    </div>
		     <InfoBar id="infoBar" pps={this.state.pps} playerName={this.props.playerName} coin={this.state.coin} ppc={this.state.ppc}/>
	      </div>
    );
  	}else{
  		return (
	      <div className="App">
		    <div id="windows" src={require('../img/BG1.jpg')} draggable="false">
		    	<div id="desktop">
			    	<Menu onClick={this.setShop} coinMine={this.updateCoin}/>
		    	</div>
		    </div>
		     <InfoBar id="infoBar" pps={this.state.pps} playerName={this.props.playerName} coin={this.state.coin} ppc={this.state.ppc}/>
	      </div>
    );
  	}
    
  }
}
