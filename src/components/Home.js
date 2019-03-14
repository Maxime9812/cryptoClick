import React, { Component } from 'react';
import Login from './Login'

export default class Home extends Component {
  render() {
    return (
      <div className="App">
      	<div id="title">
      		<a>CryptoClick</a>
      	</div>
	      <Login appFunction={this.props.appFunction}/>
	      <video poster="https://zupimages.net/up/19/11/nwzt.png" id="bgvid" playsInline="" autoPlay="" muted="" loop>
	      <source src="https://giant.gfycat.com/UnfoldedRemorsefulJackal.webm" type="video/webm" />
	      </video>
      </div>
    );
  }
}
