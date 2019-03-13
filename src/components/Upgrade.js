import React, { Component } from 'react';

export default class Upgrade extends Component {
	constructor(props){
		super(props)
		this.verifCoin = this.verifCoin.bind(this)
	}
	verifCoin(){
		if(this.props.myCoin >= this.props.prix*this.props.upgradeLvl*1.4){
			this.props.gameFunction(this.props.prix*this.props.upgradeLvl*1.4,this.props.prix*this.props.upgradeLvl,this.props.id)
		}else{
			window.alert("NON")
		}
	}

  render() {
  	const {name,prix,upgradeLvl} = this.props
    return (
    	<div className="upgrade" onClick={this.verifCoin}>
	    	<img className="imgUpgrade" src="https://i.ytimg.com/vi/C4l-31lqlTc/hqdefault.jpg"/>
	    	<div className="infoUpgrade">
		    	<p className="nameUpgrade" >{name}</p>
		    	<p className="infoUpgrade" >price : {prix*upgradeLvl*1.4}</p>
		    	<p className="infoUpgrade" >gain : {prix*upgradeLvl}</p>
	    	</div>
    	</div>
    );
  }
}
