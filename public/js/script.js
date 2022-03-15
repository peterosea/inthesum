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
})
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
