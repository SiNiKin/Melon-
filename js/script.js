$(document).ready(function(){

  $('.bxslider').bxSlider({

    slideWidth: 360,
    maxSlides:1,
    moveSlide:1,
    auto: true
    // mode: fade
  
  });

  $('.side-logo').click(function(){
    $('.side-bar-menu').toggleClass('active');
  });

  var mySwiper = new Swiper('.swiper-container', {

    speed: 1200,
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: "auto",
    direction: 'vertical'

  });

  var mySwiper2 = new Swiper('.swiper-container-2', {

    speed: 1200,
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: "auto",
    controller: {
      control: mySwiper3
    }
    
  });

  var mySwiper3 = new Swiper('.swiper-container-3', {

    speed: 1200,
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: "auto",
    controller: {
      control: mySwiper2
    }
    
  });
  
  mySwiper2.controller.control = mySwiper3;
  mySwiper3.controller.control = mySwiper2;
    
  var mySwiper4 = new Swiper('.swiper-container-4', {

    speed: 1200,
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: "auto",
    
  });

});