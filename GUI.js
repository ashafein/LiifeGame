$(document).ready(function() {
	$('#poligon').hide();
	$('#next1').click(function() {
		$('#generate_items').toggleClass('open_next2', 1000);
		$('#controls').animate({width:'1210px'}, 1000);
		$('#next1').hide('slow');
		return false;
	});
	$('#next2').click(function() {
		$('#Go').toggleClass('open_next3', 1000);
		$('#controls').animate({width:'1210px'}, 1000);
		$('#next2').hide('slow');
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
			value: 29,
			min: 10,
			max: 70,
			slide: function( event, ui ) {
				$( "#Col" ).val( ui.value );
				$( "#col" ).text('Количество колонок : ' + $( "#slider-range-min2" ).slider( "value" ) );
			}
		});
		$( "#Col" ).css('display', 'none');
		$( "#Col" ).val( $( "#slider-range-min2" ).slider( "value" ) );
		$( "#col" ).text('Количество колонок : ' + $( "#slider-range-min2" ).slider( "value" ) );
	});
	$(function() {
		$( "#slider-range-min3" ).slider({
			range: "min",
			value: 1,
			min: 1,
			max: 10,
			slide: function( event, ui ) {
				$( "#Time" ).val( ui.value );
				$( "#time" ).text('Скорость одного шага : ' + $( "#slider-range-min3" ).slider( "value" ) );
			}
		});
		$( "#Time" ).css('display', 'none');
		$( "#time" ).val( $( "#slider-range-min3" ).slider( "value" ) );
		$( "#time" ).text('Скорость одного шага : ' + $( "#slider-range-min3" ).slider( "value" ) );
	});
	$(function() {
		$( "#slider-range-min4" ).slider({
			range: "min",
			value: 1,
			min: 1,
			max: 10,
			slide: function( event, ui ) {
				$( "#Plot" ).val( ui.value );
				$( "#plot" ).text('Плотность заселения : ' + $( "#slider-range-min3" ).slider( "value" ) );
			}
		});
		$( "#Plot" ).css('display', 'none');
		$( "#plot" ).val( $( "#slider-range-min4" ).slider( "value" ) );
		$( "#plot" ).text('Плотность заселения : ' + $( "#slider-range-min4" ).slider( "value" ) );
	});
});
