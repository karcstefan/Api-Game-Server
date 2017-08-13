class Game {
	constructor(){
		this.canvasSetup();
	}

	canvasSetup() {
    	this.socket = io();

		this.canvas = document.getElementById("main"),
		this.ctx = this.canvas.getContext("2d");

		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

}

window.onload = function () {
	new Game;
}