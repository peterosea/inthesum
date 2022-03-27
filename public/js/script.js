/*
common script
*/
$(function(){

  $('.gnb-toggle-btn').on('click',function(e){
    $('#m-gnb ul li').removeClass('active');
    $('.m-menu').toggleClass('on');
    $('body').toggleClass('blur');
    if($('body').hasClass('blur')){
      $('#mobile-menu-wrap').prepend('<div class="overlay"></div>');
    }else{
      $('#mobile-menu-wrap .overlay').remove();
    }
    e.preventDefault();
    return false
  });

  //mobile
  $('#m-gnb ul li').on('click', function(){
    $('#m-gnb ul li').removeClass('active');
    $(this).addClass('active');
  });

  $(window).resize(function(){
    $('.m-menu').removeClass('on');
    $('#m-gnb ul li').removeClass('active');
    // $('#mobile-menu-wrap').removeClass('active');
    $('body').removeClass('blur');
    $('#mobile-menu-wrap .overlay').remove();
  });

  $(window).scroll(function(){
    let thisTop = $(this).scrollTop();
    let windowHeight = $(window).innerHeight();
    if( thisTop > windowHeight*0.8 - 110 ) {
        $('#mobile-menu-wrap').addClass('over');
    }else{
      $('#mobile-menu-wrap').removeClass('over');
    }
    //mobile
    if( thisTop > 0 ) {
      $('#mobile-menu-wrap').addClass('active');
    }else{
      $('#mobile-menu-wrap').removeClass('active');
    }
  });

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
