import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Game from './components/Game';

class App extends Component {
  constructor(props){
    super(props)
    this.startGame = this.startGame.bind(this)
    this.changeToHome = this.changeToHome.bind(this)
    this.state = {page: "Home",playerName: ""}
  }
  startGame(event){
    this.setState({playerName: event,page:"Game"})
  }

  changeToHome(){
    this.setState({page: "Home"})
  }

  render() {
    switch(this.state.page){
      case "Home": return(<Home appFunction={this.startGame}/>);
      break
      case "Game": return(<Game returnHome={this.changeToHome}playerName={this.state.playerName}/>);
      break
    }
  }
}

export default App;
