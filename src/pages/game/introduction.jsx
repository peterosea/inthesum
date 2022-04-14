import React, { useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import HeaderSection from '../../components/HeaderSection';
import Banner from '../../components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import VideoJS from '../../components/Video';
import classnames from 'classnames';
import FloatArea from '../../components/FloatArea';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Main = () => {
  const swiperPagination = useRef(null);
  const swiperNavPrev = useRef(null);
  const swiperNavNext = useRef(null);
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
          <div className="relative mt-[31px] xl:mt-[58px]">
            {swiperPagination.current && (
              <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                speed={2500}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                mousewheel={true}
                autoplay={true}
                threshold={100}
                pagination={{
                  el: swiperPagination?.current,
                  type: 'fraction',
                }}
                navigation={{
                  nextEl: swiperNavNext?.current,
                  prevEl: swiperNavPrev?.current,
                }}
              >
                {[1, 2, 3, 4].map((e, index) => (
                  <SwiperSlide key={`index-${index}`}>
                    <div className="w-full">
                      <div className="mb-[20px]">
                        <div className="flex items-center gap-x-[14px]">
                          <span className="text-[18px] font-TmoneyRoundWind font-extrabold">
                            인더섬 with BTS 티저
                          </span>
                          <button className="btn bg-black text-white text-[14px] rounded-full py-[14px] px-[20px] font-TmoneyRoundWind font-extrabold leading-none">
                            설명보기
                          </button>
                        </div>
                      </div>
                      <div className="aspect-[16/9] relative overflow-hidden rounded-[16px]">
                        <div className="absolute w-full h-full">
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
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
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
            <div
              ref={swiperPagination}
              className="swiper-pagination absolute h-[50px] top-0 flex items-center justify-center right-0 !w-auto !bottom-auto !left-auto pl-[30px] bg-gradient-to-l from-white via-white"
            ></div>
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
          className="absolute #xl:max-h-[200px] #xl:bottom-0 h-full object-contain max-w-none w-auto object-center left-1/2 -translate-x-1/2"
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
