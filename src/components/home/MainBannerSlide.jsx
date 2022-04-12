import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import VideoJS from '../../components/Video';

const MainBannerSlide = () => {
  return (
    <div className="h-[525px] xl:h-[860px] relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        speed={2500}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        mousewheel={true}
        // autoplay={true}
        threshold={100}
        pagination={{ type: 'progressbar' }}
        className="mainBannerSlider"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center flex-col relative z-20">
            <img
              src="/img/bts_logo.png"
              srcset="/img/bts_logo@2x.png 2x,
                        /img/bts_logo@3x.png 3x"
              alt="BTS"
              className="!w-auto !h-auto"
            />
            <div className="text-white mt-[26px]">
              <p className="text-[60px] font-extrabold">HEADING ISLAND LIFE</p>
              <p className="text-[21px]">
                3DPuzzle Game width BTS character and space decoration
              </p>
            </div>
            <div className="mt-[46px] flex gap-x-[20px]">
              <img
                src="/img/btn-googleplay.png"
                srcset="/img/btn-googleplay@2x.png 2x,
                          /img/btn-googleplay@3x.png 3x"
              />
              <img
                src="/img/btn-appstore.png"
                srcset="/img/btn-appstore@2x.png 2x,
                          /img/btn-appstore@3x.png 3x"
              />
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
            <VideoJS
              options={{
                muted: true,
                poster: '/video/poster.png',
                sources: [
                  {
                    src: '/video/movie-sample.mp4',
                    type: 'video/mp4',
                  },
                  {
                    src: '/video/movie-sample.ogg',
                    type: 'video/ogg',
                  },
                ],
              }}
            />
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
              srcset="/img/img-video-thumb@2x.png 2x,
                          /img/img-video-thumb@3x.png 3x"
              className="w-full h-full"
            />
            <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-30" />
            <img
              src="/img/img-pattern.png"
              srcset="/img/img-pattern@2x.png 2x,
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
      </Swiper>
      <div className="h-[57px] absolute bottom-[20px] left-1/2 -translate-x-1/2 z-10">
        <img
          src="/img/icon-scroll.png"
          srcset="/img/icon-scroll@2x.png 2x,
              /img/icon-scroll@3x.png 3x"
        />
      </div>
    </div>
  );
};

export default MainBannerSlide;
