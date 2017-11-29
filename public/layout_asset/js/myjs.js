$(document).ready(function(){
	var stt = 0;
	$(".rsSlide").each(function(){
		if($(this).is(':visible'))
			stt = $(this).attr("stt");
	});
	$("#next").click(function(){
		next = ++stt;
		$(".rsSlide").hide();
		$(".rsSlide").eq(next).show();
	});
});