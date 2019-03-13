import React, { Component } from 'react';

export default class Login extends Component {
	constructor(props){
		super(props)
		this.changeName = this.changeName.bind(this)
		this.sendPlayerName = this.sendPlayerName.bind(this)
		this.state = {name: ""};
	}
	changeName(event){
		this.setState({name: event.target.value})
	}
	sendPlayerName(event){
		event.preventDefault();
		this.props.appFunction(this.state.name)
	}
  render() {
    return (
      <div id="Login">
      <p>login</p>
      <form onSubmit={this.sendPlayerName}>
	      <input value={this.state.name} type="text" onChange={this.changeName}/>
	      <input type="Submit" value="Login"/>
      </form>
      </div>
    );
  }
}
