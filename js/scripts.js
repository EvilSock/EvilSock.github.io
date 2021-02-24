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
			"background-color":"rgba(235, 235, 235,0)"
	});
	} else {
		$(".color").css({
			"background-color":"#ebebeb"
	});
	}
});

$(document).on("scroll",()=>{
  if ($(document).scrollTop() <= 20 && $(window).width() >= 995){
		console.log("bruh")
		$(".color").css({
			"background-color":"rgba(235, 235, 235,0)"
	});
	} else {
		$(".color").css({
			"background-color":"#ebebeb"
	});
	}
});

