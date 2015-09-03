jQuery(window).on('load',function(){
  	$('.carousel-first').bxSlider({
  		mode:'horizontal',
  		speed: 2000,
  		auto: false,
  		pause: 100,
      nextSelector: $('.next-carousel'),
      prevSelector: $('.prev-carousel'),
      pagerSelector: $('.pager-carousel')
  	});
});
jQuery(function(){
	jQuery('.menu-but').on('click', function(){
		if(!jQuery(this).hasClass('active')){
			jQuery(this).next().slideDown('fast');
			jQuery(this).addClass('active');
		} else {
			jQuery(this).next().slideUp('fast');
			jQuery(this).removeClass('active');
		}
	});
});