function DrawWorldTable( Table, iRow, iCol){
	for(var y = 0, ii = 0; y < iRow; y++) {
		var tr = document.createElement('TR');
		for(var x = 0; x < iCol; x++, ii++){
			var td = document.createElement('TD');
			tr.appendChild(td);
		}
		CellTable.appendChild(tr);
	}
}
