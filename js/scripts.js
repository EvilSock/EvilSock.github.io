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
var color = "#007cc7"
var color_faded = "rgba(0, 124, 199, 0)"




  if ($(document).scrollTop() <= 20 && $(window).width() >= 995){
		$(".color").css({
			// "background-color":"rgba(235, 235, 235,0)" //navbar color
			"background-color":color_faded
	});
	} else {
		$(".color").css({
			"background-color":color
	});
	}
});

$(document).on("scroll",()=>{
	var color = "#007cc7"
	var color_faded = "rgba(0, 124, 199, 0)"




  if ($(document).scrollTop() <= 20 && $(window).width() >= 995){
		$(".color").css({
			// "background-color":"rgba(235, 235, 235,0)" // navbar color
			"background-color":color_faded
		});
	} else {
		$(".color").css({
			// "background-color":"#ebebeb"
			"background-color":color //navbar color
			
	});
	}
});


function changeColorScheme() {
	switch (document.getElementById("schemes").value){
		case "1" : 
			window.location.href= "../index.html";
			console.log(document.getElementById("schemes").value);
		case "2" : 
			window.location.href = "n2.html";
	}
}
