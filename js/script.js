$(document).ready(function(){

  $('.bxslider').bxSlider({

    slideWidth: 280,
    maxSlides:1,
    moveSlide:1,
    auto: true
    // mode: fade
  
  });

  $('.side-logo').click(function(e){
    $('.side-bar-menu').toggleClass('active');
    $('.side-bar').toggleClass('active');
  });

  var mySwiper = new Swiper('.swiper-container', {

    speed: 1200,
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: "auto",
    direction: 'vertical'

  });

  var mySwiper2 = new Swiper('.swiper-container-2', {

    direction : 'horizontal',
    loop: true,
    speed: 1200,
    slidesPerView: "auto",
    
  });
    
  var mySwiper4 = new Swiper('.swiper-container-4', {

    speed: 1200,
    grabCursor: true,
    // centeredSlides: true,
    slidesPerView: "auto",
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    
  });

  $('.swiper-container-2 .melon-tv').click(function(){
    const result = $(this).attr('data-alt'); //data-alt 가져오기
        
        $('.sec3-top-left video,.sec3-top-txt').removeClass('active');
        // $('#'+result).addClass('active');
        $(`.${result}`).addClass('active');
  });

  // let ww = $(window).width();
  // layout();
  // function layout(){
  //   if(ww <= 840){
  //     $('.m-a').attr('<br>');
  //   }
  // }

});