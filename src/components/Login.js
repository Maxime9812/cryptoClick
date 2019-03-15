import React, { Component } from 'react';

export default class Login extends Component {
	constructor(props){
		super(props)
		this.changeName = this.changeName.bind(this)
		this.changePassword = this.changePassword.bind(this)
		this.sendPlayerName = this.sendPlayerName.bind(this)
		this.changePage = this.changePage.bind(this)
		this.state = {name: "",password: "",page:'login'};
	}
	changeName(event){
		this.setState({name: event.target.value})
	}
	changePassword(event){
		this.setState({password: event.target.value})
	}
	sendPlayerName(event){
		event.preventDefault();
		console.log(this.state.name.length)
		if(this.state.name != "" && this.state.name.length <= 20){
			this.props.appFunction(this.state.name)
		}else if(this.state.name.length >= 20){
			window.alert("Name to long max 20 char")
		}else{
			window.alert("Name is empty")
		}
	}
	changePage(event){
		this.setState({page: event})
	}
  render() {
  	switch(this.state.page){
  		case "login": return (
		      <div id="Login">
		      	<p id="textLogin" >Enter your name: </p>
		      <form id="formLogin" onSubmit={this.sendPlayerName}>
			      <input className="input" value={this.state.name} type="text" onChange={this.changeName}/>
			      <p id="textLogin" >Enter your password: </p>
			      <input className="input" value={this.state.password} type="password" onChange={this.changePassword} />
			      <input className="button"type="Submit" value="Login"/>
		      </form>
		      	<p id="or">or</p>
		      	<input id="signUp" value="Sign up" type="button" onClick={() => this.changePage("signUp")}/>
		      </div>
    		);
  			break;
  		case "signUp": return (
		      <div id="Login">
		      	<p id="textLogin" >Enter your name: </p>
		      <form id="formLogin" onSubmit={this.sendPlayerName}>
			      <input className="input" value={this.state.name} type="text" onChange={this.changeName}/>
			      <p id="textLogin" >Enter your password: </p>
			      <input className="input" value={this.state.password} type="password" onChange={this.changePassword} />
			      <input className="button"type="Submit" value="Sign up"/>
		      </form>
		      	<p id="or">or</p>
		      	<input id="signUp" value="Return" type="button" onClick={() => this.changePage("login")}/>
		      </div>
    		);
  			break;
  	}
    
  }
}
