/*
common script
*/
$(function(){
  // initialize
  function itemsResetWidth(width) {
    $('.magazine .items').width(width);
    $('.magazine .box-items-wrap').height($('.magazine .items-inner').height() + 18 );
  }

  if( $(window).innerWidth() <= 1280 ) {
    let halfwindowWidth = $(window).innerWidth()/2 + 10;
    itemsResetWidth(halfwindowWidth);
  }else if( $(window).innerWidth() > 1280 ){
    itemsResetWidth(250);
  }

  $(window).resize(function(){
    if( $(window).innerWidth() <= 1280 ) {
      halfwindowWidth = $(window).innerWidth()/2 + 10;
      itemsResetWidth(halfwindowWidth);
    }else if( $(window).innerWidth() > 1280 ){
      itemsResetWidth(250);
    }
  });

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
        $('#dt-menu-wrap').addClass('over');
    }else{
      $('#dt-menu-wrap').removeClass('over');
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
var VIDEO_PLAYING_STATE = {
  "PLAYING": "PLAYING",
  "PAUSE": "PAUSE"
}
var videoPlayStatus = VIDEO_PLAYING_STATE.PAUSE
var timeout = null
var waiting = 3000

var mbswiper = new Swiper("#main-banner-swiper", {
  speed: 2500,
  slidesPerView: 1,
  spaceBetween: 0,
  // loop: true,
  mousewheel: true,
  autoplay: {
    // delay: 0,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".mb-button-next",
    prevEl: ".mb-button-prev"
  }
});

// HTML5 vdo object
var options = {};
var player = videojs('demo', options);
player.on('ended', function() {
  next()
})




// swiper object
mbswiper.on('slideChangeTransitionEnd', function () {
  var index = mbswiper.activeIndex
  var currentSlide =   $(mbswiper.slides[index])
  var currentSlideType = currentSlide.data('slide-type')

  // incase user click next before video ended
  if (videoPlayStatus === VIDEO_PLAYING_STATE.PLAYING) {
    player.pause()
  }

  clearTimeout(timeout)

  switch (currentSlideType) {
    case 'img':
      runNext()
      break;
    case 'video':
      player.currentTime(0)
      player.play()
      videoPlayStatus = VIDEO_PLAYING_STATE.PLAYING
      break;
    default:
      throw new Error('invalid slide type');
  }
})

// global function
function prev() {
  swiper.slidePrev();
}

function next() {
  swiper.slideNext();
}

function runNext() {
  timeout = setTimeout(function () {
    next()
  }, waiting)
}

runNext()

var swiper = new Swiper("#charactor", {
  speed: 2500,
  slidesPerView: 1,
  spaceBetween: 50,
  // loop: true,
  mousewheel: true,
  // autoplay: {
  //   delay: 0,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 20
    // },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    // when window width is >= 640px
    780: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

swiper.on('slideChange', function () {
  console.log('slide changed');
  console.log(swiper.realIndex)
});

// swiper.setProgress(1, 4000)
