/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */

$(function() {
	$('.circle').mouseover(function() {
		$(".whiteboard").removeClass("hidden");
		$(".whiteboard > img").attr("src", $(this).parents(".maidens").find(".the_image").html());
		$(".whiteboard .name").html($(this).parents(".maidens").find(".the_name").html());
		$(".whiteboard > p").html($(this).parents(".maidens").find(".the_text").html());

		posWhiteboard();
	})
	// $('.circle').mouseout(function() {
	// 	var cls = $(this).attr('id');
	// 	$('div.'+ cls).addClass('hidden');
	// });

	$(window).scroll(function () {
		posWhiteboard();
	});
});

function posWhiteboard() {
	var el = $(".whiteboard:not(.hidden)");
	if (el.length) {
		var el_pos = $(".tube.details").offset();
		var top_space = $("nav").outerHeight() + 20;
		if ($(window).scrollTop()+top_space > el_pos.top) {
			el.css("margin-top", (($(window).scrollTop()-el_pos.top)+top_space)+"px");
		} else {
			el.css("margin-top", "0px");
		}
	}

}

// Initialize and add the map
function initMap() {
  // The location of dickensinn
  var dickensinn = {lat: 51.507038, lng: -0.070199};
  // The map, centered at dickensinn
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 16, center: dickensinn});
  // The marker, positioned at dickensinn

  var marker = new google.maps.Marker({position: dickensinn, map: map});
}



    
  