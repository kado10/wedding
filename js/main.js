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

	var current_circle = null;

	$('.circle').mouseover(function() {
		$(".circle").removeClass("active");
		$(this).addClass("active");
		current_circle = $(this);

		// Reset all whiteboard elements to hidden
		$(".mobile_whiteboard_wrapper").slideUp(300, function() {
			$(this).remove();
			$("body").addClass("no_scroll");
		});

		setTimeout(function() {
			$("body").addClass("no_scroll");
			applyCircleData();

		}, 300); // Timeout for the slide up animation

		posWhiteboard();
	})
	// $('.circle').mouseout(function() {
	// 	var cls = $(this).attr('id');
	// 	$('div.'+ cls).addClass('hidden');
	// });

	$("body").scroll(function () {
		console.log($("body").scrollTop());
		posWhiteboard();
	});

	var resize_interval = null;
	var last_size = $("body").width();
	$(window).resize(function () {

		last_size = $("body").width();

		if (resize_interval != null) {
			clearTimeout(resize_interval);
			resize_interval = null;
		} else {
			doWindowResize();
		}

		resize_interval = setTimeout(function() {
			resize_interval = null;

			if ($("body").width() != last_size) {
				doWindowResize();
			}

		}, 700);
	});

	function doWindowResize() {

		console.log("resize");


		// Reset all whiteboard elements to hidden
		$(".mobile_whiteboard_wrapper").slideUp(300, function() {
			$(this).remove();
			$("body").addClass("no_scroll");
		});

		setTimeout(function() {
			$("body").removeClass("no_scroll");
			applyCircleData();

		}, 300); // Timeout for the slide up animation
	}

	function applyCircleData() {

		// Is a circle selected? If not end here.
		if (current_circle == null) return;


		var body_width = $("body").outerWidth();

		var top_space = $("nav").outerHeight();

		$(".mobile_whiteboard_wrapper").remove();

		if (body_width < 1200) { // less than desktop

			var whiteboard_template = '\
				<div class="mobile_whiteboard_wrapper">\
					<div class="mobile_whiteboard whiteboard">\
						<img class=tube_symbol src=""><h4 class="name"></h4>\
						<p></p>\
					</div>\
				</div>\
			';

			// Find the next madian that is visually below this one
			var insert_before_maiden = null;
			var this_maiden = current_circle.parent();
			while (true) {
				var next_maiden = this_maiden.next().next();
				if (next_maiden.length > 0) {
					if (next_maiden.offset().top > this_maiden.offset().top) {
						insert_before_maiden = next_maiden;
						break;
					} else {
						this_maiden = next_maiden
					}
				} else {
					break;
				}
			}
			console.log(this_maiden, insert_before_maiden);
			if ((insert_before_maiden == null) || (insert_before_maiden.length == 0)) {
				$(this_maiden.parent()).append(whiteboard_template);
			} else {
				$(whiteboard_template).insertBefore(insert_before_maiden);
			}

			var mobile_whiteboard_wrapper = $(".mobile_whiteboard_wrapper");


			var whiteboard_element = mobile_whiteboard_wrapper.find("> .whiteboard");

			setWhiteboardData(current_circle, whiteboard_element);

			// Show after data is set
			mobile_whiteboard_wrapper.slideDown(300, function() {

				var mobile_whiteboard_wrapper_offset = mobile_whiteboard_wrapper.offset();

				console.log(this_maiden.offset().top);

				$('body').animate({
					scrollTop: this_maiden.offset().top + $("body").scrollTop() - top_space
				}, 700);

				setTimeout(function() {
					$("body").removeClass("no_scroll");
				}, 700);

			});


		} else { // For desktop
			$("body").removeClass("no_scroll");
			var whiteboard_element = $(".details.tube .whiteboard");
			setWhiteboardData(current_circle, whiteboard_element);
			whiteboard_element.removeClass("hidden");
		}



	}


	function setWhiteboardData(circle_element, whiteboard_element) {
		whiteboard_element.find("> img").attr("src", circle_element.parents(".maidens").find(".the_image").html());
		whiteboard_element.find(".name").html(circle_element.parents(".maidens").find(".the_name").html());
		whiteboard_element.find("> p").html(circle_element.parents(".maidens").find(".the_text").html());
	}

	function posWhiteboard() {
		var el = $(".details.tube > .whiteboard:not(.hidden)");
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
});


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





// fire off the request to /form.php
       // request = $.ajax({
         //   url: "https://script.google.com/macros/s/AKfycbzXVwvl3BUdy60Yi3QsPj7NnNuv6fgI07cEqFL59wDla9VZ-T8/exec",
           // type: "post",
            //data: serializedData
       // });


  function openForm() {
	$("#myForm").css("display", "flex");
 }

function closeForm() {
	$("#myForm").hide();
	return false;
}