import React, { Component } from 'react';
import Login from './Login'
import Upgrade from './Upgrade'

export default class Shop extends Component {
  render() {
  	const {upgrades} = this.props
    return (
    	<div>
	      <Upgrade prix="10" name="Intel Celeron" upgradeLvl={upgrades[0]} id="0" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
	      <Upgrade prix="100" name="Intel I5" upgradeLvl={upgrades[1]} id="1" myCoin={this.props.myCoin} gameFunction={this.props.gameFunction}/>
      </div>
    );
  }
}
