if ($(window).width() < 480) {
	$('#img1').waypoint(function (direction) {
		if (direction == 'down') {
			$('#img1').css({
				"opacity": "1",
				"transform": "scale(1.2)"
			});
		} else {
			$('#img1').css({
				"opacity": "0.5",
				"transform": "scale(1)"
			});
		}

	}, {
		offset: '50%'
	});

	$('#img2').waypoint(function (direction) {
		if (direction == 'down') {
			$('#img2').css({
				"opacity": "1",
				"transform": "scale(1.2)"
			});
		} else {
			$('#img2').css({
				"opacity": "0.5",
				"transform": "scale(1)"
			});
		}

	}, {
		offset: '50%'
	});

	$('#img3').waypoint(function (direction) {
		if (direction == 'down') {
			$('#img3').css({
				"opacity": "1",
				"transform": "scale(1.2)"
			});
		} else {
			$('#img3').css({
				"opacity": "0.5",
				"transform": "scale(1)"
			});
		}

	}, {
		offset: '50%'
	});

	$('#img4').waypoint(function (direction) {
		if (direction == 'down') {
			$('#img4').css({
				"opacity": "1",
				"transform": "scale(1.2)"
			});
		} else {
			$('#img4').css({
				"opacity": "0.5",
				"transform": "scale(1)"
			});
		}

	}, {
		offset: '50%'
	});

	$('#img5').waypoint(function (direction) {
		if (direction == 'down') {
			$('#img5').css({
				"opacity": "1",
				"transform": "scale(1.2)"
			});
		} else {
			$('#img5').css({
				"opacity": "0.5",
				"transform": "scale(1)"
			});
		}

	}, {
		offset: '50%'
	});

	$('#img6').waypoint(function (direction) {
		if (direction == 'down') {
			$('#img6').css({
				"opacity": "1",
				"transform": "scale(1.2)"
			});
		} else {
			$('#img6').css({
				"opacity": "0.5",
				"transform": "scale(1)"
			});
		}

	}, {
		offset: '50%'
	});

	$('#img7').waypoint(function (direction) {
		if (direction == 'down') {
			$('#img7').css({
				"opacity": "1",
				"transform": "scale(1.2)"
			});
		} else {
			$('#img7').css({
				"opacity": "0.5",
				"transform": "scale(1)"
			});
		}

	}, {
		offset: '50%'
	});

	$('#img8').waypoint(function (direction) {
		if (direction == 'down') {
			$('#img8').css({
				"opacity": "1",
				"transform": "scale(1.2)"
			});
		} else {
			$('#img8').css({
				"opacity": "0.5",
				"transform": "scale(1)"
			});
		}

	}, {
		offset: '50%'
	});

	$('.quote-section').waypoint(function (direction) {
		if (direction == 'down') {
			$('.quote-section p').css({
				"transform": "scale(1)"
			});
		} else {
			$('.quote-section p').css({
				"transform": "scale(0.75)"
			});
		}

	}, {
		offset: '50%'
	});

}
