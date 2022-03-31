/*
common script
*/

window.onload = function(){
  const mMenu = document.querySelector('.m-menu');
  const gtb = document.querySelectorAll('.gnb-toggle-btn');
  const bodyElem = document.querySelector('body');
  const mgnbLi = document.querySelectorAll('#m-gnb ul li');
  const overlayElem = document.querySelector('#mobile-menu-wrap .overlay');
  const header = document.querySelector('header')
  const dtmWrap = document.querySelector('#dt-menu-wrap');
  const gnb = document.querySelector('#gnb');
  const mMenuWrap = document.querySelector('#mobile-menu-wrap');
  let currentTop = 0;
  let ticking = false;

  // desktop menu over
  gnb.addEventListener('mouseenter', function(e) {
    dtmWrap.classList.add('active');
  });

  dtmWrap.addEventListener('mouseleave', function(e) {
    dtmWrap.classList.remove('active');
  })

  // 스크롤 체크 메뉴 배경 노출
  function scrollChcek(scroll_pos) {
    // 데스크탑
    let wHeight = window.innerHeight;
    if( scroll_pos > wHeight*0.8 - 110) {
      dtmWrap.classList.add('over');
    }else{
      dtmWrap.classList.remove('over');
    }
    // 모바일
    if( scroll_pos > 0 ) {
      mMenuWrap.classList.add('active');
    }else{
      mMenuWrap.classList.remove('active');
    }
    // console.log(`${window.innerHeight}:${scroll_pos}`)
  }

  window.addEventListener('scroll', function(e) {
    currentTop = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        scrollChcek(currentTop);
        ticking = false;
      });
      ticking = true;
    }
  });

  // 리사이징 될때 메뉴 초기화
  window.onresize = function(event){
    mMenu.classList.remove('on');
    mgnbLi.forEach((item, i) => {
      item.classList.remove('active');
    });
    bodyElem.classList.remove('blur');
    overlayElem.classList.remove('on');
    // $('#mobile-menu-wrap').removeClass('active');
  }

  /*모바일 메뉴 슬라이드*/
  gtb.forEach( items => {
    items.addEventListener('click', event => {
      document.querySelector('.m-menu').classList.toggle('on');
      mgnbLi.forEach((item, i) => {
        item.classList.remove('active');
      });
      bodyElem.classList.toggle('blur');
      document.querySelector('.overlay').classList.toggle('on');
      event.preventDefault();
      return false
    });
  });

  // 모바일 메뉴 아코디언 메뉴
  mgnbLi.forEach( items => {
    items.addEventListener('click', function handleClick(event) {
        mgnbLi.forEach( elem => {
          elem.classList.remove('active');
        })
        event.target.parentElement.parentElement.classList.add('active');
        event.preventDefault();
        return false
    });
  });

  const langElem = document.querySelector('#lang-txt');
  const langLi = document.querySelectorAll('.lang ul.lang-menu li');
  langElem.addEventListener('click', function handleClick(event) {
      event.target.parentElement.classList.toggle('active');
  });
  langLi.forEach((item, i) => {
    item.addEventListener('click', function handleClick(event) {
        langElem.innerHTML = event.target.innerText
        event.target.parentElement.parentElement.classList.toggle('active')
    });
  });


  // 매거진 반응형
  let mItems = document.querySelectorAll('.magazine .items');
  let mitemsInner = document.querySelector('.magazine .items-inner');
  let mitemsWrap = document.querySelector('.magazine .box-items-wrap');
  let heightw = 0;
  function itemsResetWidth(width) {
    mItems.forEach( elem => {
      elem.style.width = width + 'px';
      mitemsWrap.style.height = ( mitemsInner.offsetHeight + 55 ) + 'px';
      // console.log(`inner height: ${mitemsInner.offsetHeight}`)
    })
  }
  // console.log(window.innerWidth)
  if( window.innerWidth <= 1280 ) {
    let halfwindowWidth = window.innerWidth/2 + 10;
    itemsResetWidth(halfwindowWidth);
  }else if( window.innerWidth > 1280 ){
    itemsResetWidth(250);
  }

  window.onresize = function(event){
    // console.log(event)
    if( window.innerWidth <= 1280 ) {
      itemsResetWidth(window.innerWidth/2 + 10);
    }else if( window.innerWidth > 1280 ){
      itemsResetWidth(250);
    }
  }

}

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
  loop: true,
  mousewheel: true,
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
  var currentSlide = mbswiper.slides[index]
  var currentSlideType = currentSlide.getAttribute('data-slide-type')

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
  mbswiper.slidePrev();
}

function next() {
  mbswiper.slideNext();
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
  // console.log('slide changed');
  // console.log(swiper.realIndex)
});

// swiper.setProgress(1, 4000)
