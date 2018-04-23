$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 350){
			$(".Top_button").fadeIn();
		} else {
			$(".Top_button").fadeOut();
		}
	});

	$(".Top_button").click(function(){
		$("html, body").animate({
			scrollTop:0
		}, 1100)
	});
});