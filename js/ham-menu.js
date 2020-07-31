$(document).ready(function () {
	$('.open-button').click(function () {
		$(this).toggleClass('open');
	})


	$('.open-button').click(function (e) {
		e.preventDefault();
		$('.nav-menu').toggleClass('open close');

	})
});


$(document).ready(function () {
	$('.nav-menu a').click(function () {
		$('.nav-menu').toggleClass('open close');
		$('.open-button').removeClass('open');
	})

});
