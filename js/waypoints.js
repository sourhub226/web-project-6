if ($(window).width() < 480) {
	document.querySelectorAll(".gallery-section div img").forEach(function (img) {
		new Waypoint({
			element: img,
			handler: function (direction) {
				if (direction == 'down') {
					img.style.opacity = "1";
					img.style.transform = "scale(1.2)";
				} else {
					img.style.opacity = "0.5";
					img.style.transform = "scale(1)";
				}
			},
			offset: '60%'
		})
	})

	new Waypoint({
		element: document.querySelector(".quote-section"),
		handler: function (direction) {
			if (direction == 'down') {
				document.querySelector(".quote-section p").style.transform = "scale(1)";
			} else {
				document.querySelector(".quote-section p").style.transform = "scale(0.75)";
			}
		},
		offset: '50%'
	})

}
