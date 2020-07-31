$(function () {
	var top_btn = $('.backtotop');
	top_btn.hide();
	$(window).scroll(function () {
		if ($(window).scrollTop() < 100) {
			top_btn.hide();
		} else {
			top_btn.show();
		}
	})
});
