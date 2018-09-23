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
		var cls = $(this).attr('id');
		$('div.'+ cls).removeClass('hidden');
	})
	$('.circle').mouseout(function() {
		var cls = $(this).attr('id');
		$('div.'+ cls).addClass('hidden');
	})
});

$(function() {
	$('.circle_2').mouseover(function() {
		var cls = $(this).attr('id');
		$('div.'+ cls).removeClass('hidden');
	})
	$('.circle_2').mouseout(function() {
		var cls = $(this).attr('id');
		$('div.'+ cls).addClass('hidden');
	})
})

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



    
  