world = new Array();
GameLife = function(config) {
	
	var Col = config.col;
	var Row = config.row;
	var worl_area = config.area;
	
	this.init = function() {
		world = new Array();
		for(var i = 0; i < Row; i++) {
			world[i] = new Array();
			for(var j = 0; j < Col; j++) {
				world[i][j] = false;
			}
		}
		DrawWorldTable(worl_area, Row, Col, world);
	}
	
	this.revert = function(iRow, iCol) {
		world[iRow][iCol] = !world[iRow][iCol];
	}
	
	this.initRandom = function() {
		world = new Array();
		for(var i = 0; i < Row; i++) {
			world[i] = new Array();
			for(var j = 0; j < Col; j++) {
				world[i][j] = Math.random() > 0.5;
			}
		}
		DrawWorldTable(worl_area, Row, Col, world);
	}
	This = this;
	this.interval = 0;
	this.start = function() {
		//interval = setInterval(this.doStep, 1000);
		window.setTimeout(This.doStep, 1000);
	}
	
	this.doStep = function() {
		var tmp_world = new Array();
		for(var i = 0; i < Row; i++) {
			tmp_world[i] = new Array();
			for(var j = 0; j < Col; j++) {
				tmp_world[i][j] = world[i][j];
			}
		}
		var res = 0;
		for(var i = 0; i < Row; i++) {
			for(var j = 0; j < Col; j++) {
				res = 0;
				if(world[i-1] != undefined) {
					if(world[i-1][j-1] != undefined) {
						res += world[i-1][j-1];
					}
				}
				if(world[i-1] != undefined) {
					if(world[i-1][j] != undefined) {
						res += world[i-1][j];
					}
				}
				if(world[i-1] != undefined) {
					if(world[i-1][j+1] != undefined) {
						res += world[i-1][j+1];
					}
				}
				if(world[i] != undefined) {
					if(world[i][j+1] != undefined) {
						res += world[i][j+1];
					}
				}
				if(world[i] != undefined) {
					if(world[i][j-1] != undefined) {
						res += world[i][j-1];
					}
				}
				if(world[i+1] != undefined) {
					if(world[i+1][j+1] != undefined) {
						res += world[i+1][j+1];
					}
				}
				if(world[i+1] != undefined) {
					if(world[i+1][j] != undefined) {
						res += world[i+1][j];
					}
				}
				if(world[i+1] != undefined) {
					if(world[i+1][j-1] != undefined) {
						res += world[i+1][j-1];
					}
				}
				if(world[i][j]) {
					if(res > 3) {
						tmp_world[i][j] = false;
					}
					if(res < 2) {
						tmp_world[i][j] = false;
					}
				} else {
					if(res == 3) {
						tmp_world[i][j] = true;
					}
				}
			}
		}
		world = new Array();
		for(var i = 0; i < Row; i++) {
			world[i] = new Array();
			for(var j = 0; j < Col; j++) {
				world[i][j] = tmp_world[i][j];
			}
		}
		This.DrawWorldTable(worl_area, Row, Col, world);
	}
	
	this.DrawWorldTable = function( Table, iRow, iCol, aWorld) {
		Table.empty();
		var item_count = 0;
		for(var y = 0, ii = 0; y < iRow; y++) {
			var tr = document.createElement('TR');
			for(var x = 0; x < iCol; x++, ii++) {
				var td = document.createElement('TD');
				td.id = y + '_' + x;
				td.width = 30;
				td.height = 30;
				td.row = y;
				td.col = x;
				if(world[y][x]) {
					td.classList.add('item');
					item_count++;
				}
				tr.appendChild(td);
			}
			Table.append(tr);
		}
		if(item_count) {
			this.start();
		} else {
			alert('Все!!!');
		}
		
		$('td').click(function() {
			world[this.row][this.col] = !world[this.row][this.col];
			$(this).toggleClass('item', 0);
		});
	}
	
	function DrawWorldTable( Table, iRow, iCol, aWorld) {
		Table.empty();
		var item_count = 0;
		for(var y = 0, ii = 0; y < iRow; y++) {
			var tr = document.createElement('TR');
			for(var x = 0; x < iCol; x++, ii++) {
				var td = document.createElement('TD');
				td.id = y + '_' + x;
				td.width = 30;
				td.height = 30;
				td.row = y;
				td.col = x;
				if(world[y][x]) {
					td.classList.add('item');
					item_count++;
				}
				tr.appendChild(td);
			}
			Table.append(tr);
		}
		
		$('td').click(function() {
			world[this.row][this.col] = !world[this.row][this.col];
			 if ($(this).is('.item')) {
				$(this).removeClass('item');
			} else {
				$(this).addClass('item');
			}
		});
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
		$('#poligon').show('slow');
		$('#next1').removeClass('hide');
	});
	
	$('#rand').click(function() {
		zaz.initRandom();
	});
	$('#go').click(function() {
		$("#audio-player")[0].play();
		zaz.doStep();
	});
});
