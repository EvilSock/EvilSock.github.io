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
  });

function fadeNav(color, color_faded) {
  if ($(document).scrollTop() <= 20 && $(window).width() >= 995){
	$(".color").css({
		"background-color":color_faded
	});
	} else {
		$(".color").css({
			"background-color":color 
		
		});
	}
}


/*
****** change color scheme here with switch case statement **********
*/
$(document).on("mousewheel",()=>{
	var color = ""
	var color_faded = ""

	var str = document.getElementById("schemes").value;
	switch (str){
		case '1': 
			color = "#007cc7"
			color_faded = "rgba(0, 124, 199, 0)"
			break;
		case '2': 
			color = "rgba(156, 200, 174, 1)"
			color_faded = "rgba(156, 200, 174, 0)"
			break;
		case '3': 
			color = "rgba(129, 166, 131, 1)"
			color_faded = "rgba(129, 166, 131, 0)"
			break;
		case '4': 
			color = "rgb(255, 199, 101)"
			color_faded = "rgba(255, 199, 101,0)"
			break;
		case '5': 
			color = "rgba(43, 122, 119, 1)"
			color_faded = "rgba(43, 122, 119, 0)"
			break;
		default:
			alert("The dev has no idea how you got here. Well done lol"); 
	}


	fadeNav(color,color_faded);
});

$(document).on("scroll",()=>{
	var color = ""
	var color_faded = ""
	var str = document.getElementById("schemes").value;
	switch (str){
		case '1': 
			color = "#007cc7"
			color_faded = "rgba(0, 124, 199, 0)"
			break;
		case '2': 
			color = "rgba(156, 200, 174, 1)"
			color_faded = "rgba(156, 200, 174, 0)"
			break;
		case '3': 
			color = "rgba(129, 166, 131, 1)"
			color_faded = "rgba(129, 166, 131, 0)"
			break;
		case '4': 
			color = "rgb(255, 199, 101)"
			color_faded = "rgba(255, 199, 101,0)"
			break;
		case '5': 
			color = "rgba(43, 122, 119, 1)"
			color_faded = "rgba(43, 122, 119, 0)"
			break;
		default:
			alert("The dev has no idea how you got here. Well done lol"); 
	}
	fadeNav(color,color_faded);
});
/*
***************************************************
*/

function scheme1() {
	console.log("we here");
	$(".grad1").css({
		"background":"linear-gradient(125deg,#eefbfb 0%,#eefbfb 40%,#b2fcff calc(40% + 1px),#b2fcff 60%,#5edfff calc(60% + 1px),#5edfff 72%,#3e64ff calc(72% + 1px),#3e64ff 100%);"
	});
	$(".btn-custom").css({
		"background-color": "#12232e"
	});
	$(".color").css({
		"background-color": "rgba(235, 235, 235, 0)"
	});
	$(".card-custom").css({
		"background-color": "#dafdfd"
	});
}

function scheme2(){
	$(".grad1").css({
		"background":"linear-gradient(125deg,#f2b249 0%,#f2b249 40%,#9cca8e calc(40% + 1px),#9cca8e 60%,#4e7854 calc(60% + 1px),#4e7854 72%,#184b41 calc(72% + 1px),#184b41 100%)"
	});
	$(".btn-custom").css({
		"background-color": "#f2b249"
	});
	$(".color").css({
		"background-color": "#9cc8ae"
	});
	$(".card-custom").css({
		"background-color": "#9cca8e"
	});
}

function scheme3(){
	$("body").css({
		"background-color":"#d3c087"
	});
	$(".grad1").css({
		"background":"linear-gradient(125deg,#d3c087 0%,#d3c087 40%,#b6ccac calc(40% + 1px),#b6ccac 60%,#81a983 calc(60% + 1px),#81a983 72%,#426152 calc(72% + 1px),#426152 100%)"
	});
	$(".btn-custom").css({
		"background-color": "#426152"
	});
	$(".color").css({
		"background-color": "rgba(129, 166, 131, 1)"
	});
	$(".card-custom").css({
		"background-color": "#b6ccac"
	});
}

function scheme4(){
	$(".grad1").css({
		"background":"linear-gradient(125deg,#eefbfb 0%,#eefbfb 40%,#4da9da calc(40% + 1px),#4da9da 60%,#203546 calc(60% + 1px),#203546 72%,#10242f calc(72% + 1px),#10242f 100%)"
	});
	$(".btn-custom").css({
		"background-color": "#ca786d"
	});
	$(".color").css({
		"background-color": "rgb(255, 199, 101)"
	});
	$(".card-custom").css({
		"background-color": "#4da9da"
	});
}

function scheme5(){
	$("body").css({
		"background-color":"#def2f1"
	})
	$(".grad1").css({
		"background":"linear-gradient(125deg,#def2f1 0%,#def2f1 40%,#3aafa9 calc(40% + 1px),#3aafa9 60%,#2b7a77 calc(60% + 1px),#2b7a77 72%,#17242a calc(72% + 1px),#17242a 100%)"
	});
	$(".btn-custom").css({
		"background-color": "#17242a"
	});
	$(".color").css({
		"background-color": "rgba(43, 122, 119, 1)"
	});
	$(".card-custom").css({
		"background-color": "#3aafa9"
	});
}

function clearCss(){
	console.log("we here");
	$(".grad1").css({
		"background":""
	});
	$(".btn-custom").css({
		"background-color": ""
	});
	$(".color").css({
		"background-color": ""
	});
	$(".card-custom").css({
		"background-color": ""
	});
	$("body").css({
		"background-color":"#eefbfb"
	});
}

function changeColorScheme() {
	var str = document.getElementById("schemes").value;
	switch (str){
		case '1': 
			clearCss();
			scheme1();
			break;
		case '2': 
			clearCss();
			scheme2();
			break;
		case '3': 
			clearCss();
			scheme3();
			break;
		case '4': 
			clearCss();
			scheme4();
			break;
		case '5': 
			clearCss();
			scheme5();
			break;
		default:
			alert("The dev has no idea how you got here. Well done lol");
	}
}
