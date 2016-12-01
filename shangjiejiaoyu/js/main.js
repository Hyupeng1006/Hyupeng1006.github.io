$(function() {
	window.onload = function() {
			setTimeout(function() {
				$(".centerwindow").addClass("show");
			}, 3000);
		}
	$(".centerwindow .btn").click(function() {
				$(".centerwindow").stop().fadeOut(300);
			});
	//左侧边栏效果开始
	$(window).scroll(function() {
		if($(window).scrollTop() > 80) {
			$(".leftfixed .six").stop().fadeIn();
		} else {
			$(".leftfixed .six").stop().fadeOut();
		}
	})
	$(".leftfixed .six").click(function() {
		$("html,body").animate({
			"scrollTop": 0
		}, 500);
	});
	//右侧边栏效果开始
	var clicknum = 1;
	$(".rightfixed .btn").click(function() {
		if(clicknum % 2 == 1) {
			$(".rightfixed").stop().animate({
				"right": -120
			}, 300);
		} else {
			$(".rightfixed").stop().animate({
				"right": 0
			}, 300);
		}
		clicknum++;
	});
});