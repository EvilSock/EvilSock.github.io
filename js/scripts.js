/* 
Color schemes
1:
-------------------------
rgba(249, 213, 136,0)
#F9D588
-------------------------
2:
-------------------------
rgba(170, 192, 216, 0)
#5B90BE
-------------------------
#007cc7
=========================

*/

var myCarousel = document.querySelector('#carouselExampleControls')

var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 6000,
    wrap: true,
    ride:  true
  })

$(document).on("mousewheel",()=>{
  if ($(document).scrollTop() <= 20 && $(window).width() >= 995){
		console.log("bruh")
		$(".color").css({
			// "background-color":"rgba(235, 235, 235,0)" //navbar color
			"background-color":"rgba(0, 124, 199, 0)"
	});
	} else {
		$(".color").css({
			"background-color":"#007cc7"
	});
	}
});

$(document).on("scroll",()=>{
  if ($(document).scrollTop() <= 20 && $(window).width() >= 995){
		console.log("bruh")
		$(".color").css({
			// "background-color":"rgba(235, 235, 235,0)" // navbar color
			"background-color":"rgba(0, 124, 199, 0)"
		});
	} else {
		$(".color").css({
			// "background-color":"#ebebeb"
			"background-color":"#007cc7" //navbar color
	});
	}
});

