var webnote = false;

$(document).ready(function() {
	$('#webnote_toggle').bind('click', function() {
		webnote = !webnote;
		console.log(webnote);

		if (webnote) {
			$('.block_note').css('display', 'block');
		} else {
			$('.block_note').css('display', 'none');
		}
	});
});
