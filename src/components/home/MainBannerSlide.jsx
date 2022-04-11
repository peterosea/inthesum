import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import VideoJS from '../../components/Video';

const MainBannerSlide = () => {
  return (
    <div className="h-[525px] xl:h-[80vh]">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        speed={2500}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        mousewheel={true}
        autoplay={true}
        threshold={100}
        pagination={{ type: 'progressbar' }}
        className="mainBannerSlider"
      >
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
          <img
            src="/img/img-main@3x.png"
            alt=""
            className="absolute object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          {/* <!-- chrome 정책으로 영상 자동 재생 시 muted 상태로 autoplay 재생가능 참고문서: https://developer.chrome.com/blog/autoplay/--> */}
          <VideoJS
            options={{
              muted: true,
              controls: true,
              autoplay: true,
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
          <img
            src="/img/img-video-thumb@3x.png"
            alt=""
            className="absolute object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainBannerSlide;
