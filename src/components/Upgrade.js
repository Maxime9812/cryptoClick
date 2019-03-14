import React, { Component } from 'react';

export default class Upgrade extends Component {
	constructor(props){
		super(props)
		this.verifCoin = this.verifCoin.bind(this)
	}
	verifCoin(){
		var price = this.props.prix*this.props.upgradeLvl[this.props.id]*1.4
		var gain = this.props.prix*this.props.upgradeLvl[this.props.id]
		if(this.props.myCoin >= this.props.prix*this.props.upgradeLvl[this.props.id]*1.4){
			this.props.gameFunction(this.props.prix*this.props.upgradeLvl[this.props.id]*1.4,this.props.prix*this.props.upgradeLvl[this.props.id],this.props.id,this.props.type)
		}else{
			window.alert("NON")
		}
	}

  render() {
  	const {name,prix,upgradeLvl,src,id} = this.props
    return (
    	<div className="upgrade" onClick={this.verifCoin}>
	    	<img className="imgUpgrade" src={src}/>
	    	<div className="infoUpgrade">
		    	<p className="nameUpgrade" >{name}</p>
		    	<p className="infoUpgrade" >price : {prix*upgradeLvl[id]*1.4}</p>
		    	<p className="infoUpgrade" >gain : {prix*upgradeLvl[id]}</p>
	    	</div>
    	</div>
    );
  }
}
