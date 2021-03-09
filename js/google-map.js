/* eslint-disable no-unused-vars */
var forest_blue = (window.getComputedStyle(document.documentElement).getPropertyValue('--forest-blue')).trim();

// Load google map
function loadScript() {
//	console.log("Map init");
//	console.log(forest_blue);
	$.ajax({
		type: "GET",
		url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ6apCT_bhlnBNpUJxJ5_qVr4nHdL-FkQ&callback=initMap",
		dataType: "script"
	});
}

var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('google-maps'), {
		center: {
			lat: 46.937161,
			lng: 9.680167
		},
		zoom: 15,
		styles: [
			{
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 12
                    },
					{
						"color": forest_blue
                    },
					{
						"lightness": 80
                    }
                ]
            },
			{
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
                    },
					{
						"color": forest_blue
                    },
					{
						"lightness": 16
                    }
                ]
            },
			{
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "on"
                    },
					{
						"Lightness": -20
                    }
                ]
            },
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": forest_blue
                    },
					{
						"lightness": 20
                    }
                ]
            },
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": forest_blue
                    },
					{
						"lightness": 17
                    },
					{
						"weight": 1.2
                    }
                ]
            },
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": forest_blue
                    },
					{
						"lightness": 20
                    }
                ]
            },
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": forest_blue
                    },
					{
						"lightness": 25
                    }
                ]
            },
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": forest_blue
                    },
					{
						"lightness": 10
                    }
                ]
            },
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": forest_blue
                    },
					{
						"lightness": 100
                    },
					{
						"weight": 0.2
                    }
                ]
            },
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": forest_blue
                    },
					{
						"lightness": 1
                    }
                ]
            },
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": forest_blue
                    },
					{
						"lightness": 1
                    }
                ]
            },
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": forest_blue
                    },
					{
						"lightness": 100
                    }
                ]
            },
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": forest_blue
                    },
					{
						"lightness": 100
                    }
                ]
            }
        ]
	});


	if ($(window).width() > 991) {
		var ardorPin = {
			url: "img/map-img.png"
		};

	} else {
		var ardorPin = null;
	}

	var marker = new google.maps.Marker({
		position: map.getCenter(),
		icon: ardorPin,
		map: map,
		animation: google.maps.Animation.BOUNCE,
	});


	google.maps.event.addDomListener(marker, 'click', function () {
		window.open("https://goo.gl/maps/NokhjwdeTSRDoJWb6", "_blank");
	});

}


$(window).on('load', function () {
	setTimeout(function () {
		try {
			loadScript();
		} catch (err) {
			console.log(err);
		}
	}, 1000);
});
