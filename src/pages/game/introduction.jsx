import React, { useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useSwiper } from 'swiper/react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import HeaderSection from '../../components/HeaderSection';
import Banner from '../../components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import classnames from 'classnames';
import FloatArea from '../../components/FloatArea';
import PaginationBar from '../../components/Pagination/Bar';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Video = ({
  src = '/video/movie-sample.mp4',
  poster = '/video/poster.png',
}) => {
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

  const videoClick = () => {
    setOnPlay(false);
    videoRef.current.pause();
    swiper.autoplay.start();
  };

  return (
    <div className="relative h-full">
      <video
        className="absolute object-cover inset-0 h-full w-full"
        ref={videoRef}
        muted
        src={src}
        onClick={videoClick}
      />
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
          src={poster}
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

const ToolTip = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  const onClose = () => setActive(false);

  return (
    <div className="relative z-20 text-left">
      <button
        className="btn bg-black text-white text-[14px] rounded-full py-[14px] px-[20px] font-TmoneyRoundWind font-extrabold leading-none whitespace-nowrap"
        onClick={handleToggle}
      >
        {active ? '설명닫기' : '설명보기'}
      </button>
      <Transition
        show={active}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute left-full top-0 w-[480px] translate-x-[18px] hidden xl:block p-[30px] border border-[#c3cad5] z-20 bg-white shadow-[10px_20px_30px_0_rgba(0,0,0,0.16)]"
      >
        <button
          className="w-[36px] h-[36px] rounded-full bg-black absolute text-white right-0 top-0 translate-x-1/2 -translate-y-1/2"
          onClick={onClose}
        >
          <i className="icon-close"></i>
        </button>
        <div>
          2013년 데뷔해 국내외 신인상을 휩쓴 방탄소년단은 명실상부 한국을
          대표하는 최정상 보이 그룹으로 성장했다. 전 세계적으로 방탄소년단
          열풍을 일으키며 ‘21세기 팝 아이콘’으로 불린다. 미국 빌보드, 영국
          오피셜 차트, 일본 오리콘을 비롯해 아이튠즈, 스포티파이, 애플뮤직 등
          세계 유수의 차트 정상에 올랐고, 음반 판매량과 뮤직비디오 조회수, SNS
          지수 등에서도 독보적인 기록을 써 내려가고 있다. 특히, 방탄소년단은 한
          주에 빌보드 ‘핫 100’ 차트와 ‘빌보드 200’ 차트 정상을 동시 정복한
          최초의 그룹이며, 통산 ‘빌보드 200’ 5차례, ‘핫 100’ 5차례 1위를
          차지했다.
        </div>
      </Transition>
    </div>
  );
};

const Pagination = ({ current, total }) => {
  return (
    <div className="xl:absolute h-[50px] top-[31px] xl:top-[50px] flex items-center justify-center right-0 !w-auto !bottom-auto !left-auto pl-[30px] bg-gradient-to-l from-white via-white z-20">
      <div className="hidden xl:flex">
        {current} / {total}
      </div>
      <div className="xl:hidden w-full">
        <PaginationBar current={current} all={total} />
      </div>
    </div>
  );
};
const Main = () => {
  const swiperPagination = useRef(null);
  const swiperNavPrev = useRef(null);
  const swiperNavNext = useRef(null);
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <>
      <section
        className={classnames('my-[44px] overflow-hidden', 'xl:my-[96px]')}
      >
        <div className="container mx-auto">
          <HeaderSection
            title={() => <h1>인더섬 소개 영상</h1>}
            content={() => <p>뜻밖의 휴가로 도착한 섬! 인더섬에서 만나요</p>}
          />
          <div className="relative #xl:!mx-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              speed={2500}
              slidesPerView={1}
              loop={true}
              mousewheel={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              threshold={100}
              pagination={{
                el: swiperPagination.current,
                type: 'fraction',
              }}
              navigation={{
                nextEl: swiperNavNext?.current,
                prevEl: swiperNavPrev?.current,
              }}
              className="!pt-[31px] xl:!pt-[58px]"
              onActiveIndexChange={(swiper) => {
                if (swiper.activeIndex > swiper.slides.length - 2) {
                  setCurrent(1);
                } else if (swiper.activeIndex === 0) {
                  setCurrent(swiper.slides.length - 2);
                } else {
                  setCurrent(swiper.activeIndex);
                }
              }}
              onInit={(swiper) => {
                setTotal(swiper.slides.length - 2);
                setCurrent(swiper.activeIndex);
              }}
            >
              {[1, 2, 3, 4].map((e, index) => (
                <SwiperSlide key={`index-${index}`}>
                  <div className="w-full">
                    <div className="mb-[20px] #xl:container mx-auto">
                      <div className="flex items-center gap-x-[30px] min-h-[2.8em]">
                        <span className="text-[18px] font-TmoneyRoundWind font-extrabold line-clamp-2">
                          인더섬 with BTS 티저
                        </span>
                        <ToolTip />
                      </div>
                    </div>
                    <div className="aspect-[16/9] relative overflow-hidden xl:rounded-[16px]">
                      <div className="absolute w-full h-full">
                        <Video
                          src="/video/movie-sample.mp4"
                          poster="/video/poster.png"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <Pagination total={total} current={current} />
            </Swiper>
            <div
              ref={swiperNavNext}
              className="swiper-button-next cursor-pointer translate-y-[62px] translate-x-[100px] absolute top-1/2 right-[10px] stroke-[#e6eaf2] hover:stroke-black"
            >
              <svg width="29.24" height="60.345">
                <path
                  transform="rotate(180 14.439 29.947)"
                  d="M28.516 0 0 29.966"
                />
                <path
                  transform="rotate(180 14.439 15.155)"
                  d="M28.516 29.966 0 0"
                />
              </svg>
            </div>
            <div
              ref={swiperNavPrev}
              className="swiper-button-prev cursor-pointer translate-y-[62px] translate-x-[-100px] absolute top-1/2 left-[10px] stroke-[#e6eaf2] hover:stroke-black"
            >
              <svg width="29.24" height="60.345">
                <path transform="translate(.362 .452)" d="M28.516 0 0 29.966" />
                <path
                  transform="translate(.362 30.034)"
                  d="M28.516 29.966 0 0"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[83px] xl:mt-[147px]">
        <div className="container mx-auto">
          <HeaderSection
            title={() => (
              <h1 className="text-[36px] mb-[15px] font-TmoneyRoundWind font-bold leading-[0.69]">
                인더섬 주요 스토리
              </h1>
            )}
            content={() => (
              <p>BTS가 인더섬에서 생활하게 된 이유는 무엇일까요</p>
            )}
          />
          <div className="mt-[30px] xl:mt-[48px]">
            <div className="rounded-[6px] overflow-hidden h-[90px] xl:h-[230px]">
              <Banner
                bgImg={() => (
                  <img
                    className="object-cover w-full h-full absolute object-center"
                    src="/img/507.jpg"
                    srcSet="/img/507@2x.jpg 2x,
                          /img/507@3x.jpg 3x"
                  />
                )}
              >
                <div className="text-center">
                  <div className="font-TmoneyRoundWind xl:text-[42px] text-white font-extrabold xl:tracking-[-3.36px]">
                    뜻밖의 휴가로 도착한 섬!
                  </div>
                </div>
              </Banner>
            </div>
          </div>
          <div className="mt-[10px] xl:mt-[30px]">
            <div className="rounded-[6px] overflow-hidden h-[90px] xl:h-[230px]">
              <Banner
                bgImg={() => (
                  <img
                    className="object-cover w-full h-full absolute object-center"
                    src="/img/img-introduce-2.jpg"
                    srcSet="/img/img-introduce-2@2x.jpg 2x,
                          /img/img-introduce-2@3x.jpg 3x"
                  />
                )}
              >
                <div className="text-center">
                  <div className="font-TmoneyRoundWind xl:text-[42px] text-white font-extrabold xl:tracking-[-3.36px]">
                    아무것도 없던 섬이었지만…
                  </div>
                </div>
              </Banner>
            </div>
          </div>
          <div className="mt-[25px] xl:mt-[83px] pt-[125px] xl:pt-[276px] relative">
            <img
              className="w-[80%] max-w-[600px] absolute top-0 left-1/2 -translate-x-1/2"
              src="/img/img-introduce-3.png"
              srcSet="/img/img-introduce-3@2x.png 2x,
                      /img/img-introduce-3@3x.png 3x"
            />
            <img
              className="relative z-10 hidden xl:block"
              src="/img/img-introduce-4.png"
              srcSet="/img/img-introduce-4@2x.png 2x,
                      /img/img-introduce-4@3x.png 3x"
            />
            <img
              className="relative z-10 xl:hidden block"
              src="/img/img-introduce-4-mobile.png"
              srcSet="/img/img-introduce-4-mobile@2x.png 2x,
                      /img/img-introduce-4-mobile@3x.png 3x"
            />
          </div>
          <div className="mt-[96px] xl:mt-[160px]">
            <img
              src="/img/img-introduce-polaroid.png"
              srcSet="/img/img-introduce-polaroid@2x.png 2x,
             /img/img-introduce-polaroid@3x.png 3x"
            />
            <div className="text-[26px] xl:text-[42px] font-extrabold font-TmoneyRoundWind mt-[36px] text-center">
              <span className="text-primary">수영</span>하고,{' '}
              <span className="text-primary">낚시</span>하고
              <br className="xl:hidden" />
              <span className="text-primary">불꽃놀이</span>까지 함께
            </div>
          </div>
        </div>
      </section>
      <section className="h-[350px] xl:h-[910px] relative overflow-hidden mt-[81px] xl:mt-[91px]">
        <img
          className="absolute #xl:bottom-0 h-full object-contain xl:object-contain max-w-none w-full object-bottom left-1/2 -translate-x-1/2"
          src="/img/img-introduce-bottom-bg.png"
          srcSet="/img/img-introduce-bottom-bg@2x.png 2x,
                  /img/img-introduce-bottom-bg@3x.png 3x"
        />
        <div className="container mx-auto xl:mt-[90px] relative">
          <div className="grid justify-items-center gap-y-[42px] xl:gap-y-[92px]">
            <div className="font-extrabold font-TmoneyRoundWind text-center tracking-[-1px]">
              <div className="text-[#9ba0a8] xl:text-gradient-primary text-[18px] xl:text-[36px] mb-[13px]">
                BTS 멤버들이 처음부터 함께한 첫 게임!
              </div>
              <div className="text-[34px] xl:text-[48px] text-gradient-primary">
                힘들면 잠시 놀러와요!
                <br />
                인더섬에서 만나요!
              </div>
            </div>
            <img
              className="max-w-[160px] xl:max-w-[468px]"
              src="/img/img-introduce-logo-full.png"
              srcSet="/img/img-introduce-logo-full@2x.png 2x,
                      /img/img-introduce-logo-full@3x.png 3x"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const HeaderBg = () => (
  <img
    src="/img/game-introduce-visual.png"
    srcSet="/img/game-introduce-visual@2x.png 2x,
        /img/game-introduce-visual@3x.png 3x"
    className="object-cover w-full h-full absolute object-center"
  />
);
export default () => {
  return (
    <>
      <Header />
      <HeaderPage
        bgImg={HeaderBg}
        title="게임소개"
        content={() => <>BTS 멤버들이 처음부터 함께한 인더섬에서 만나요</>}
      />
      <div className="font-Pretendard relative">
        <Main />
        <FloatArea />
      </div>
      <Footer />
    </>
  );
};
