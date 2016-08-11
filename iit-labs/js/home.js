jQuery(function($) {
	var newsSlider = setInterval(function(){ startSilder(); }, 2000);

	$('.our-news ul').hover(function() {
	  window.clearInterval(newsSlider);    
	}, function() {
	  newsSlider = window.setInterval(startSilder, 2000);
	});

	function startSilder(){
		var liH = $('.our-news li').outerHeight();
		$('.our-news li').first().animate({
	    	marginTop: '-'+liH+'px'
	    	//marginTop: '-44px'
	    },1500, function(){
	    	$('.our-news li').first().css('margin-top','0').appendTo('.our-news ul');
	    });
	}
});