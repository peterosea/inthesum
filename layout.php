<?php
$layout = 'main';
include 'head.php';
include 'header.php';
?>
<div class="main-banner">
  <div id="main-banner-swiper" class="swiper charactor">
    <div class="swiper-wrapper">
      <div class="swiper-slide" data-slide-type="img" style="background-image: url(./public/img/img-main@3x.png)">
        <div class="slider-text">
          <img src="./public/img/bts_logo.png" alt="BTS">
          <p class="title">HEADING ISLAND LIFE</p>
          <p>3DPuzzle Game width BTS character and space decoration</p>
        </div>
      </div>
      <div class="swiper-slide" data-slide-type="video">
        <!-- chrome 정책으로 영상 자동 재생 시 muted 상태로 autoplay 재생가능 참고문서: https://developer.chrome.com/blog/autoplay/-->
        <video id="demo" class="video-js" muted controls preload="auto" poster="./public/video/poster.png" data-setup='{}'>
          <source src="./public/video/movie-sample.mp4" type="video/mp4">
          <source src="./public/video/movie-sample.ogg" type="video/ogg">
        </video>
      </div>
      <div class="swiper-slide" data-slide-type="img" style="background-image: url(./public/img/img-video-thumb@3x.png)">
        <div class="slider-text">
          <img src="./public/img/bts_logo.png" alt="BTS">
          <p class="title">HEADING ISLAND LIFE</p>
          <p>3DPuzzle Game width BTS character and space decoration</p>
        </div>
      </div>
    </div>
    <div class="mb-button-next"></div>
    <div class="mb-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</div>
<!-- content : 콘텐츠 영역 -->
<div class="content">
  <section class="content_inner">
    <?php
    // 01. jQgrid 테이블
    //include 'components/test.php';
    // main contents
    include 'components/main.php';
    ?>
  </section>
  <!-- //.content_inner -->
</div>
<!-- //.content -->

<?php
include 'footer.php';
?>