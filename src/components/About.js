import React, { Component } from 'react';

export default class Abouy extends Component {
  render() {
  	const {time,deletePage} = this.props
  	    return (
  	    	<div id="shopMenu">
  	    		<div id="quitBar">
		    		<img id="quitIcons" src={require("../img/dots.png")} onClick={() => deletePage("about")} />
		    	</div>
  	    		<div id="about">
					<p> Made in 48h by: <br/><br/>
						<a className="gitName" href="https://github.com/MathisTimo" target="blank">Mathis </a>
						<a className="gitName" href="https://github.com/williamandrieu" target="blank">William </a>
						<a className="gitName" href="https://github.com/Maxime9812" target="blank">Maxime</a>
					</p>
					<p id="timeText">Time played: <br/>{Math.floor(time/3600)} hour <br/>{Math.floor(time/60)} min<br/> {time} s</p>
		      	</div>
		    </div>
				
    		);
  }
}