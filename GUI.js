function DrawWorldTable( Table, iRow, iCol, aWorld) {
	Table.empty();
	for(var y = 0, ii = 0; y < iRow; y++) {
		var tr = document.createElement('TR');
		for(var x = 0; x < iCol; x++, ii++) {
			var td = document.createElement('TD');
			td.id = y + '_' + x;
			td.width = 16;
			td.height = 16;
			td.row = y;
			td.col = x;
			if(aWorld[y][x]) td.classList.add('item');
			//
			//console.log(fRandom && Math.random()>0.5);
			tr.appendChild(td);
		}
		Table.append(tr);
	}
	$('td').click(function() {
		//console.log('[' + this.row + ' , ' + this.col + ']');
		//console.log(zaz);
		zaz.revert(this.row,this.col);// = !zaz.world[this.row][this.col];
		console.log(zaz);
		$(this).toggleClass('item', 0);
	});
}
