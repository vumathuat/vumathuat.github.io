var posX = 0, posY = 0
var moveX = 0, moveY = 0

function dragstart_body_handler(evt) {
	posX = evt.clientX
	posY = evt.clientY
}

function dragover_body_handler(evt) {
	moveX = evt.clientX - posX 
	moveY = evt.clientY - posY


	$('body')
		.css('margin-left', (parseInt($('body').css('margin-left'))+moveX) + 'px')
		.css('margin-top', (parseInt($('body').css('margin-top'))+moveY) + 'px')

	posX = evt.clientX
	posY = evt.clientY
}

function drop_body_handler(evt) {
	posX = 0
	posY = 0
}

$(document).read(function() {
	$('img').prop('draggable', false);
})