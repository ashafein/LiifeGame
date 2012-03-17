GameLife = function(config) {
	this.world = new Array();
	var Col = config.col;
	var Row = config.row;
	var worl_area = config.area;
	
	this.init = function() {
		this.world = new Array();
		for(var i = 0; i < Col; i++) {
			this.world[i] = new Array();
			for(var j = 0; j < Row; j++) {
				this.world[i][j] = false;
			}
		}
		DrawWorldTable(worl_area, Row, Col, this.world);
	}
	
	this.revert = function(iRow, iCol) {
		this.world[iRow][iCol] = !this.world[iRow][iCol];
	}
	
	this.initRandom = function() {
		this.world = new Array();
		for(var i = 0; i < Col; i++) {
			this.world[i] = new Array();
			for(var j = 0; j < Row; j++) {
				this.world[i][j] = Math.random() > 0.5;
			}
		}
		DrawWorldTable(worl_area, Row, Col, this.world);
	}
	
	this.interval = 0;
	this.start = function() {
		//interval = setInterval(this.doStep, 1000);
		window.setTimeout(this.doStep, 1000);
	}
	
	this.doStep = function() {
		console.log(this.world);
		var res = 0;
		for(var i = 0; i < Row; i++) {
			for(var j = 0; j < Col; j++) {
				res = 0;
				if(this.world[i-1] != undefined) {
					if(this.world[i-1][j-1] != undefined) {
						res += this.world[i-1][j-1];
					}
				}
				if(this.world[i-1] != undefined) {
					if(this.world[i-1][j] != undefined) {
						res += this.world[i-1][j];
					}
				}
				if(this.world[i-1] != undefined) {
					if(this.world[i-1][j+1] != undefined) {
						res += this.world[i-1][j+1];
					}
				}
				if(this.world[i] != undefined) {
					if(this.world[i][j+1] != undefined) {
						res += this.world[i][j+1];
					}
				}
				if(this.world[i] != undefined) {
					if(this.world[i][j-1] != undefined) {
						res += this.world[i][j-1];
					}
				}
				if(this.world[i+1] != undefined) {
					if(this.world[i+1][j+1] != undefined) {
						res += this.world[i+1][j+1];
					}
				}
				if(this.world[i+1] != undefined) {
					if(this.world[i+1][j] != undefined) {
						res += this.world[i+1][j];
					}
				}
				if(this.world[i+1] != undefined) {
					if(this.world[i+1][j-1] != undefined) {
						res += this.world[i+1][j-1];
					}
				}
				if(this.world[i][j]) {
					if(res > 3) {
						this.world[i][j] = false;
					}
					if(res < 2) {
						this.world[i][j] = false;
					}
				} else {
					if(res == 3) {
						this.world[i][j] = true;
					}
				}
			}
		}
		DrawWorldTable(worl_area, Row, Col, this.world);
	}
}


$(document).ready(function() {
	$('#start').click(function(){
		zaz = new GameLife({
			col: $('#Row').val(), 
			row: $('#Col').val(),
			area: $('#poligon'),
		});
		zaz.init();
		//console.log($('#Row').val());
		//DrawWorldTable($('#poligon'), , $('#Col').val());
	});
	
	$('#rand').click(function() {
		zaz.initRandom();
	});
	$('#go').click(function() {
		//zaz.start();
		zaz.doStep();
	});
  //DrawWorldTable($('#poligon'), 10, 10);
});
