<?php
$layout = 'about-privacy';
include 'head.php';
include 'header.php';
$name = 'header-community-news';
$ext = 'webp';
include './components/header-page.php';
?>
<div class="tw-container tw-mx-auto">
  <?php
  $sectionHeader = <<<EOD
  <div class="tw-flex tw-gap-x-[30px] tw-justify-between tw-font-Pretendard">
    <div>
      <h1 class="tw-text-[36px] tw-mb-[15px] tw-font-TmoneyRoundWind tw-font-bold tw-leading-[0.69]">자주 묻는 질문</h1>
      <div class="tw-text-[18px]">
        <p>질문 전에 확인하시면 빠르게 해결하실 수도 있어요</p>
      </div>
    </div>
  </div>
EOD;
  ?>
  <section class="tw-my-[96px]">
    <div class="tw-mb-[58px]">
      <?php echo $sectionHeader ?>
    </div>
    <div id="introductoryVideo" class="tw-relative">
      <div class="swiper">
        <div class="swiper-wrapper">
          <? for ($i = 0; $i < 6; $i++) {
            echo <<<EOD
            <div class="swiper-slide" data-slide-type="video">
              <div class="tw-w-full">
                <!-- slide header -->
                <div class="tw-mb-[20px]">
                  <div class="tw-flex tw-items-center tw-gap-x-[14px]">
                    <span class="tw-text-[18px] tw-font-TmoneyRoundWind tw-font-extrabold">인더섬 with BTS 티저</span>
                    <button class="btn tw-bg-black tw-text-white tw-text-[14px] tw-rounded-full tw-py-[12px] tw-font-TmoneyRoundWind tw-font-extrabold">설명보기</button>
                  </div>
                </div>
                <div class="tw-aspect-[16/9] tw-relative tw-overflow-hidden">
                  <div class="tw-absolute tw-w-full tw-h-full">
                    <video id="video-$i" class="tw-w-full tw-h-full" muted controls preload="auto" poster="./public/video/poster.png">
                      <source src="./public/video/movie-sample.mp4" type="video/mp4">
                      <source src="./public/video/movie-sample.ogg" type="video/ogg">
                    </video>
                  </div>
                </div>
              </div>
            </div>
  EOD;
          } ?>
        </div>
      </div>
      <div class="swiper-button-next tw-translate-y-[62px] tw-translate-x-[100px]"></div>
      <div class="swiper-button-prev tw-translate-y-[62px] tw-translate-x-[-100px]"></div>
      <div class="swiper-pagination tw-absolute tw-h-[50px] tw-top-0 tw-flex tw-items-center tw-justify-center tw-right-0 tw-w-auto tw-bottom-auto tw-left-auto tw-pl-[30px] tw-bg-gradient-to-l tw-from-white tw-via-white"></div>
    </div>
  </section>
</div>
<?php
include 'footer.php';
?>
<script>
  (() => {
    const introductoryVideo = document.getElementById('introductoryVideo');
    if (!introductoryVideo) return;
    const introductoryVideoSwiper = new Swiper(introductoryVideo.querySelector('.swiper'), {
      spped: 2500,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      pagination: {
        el: introductoryVideo.querySelector(".swiper-pagination"),
        type: "fraction",
      },
      navigation: {
        nextEl: introductoryVideo.querySelector(".swiper-button-next"),
        prevEl: introductoryVideo.querySelector(".swiper-button-prev")
      }
    });
    const introductoryVideoSwiperSlide = introductoryVideo.querySelectorAll('.swiper-slide');
    introductoryVideoSwiper.on('slidePrevTransitionEnd', swiper => {
      const index = swiper.activeIndex;
      const prevSlide = swiper.slides[index + 1];
      const video = prevSlide.querySelector('video');
      video.pause();
    })
    introductoryVideoSwiper.on('slideNextTransitionEnd', swiper => {
      const index = swiper.activeIndex;
      const prevSlide = swiper.slides[index - 1];
      const video = prevSlide.querySelector('video');
      video.pause();
    })

    // swiper slide
    introductoryVideoSwiperSlide.forEach(slide => {
      const video = slide.querySelector('video');
      videojs(video, {});
    })
  })()
</script>
<style>
  .vjs-poster {
    background-size: cover;
  }
</style>