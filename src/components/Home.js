import React, { Component } from 'react';
import Login from './Login'

export default class Home extends Component {
  render() {
    return (
      <div className="App">
      <p>CryptoClick</p>
      <Login appFunction={this.props.appFunction}/>
      </div>
    );
  }
}
