// CARTAS

$(".card").flip();

$('.pgn23 .botonUnir_1, .pgn23 .botonUnir_2').click(function(){
	$('.botonUnir_1, .botonUnir_2').removeClass('bien');
	$(this).addClass('bien');
	$('.botonUnir_1, .botonUnir_2').parent('td').removeClass('bien');
	$(this).parent('td').addClass("bien");
});
$(document).ready(function(){
	$('.botonUnir_1').hasClass('.bien');
	$('.botonUnir_1.bien').parent('td').addClass("bien");
})
// -----
// CAMBIO GENERAL-BUTTON Y TRUE-FALSE

$('.general-button').click(function(){
	$(this).toggleClass('sel');
});
$('.true').click(function(){
    $(this).toggleClass('sel');
});
// BOTONES ESPECIALES MODULO 3
$('.boton.azul').click(function(){
    $(this).toggleClass('sel');
});
$('.boton.naranja').click(function(){
    $(this).toggleClass('sel');
});


// -----
// SELECT

$("select").change(function(){
    $(this).parent('label').addClass('sel');
});

// -----
// DRAG & DROP

$(document).ready(function(){

	$('.drag' ).draggable({
      	containment: '#content',
      	cursor: 'move',
      	revert: true
	});

	$('.drop' ).droppable( {
      	hoverClass: 'hovered',
      	drop: handleCardDrop
	});
	$('.drag.bien').draggable('disable');
	$('.drag.mal').draggable('disable');
});

function handleCardDrop( event, ui ) {
	ui.draggable.draggable( 'disable' );
	$(this).droppable( 'disable' );
	ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
	ui.draggable.draggable( 'option', 'revert', false );
}

// -----
// BOTON NOTICE

$(document).ready(function(){
	$('.boton.notice img').css('display', 'none');
	// $('.boton.notice div.cont').css('display', 'none');
	$('.boton.notice').click(function(){
		// elementos
		imgpop = $(this).find("img");
		divpop = $(this).find("div.cont");

		imgpop.addClass('animated');
		imgpop.attr('draggable','false');
		divpop.addClass('animated');
		// imagen
		if(!$(imgpop).is(":visible")){
			$(imgpop).css("display","block");
			$(imgpop).addClass('bounceIn');
		}else{
			$(imgpop).css("display","none");
			$(imgpop).addClass('bounceIn');
		}
		// div
		if(!$(divpop).is(":visible")){
			$(divpop).toggle();
			$(divpop).click(false);
			$(divpop).addClass('bounceIn');
		}else{
			$(divpop).css("display","none");
			$(divpop).addClass('bounceIn');
		}
	});
});

// -----
// BOTON HELP

$(document).ready(function(){
	$('.boton.help img').css('display', 'none');
	$('.boton.help div.cont').css('display', 'none');
	$('.boton.help').click(function(){
		imgpop = $(this).find("img");
		divpop = $(this).find("div.cont");
		imgpop.addClass('animated');
		imgpop.attr('draggable','false');
		divpop.addClass('animated');
		// imagen
		if(!$(imgpop).is(":visible")){
			$(imgpop).css("display","block");
			$(imgpop).addClass('bounceIn');
		}else{
			$(imgpop).css("display","none");
			$(imgpop).addClass('bounceIn');
		}
		// div
		if(!$(divpop).is(":visible")){
			$(divpop).css("display","block");
			$(divpop).addClass('bounceIn');
		}else{
			$(divpop).css("display","none");
			$(divpop).addClass('bounceIn');
		}
	});
});

// ----- sortable

$(function() {
   $( ".sortable" ).sortable();
   $( ".sortable" ).disableSelection();
 });
