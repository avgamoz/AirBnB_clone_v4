$(function () {
	$("body").ready(function () {
		// $.getJSON("http://0.0.0.0:5001/api/v1/status/", function (response) {
		// 	if (response.status === "OK") {
		// 		$("div#api_status").addClass("available");
		// 		console.log(response.status);
		// 		// $("header").append("<div>response.status</div>");
		// 	} else {
		// 		$("div#api _status").removeClass("available");
		// 	}
		// });
		$.ajax({
			url: "http://0.0.0.0:5001/api/v1/places_search",
			type: "POST",
			beforeSend: function (xhr) {
				xhr.setRequestHeader("Content-Type", "application/json");
			},
			data: JSON.stringify({}),
			// headers: {
			// "Content-Type": "application/json",
			// },
			dataType: "json",
			success: function (data) {
				console.log(data);
				for (let place of data) {
					$(".places").append(`
                    <article>
					<div class="title_box">
						<h2>${place.name}</h2>
						<div class="price_by_night">$${place.price_by_night}</div>
					</div>
					<div class="information">
						<div class="max_guest">
							${place.max_guest} Guest${place.max_guest === 1 ? "" : "s"}
						</div>
						<div class="number_rooms">
							${place.number_rooms} Bedroom${place.number_rooms === 1 ? "" : "s"}
						</div>
						<div class="number_bathrooms">
							${place.number_bathrooms} Bathroom${place.number_bathrooms === 1 ? "" : "s"}
						</div>
					</div>
					
					<div class="description">${
						place.description === null ? "None" : place.description
					}</div>
				</article>
                    `);
				}
			},
		});
	});
});
