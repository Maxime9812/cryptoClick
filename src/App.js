import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Game from './components/Game';
import Sound from 'react-sound'
import backgroundSound from './sound/backgroundjazzy.mov'


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
      case "Game": return(
        <div>
        <Sound url={backgroundSound} playStatus={Sound.status.PLAYING} onFinishedPlaying={this.stopSound} volume={15} muted={false}/>
        <Game returnHome={this.changeToHome}playerName={this.state.playerName}/>
        </div>);
      break
    }
  }
}

export default App;
