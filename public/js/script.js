/*
common script
*/
$(function(){
  $('.gnb-toggle-btn').on('click',function(){
    $('#menu-wrap').toggleClass('on');    
  })
});

$(window).resize(function(){
  $('#menu-wrap').removeClass('on');
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
