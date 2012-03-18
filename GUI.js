$(document).ready(function() {
	$('#next1').click(function() {
		$('#world_size').toggleClass('close_next1', 1000);
		$('#generate_items').toggleClass('open_next2', 1000);
		return false;
	});
	$('#next2').click(function() {
		$('#generate_items').toggleClass('open_next2', 500);
		$('#Go').toggleClass('open_next3', 1000);
		return false;
	});
	$(function() {
		$( "#slider-range-min" ).slider({
			range: "min",
			value: 29,
			min: 10,
			max: 70,
			slide: function( event, ui ) {
				$( "#Row" ).val( ui.value );
				$( "#row" ).text('Количество столбцов : ' + $( "#slider-range-min" ).slider( "value" ) );
			}
		});
		$( "#Row" ).css('display', 'none');
		$( "#Row" ).val( $( "#slider-range-min" ).slider( "value" ) );
		$( "#row" ).text('Количество столбцов : ' + $( "#slider-range-min" ).slider( "value" ) );
	});
	$(function() {
		$( "#slider-range-min2" ).slider({
			range: "min",
			value: 22,
			min: 10,
			max: 70,
			slide: function( event, ui ) {
				$( "#Col" ).val( ui.value );
				$( "#col" ).text('Количество колонок : ' + $( "#slider-range-min2" ).slider( "value" ) );
			}
		});
		$( "#Col" ).css('display', 'none');
		$( "#Col" ).val( $( "#slider-range-min" ).slider( "value" ) );
		$( "#col" ).text('Количество колонок : ' + $( "#slider-range-min2" ).slider( "value" ) );
	});
});
