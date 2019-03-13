import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Game from './components/Game';

class App extends Component {
  constructor(props){
    super(props)
    this.changePlayerName = this.changePlayerName.bind(this)
    this.state = {page: "Home",playerName: ""}
  }
  changePlayerName(event){
    this.setState({playerName: event,page: "Game"})
    console.log(this.state)
  }
  render() {
    switch(this.state.page){
      case "Home": return(<Home appFunction={this.changePlayerName}/>);
      break
      case "Game": return(<Game playerName={this.state.playerName}/>);
      break
    }
  }
}

export default App;
