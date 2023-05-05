$(function () {
	$("body").ready(function () {
		$.getJSON("http://0.0.0.0:5001/api/v1/status/", function (response) {
			if (response.status === "OK") {
				$("div#api_status").addClass("available");
				console.log(response.status);
				// $("header").append("<div>response.status</div>");
			} else {
				$("div#api _status").removeClass("available");
			}
		});
	});
});
