import React, { Component } from 'react';

export default class Upgrade extends Component {
	constructor(props){
		super(props)
		this.verifCoin = this.verifCoin.bind(this)
	}
	verifCoin(){
		var price = Math.floor(this.props.prix*(Math.pow(2.5,this.props.upgradeLvl[this.props.id])))
		var gain = this.props.gain
		if(this.props.myCoin >= price){
			this.props.gameFunction(price,gain,this.props.id,this.props.type)
		}else{
			window.alert("NON")
		}
	}

  render() {
  	const {name,prix,upgradeLvl,src,id,gain} = this.props
    return (
    	<div className="upgrade" onClick={this.verifCoin}>
	    	<img className="imgUpgrade" src={src}/>
	    	<div className="infoUpgrade">
		    	<p className="nameUpgrade" >{name}</p>
		    	<p className="infoUpgrade" >price : {Math.floor(prix*(Math.pow(2.5,upgradeLvl[id])))}</p>
		    	<p className="infoUpgrade" >gain : {gain}</p>
		    	<p className="infoUpgrade" >Lvl : {upgradeLvl[id]}</p>
	    	</div>
    	</div>
    );
  }
}
