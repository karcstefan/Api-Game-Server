"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game() {
		_classCallCheck(this, Game);

		this.canvasSetup();
	}

	_createClass(Game, [{
		key: "canvasSetup",
		value: function canvasSetup() {
			this.socket = io();
			console.log(1);

			this.canvas = document.getElementById("main"), this.ctx = this.canvas.getContext("2d");

			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
		}
	}]);

	return Game;
}();

window.onload = function () {
	console.log(2);
	new Game();
};