



	var container = document.querySelector('.gallery');
	var mixer = mixitup(container, {
	selectors: {

	    control: '[our-mix-control]'
	  }
	   });




$(document).ready(function(){


//wow

new WOW().init();


  $(".owl-carousel").owlCarousel({
  	autoplay: true,
  	autoplayTimeout: 2000,
  	smartSpeed: 300,
  	 responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }

  });

  


//Our Custom Code


$('.top').click(function(){
    $("html, body").animate({
      scrollTop: 0
    }, 3000);

});



$('.top').hide();


$(window).scroll(function(){
   var ourWindow = $(this).scrollTop();
   if(ourWindow<500) {
    $('.top').fadeOut();

   } else {
    $('.top').fadeIn();
  }
     
  //Menu Fixed
  if(ourWindow>100) {
    $('body').addClass('fixed');
  } else {
    $('body').removeClass('fixed');
  }

 });


$('.navbar-nav li').click(function(){
$(this).addClass('active').siblings().removeClass('active')

});


$('.navbar-nav a[href^="#"]').click(function(e){
  e.preventDefault();

  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top - 75
  }, 500);

});







});
