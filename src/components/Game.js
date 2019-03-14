import React, { Component } from 'react';
import Shop from './Shop'
import InfoBar from './InfoBar'
import Menu from './Menu'
import Miner from './Miner'
import Sound from 'react-sound'
import img1 from '../img/BG1.jpg'
import img2 from '../img/BG2.jpg'
import img3 from '../img/BG3.png'
import img4 from '../img/BG4.png'
import img5 from '../img/BG5.png'
import img6 from '../img/BG6.png'

export default class Game extends Component {
	constructor(props){
		super(props)
		this.updateCoin = this.updateCoin.bind(this)
		this.upgrade = this.upgrade.bind(this)
		this.setPage = this.setPage.bind(this)
		this.startTimer = this.startTimer.bind(this)
		this.stopTime = this.stopTime.bind(this)
		this.changeBackground = this.changeBackground.bind(this)
		this.backGround = img1
		this.state = {
			coin: 0,
			ppc: 1,
			page: "",
			upgradesPPC:[1,1,1,1,1,1,1,1,1,1,1,1],
			upgradesPPS:[1,1,1,1,1,1,1,1,1],
			pps:0,
			secondes: 0,
			minutes: 0,
			heure: 0,
			interval: 0,
			level: 0

		}
	}

	componentDidMount () {
		if(this.props.playerName === "admin"){
			this.setState({coin: 100000000000})
		}
		this.startTimer()
		this.changeBackground()
	}

	changeBackground(){
		switch(this.state.level){
			case 1: this.backGround = img2
			break
			case 2: this.backGround = img3
			break
			case 3: this.backGround = img4
			break
			case 4: this.backGround = img5
			break
			case 5: this.backGround = img6
			break
		}
	}

	 startTimer(){
	 	this.state.interval = setInterval(() => {
			this.setState(prevState => ({ coin: this.state.coin+this.state.pps,
		    secondes: prevState.secondes + 1,minutes: Math.floor((this.state.secondes+1)/60),heure:Math.floor(this.state.secondes/3600)
		     	})
		    )
		}, 1000)
		this.setState({page: ""})
	 	
	 }

	 stopTime(){
	 	clearInterval(this.state.interval);
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
						this.setState({coin: this.state.coin-price,ppc: this.state.ppc+ parseInt(nbP)})
			break;
			case "pps": this.state.upgradesPPS[id] = this.state.upgradesPPS[id]+ 1;
						this.setState({coin: this.state.coin-price,pps: this.state.pps+parseInt(nbP)})
						if(this.state.level < parseInt(id)+1){
							this.setState({level: parseInt(id)+1})
							this.changeBackground()
						}
			break;
		}
		
	}
	setPage(event){
		if(this.state.page != event){
			this.setState({page: event})
		}else{
			this.setState({page: ""})
		}
	}

  render() {
  	switch(this.state.page){
  		case "shop": this.changeBackground()
  					return (
			      <div className="App">
			      <img id="imgBackground" src={this.backGround}/>
				    <div id="windows"  draggable="false">
				    	<div id="desktop">
					    	<Menu stopTime={this.stopTime} clickFunction={this.setPage}/>
					    	<Shop upgradesPPS={this.state.upgradesPPS} upgradesPPC={this.state.upgradesPPC} myCoin={this.state.coin} gameFunction={this.upgrade}/>
				    	</div>
				    </div>
				    <InfoBar id="infoBar" pps={this.state.pps} playerName={this.props.playerName} coin={this.state.coin} ppc={this.state.ppc}/>
			      </div>
		    );
  		break;
  		case "miner":
  					return (
			      <div className="App">
			      <img id="imgBackground" src={this.backGround}/>
				    <div id="windows" src={require('../img/BG1.jpg')} draggable="false">
				    	<div id="desktop">
					    	<Menu stopTime={this.stopTime} clickFunction={this.setPage} />
					    	<Miner coinMine={this.updateCoin}/>
				    	</div>
				    </div>
				    <InfoBar id="infoBar" pps={this.state.pps} playerName={this.props.playerName} coin={this.state.coin} ppc={this.state.ppc}/>
			      </div>
		    );
  		break;
  		case "settings":
  						return (
			      <div id="resume" className="App">
			      <a onClick={this.startTimer}>Resume</a>
			      <a onClick={this.props.returnHome}>Quit game</a>
			      </div>
		    );
  		break;
  		case "":
  				return (
			      <div className="App">
			      <img id="imgBackground" src={this.backGround}/>
				    <div id="windows" src={require('../img/BG1.jpg')} draggable="false">
				    	<div id="desktop">
					    	<Menu stopTime={this.stopTime} clickFunction={this.setPage}/>
				    	</div>
				    </div>
				    <InfoBar id="infoBar" pps={this.state.pps} playerName={this.props.playerName} coin={this.state.coin} ppc={this.state.ppc}/>
			      </div>
		    );
  		break;
  	}
    
  }
}
