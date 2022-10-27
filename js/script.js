$(document).ready(function(){

  $('.bxslider').bxSlider({

    slideWidth: 280,
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

    direction : 'horizontal',
    loop: false,
    speed: 1200,
    slidesPerView: "auto",
    controller: {
      control: mySwiper3
    },
    // on: {
    //   transitionStart: function(){
        
    //     var videos = document.querySelectorAll('video');
  
    //     Array.prototype.forEach.call(videos, function(video){
    //       video.pause();
    //     });
    //   },
      
    //   transitionEnd: function(){
        
    //     var activeIndex = this.activeIndex;
    //     var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
    //     var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
    //     activeSlideVideo.play();
      
    //   },
    
    // }

    on: {
      activeIndexChange: function () {
        var videos = document.querySelectorAll('video');  //수정
        $('video').eq(this.realIndex).video.pause();
      }
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
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    
  });

  $('.swiper-container-2 .melon-tv').click(function(){
    
  });

});