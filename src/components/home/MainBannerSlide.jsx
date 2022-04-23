import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Transition } from '@headlessui/react';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './MainBannerSlide.scss';

import cx from 'classnames';

const Video = () => {
  const [onPlay, setOnPlay] = useState(false);
  const videoRef = useRef();
  const swiper = useSwiper();

  const onClick = () => {
    swiper.autoplay.stop();

    videoRef.current.play();
    videoRef.current.addEventListener('ended', () => {
      setOnPlay(false);
      swiper.autoplay.start();
      swiper.slideNext();
    });
    setOnPlay(true);
  };

  return (
    <div className="relative h-full">
      <video
        className="absolute object-cover inset-0"
        ref={videoRef}
        muted
        src="/video/movie-sample.mp4"
      ></video>
      <Transition
        show={!onPlay}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <img
          className="absolute object-cover w-full h-full"
          src="/video/poster.png"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 max-w-[80px] xl:max-w-[150px]">
          <button onClick={onClick}>
            <img src="/img/btn-play-big.svg" alt="" />
          </button>
        </div>
      </Transition>
    </div>
  );
};

function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}>
      <img src="/img/slider-arrow.svg" alt="" className="!w-auto" />
    </button>
  );
}
function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <img src="/img/slider-arrow.svg" alt="" className="!w-auto" />
    </button>
  );
}

const MainBannerSlide = () => {
  const swiper = useSwiper();
  return (
    <div className="h-[525px] xl:h-[860px] relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        speed={2500}
        slidesPerView={1}
        spaceBetween={0}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        threshold={100}
        pagination={{ type: 'progressbar' }}
        className="mainBannerSlider"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col relative z-20">
            <img
              src="/img/bts_logo.png"
              srcSet="/img/bts_logo@2x.png 2x,
                        /img/bts_logo@3x.png 3x"
              alt="BTS"
              className="!h-[116px] xl:!h-auto !w-auto"
            />
            <div className="text-white mt-[26px]">
              <p
                className={cx(
                  'text-[30px] font-extrabold font-TmoneyRoundWind',
                  'xl:text-[42px]',
                )}
              >
                사전예약하고 [인더섬 with BTS]에서
                <br />
                아미밤 스탠드(데코 아이템) 받으세요!
              </p>
            </div>
            <div className="mt-[24px] xl:mt-[46px] flex gap-x-[20px]">
              <div className="h-[40px] xl:h-auto">
                <img
                  src="/img/btn-googleplay.png"
                  srcSet="/img/btn-googleplay@2x.png 2x,
                          /img/btn-googleplay@3x.png 3x"
                  className="hidden xl:block !w-auto !h-auto max-h-[40px] xl:max-h-[80px]"
                />
              </div>
              <div className="h-[40px] xl:h-auto">
                <img
                  src="/img/btn-appstore.png"
                  srcSet="/img/btn-appstore@2x.png 2x,
                            /img/btn-appstore@3x.png 3x"
                  className="!w-auto !h-auto max-h-[40px] xl:max-h-[80px]"
                />
              </div>
            </div>
          </div>
          <div className="absolute max-w-[1920px] w-full h-full z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src="/img/img-main@3x.png" alt="" className="w-full h-full" />
          </div>
          <div className="absolute w-full h-full overflow-hidden">
            <img
              src="/img/img-main@3x.png"
              alt=""
              className="blur-[50px] scale-110"
            />
            <div className="w-full h-full absolute bg-black top-0 left-0 opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- chrome 정책으로 영상 자동 재생 시 muted 상태로 autoplay 재생가능 참고문서: https://developer.chrome.com/blog/autoplay/--> */}
          <div className="w-full h-full absolute bg-black"></div>
          <div className="w-full h-full max-w-[1920px] relative z-20">
            <Video />
          </div>
          <div className="absolute w-full h-full overflow-hidden">
            <img
              src="/img/img-main@3x.png"
              alt=""
              className="blur-[50px] scale-110"
            />
            <div className="w-full h-full absolute bg-black top-0 left-0 opacity-50"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col relative z-10">
            <img
              src="/img/bts_logo.png"
              alt="BTS"
              className="!w-auto !h-auto"
            />
            <div className="text-white">
              <p className="text-[60px] font-extrabold">HEADING ISLAND LIFE</p>
              <p className="text-[21px]">
                3DPuzzle Game width BTS character and space decoration
              </p>
            </div>
          </div>
          <div className="absolute max-w-[1920px] w-full h-full z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img
              src="/img/img-video-thumb.png"
              srcSet="/img/img-video-thumb@2x.png 2x,
                          /img/img-video-thumb@3x.png 3x"
              className="w-full h-full"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-30" />
            <img
              src="/img/img-pattern.png"
              srcSet="/img/img-pattern@2x.png 2x,
                          /img/img-pattern@3x.png 3x"
              className="w-full h-full absolute top-0 left-0"
            />
          </div>
          <div className="absolute w-full h-full overflow-hidden">
            <img
              src="/img/img-video-thumb@3x.png"
              alt=""
              className="blur-[50px]"
            />
            <div className="w-full h-full absolute bg-black top-0 left-0 opacity-50"></div>
          </div>
        </SwiperSlide>
        <div className="absolute h-[60px] right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden xl:block">
          <SlideNextButton />
        </div>
        <div className="absolute h-[60px] left-0 rotate-180 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 hidden xl:block">
          <SlidePrevButton />
        </div>
      </Swiper>
      <div className="h-[57px] absolute bottom-[20px] left-1/2 -translate-x-1/2 z-10 hidden xl:block">
        <img
          src="/img/icon-scroll.png"
          srcSet="/img/icon-scroll@2x.png 2x,
              /img/icon-scroll@3x.png 3x"
        />
      </div>
    </div>
  );
};

export default MainBannerSlide;
