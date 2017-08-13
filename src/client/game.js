class Game {
	constructor(){
		this.canvasSetup();
	}

	canvasSetup() {
    	this.socket = io();
	console.log(1);

		this.canvas = document.getElementById("main"),
		this.ctx = this.canvas.getContext("2d");

		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

}

window.onload = function () {
	console.log(2);
	new Game;
}