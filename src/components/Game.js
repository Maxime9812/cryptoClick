import React, { Component } from 'react';
import Login from './Login'
import Shop from './Shop'

export default class Game extends Component {
	constructor(props){
		super(props)
		this.updateCoin = this.updateCoin.bind(this)
		this.upgrade = this.upgrade.bind(this)
		this.setShop = this.setShop.bind(this)
		this.state = {coin: 0, ppc: 1, shop: false,upgrades:[1,1]}
	}
	updateCoin(){
		this.setState({coin: this.state.coin+this.state.ppc})
	}
	incrementPpc(){
		this.setState({ppc: this.state.ppc+this.state.upgradeLvl})
	}
	upgrade(price,nbP,id){
		this.state.upgrades[id] = this.state.upgrades[id]+ 1
		this.setState({coin: this.state.coin-price,ppc: this.state.ppc+nbP})
	}
	setShop(){
		if(this.state.shop == false){
			this.setState({shop: true})
		}else{
			this.setState({shop: false})
		}
	}

  render() {
  	if(this.state.shop == true){
  		return (
	      <div className="App">
		      <p>bonjour {this.props.playerName} !</p>
		      <p> coins : {this.state.coin}</p>
		      <button type="button" onClick={this.updateCoin}>Click me</button>
		      <button type="button" onClick={this.setShop}>Shop</button>
		      <Shop upgrades={this.state.upgrades} myCoin={this.state.coin} gameFunction={this.upgrade}/>
		      <p>Coins per click: {this.state.ppc}</p>
	      </div>
    );
  	}else{
  		return (
	      <div className="App">
		      <p>bonjour {this.props.playerName} !</p>
		      <p> coins : {this.state.coin}</p>
		      <button type="button" onClick={this.updateCoin}>Click me</button>
		      <button type="button" onClick={this.setShop}>Shop</button>
		      <p>Coins per click: {this.state.ppc}</p>
	      </div>
    );
  	}
    
  }
}
