/*
common script
*/
$(function(){
  $('.gnb-toggle-btn').on('click',function(){
    $('#menu-wrap').toggleClass('on');
    $('body').toggleClass('blur');
    if($('body').hasClass('blur')){
      $('body').prepend('<div class="overlay"></div>');
    }else{
      $('.overlay').remove();
    }
  })
});

$(window).resize(function(){
  $('#menu-wrap').removeClass('on');
  $('body').removeClass('blur');
  $('.overlay').remove();
});

$(window).scroll(function(){
  let thisTop = $(this).scrollTop();
  let windowHeight = $(window).innerHeight();
  if( thisTop > windowHeight*0.8 - 110 ) {
      $('header .inner').addClass('over');
  }else{
    $('header .inner').removeClass('over');
  }
});
// const gnbTBtn = document.querySelector('.gnb-toggle-btn');
//
// function gTBFunc(elem) {
//   elem.addEventListener('click', function(event){
//     event.preventDefault();
//     document.querySelector('#menu-wrap').classList.toggle('on');
//   })
// }
//
// gTBFunc(gnbTBtn);

var swiper = new Swiper(".charactor", {
  speed: 4000,
  slidesPerView: 3,
  autoplay: {
    //delay: 0,
    //disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
// swiper.setProgress(1, 4000)
