import React, { useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import HeaderSection from '../../components/HeaderSection';
import Banner from '../../components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import VideoJS from '../../components/Video';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Main = () => {
  const swiperPagination = useRef(null);
  const swiperNavPrev = useRef(null);
  const swiperNavNext = useRef(null);
  return (
    <>
      <section className="my-[96px]">
        <div className="container mx-auto">
          <div className="mb-[58px]">
            <HeaderSection
              title={() => <h1>인더섬 소개 영상</h1>}
              content={() => <p>뜻밖의 휴가로 도착한 섬! 인더섬에서 만나요</p>}
            />
          </div>
          <div className="relative">
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
                        <button className="btn bg-black text-white text-[14px] rounded-full py-[12px] font-TmoneyRoundWind font-extrabold">
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
                            poster: '/public/video/poster.png',
                            sources: [
                              {
                                src: '/public/video/movie-sample.mp4',
                                type: 'video/mp4',
                              },
                              {
                                src: '/public/video/movie-sample.ogg',
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
      <section className="mt-[147px] mb-[91px]">
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
          <div className="mt-[48px]">
            <Banner
              bgImg={() => (
                <img
                  className="object-cover w-full h-full absolute object-center"
                  src="/public/img/507.jpg"
                  srcSet="/public/img/507@2x.jpg 2x,
                        /public/img/507@3x.jpg 3x"
                />
              )}
            >
              <div className="text-center">
                <div className="font-TmoneyRoundWind text-[42px] text-white font-extrabold tracking-[-3.36px]">
                  뜻밖의 휴가로 도착한 섬!
                </div>
              </div>
            </Banner>
          </div>
          <div className="mt-[30px]">
            <Banner
              bgImg={() => (
                <img
                  className="object-cover w-full h-full absolute object-center"
                  src="/public/img/img-introduce-2.jpg"
                  srcSet="/public/img/img-introduce-2@2x.jpg 2x,
                        /public/img/img-introduce-2@3x.jpg 3x"
                />
              )}
            >
              <div className="text-center">
                <div className="font-TmoneyRoundWind text-[42px] text-white font-extrabold tracking-[-3.36 px]">
                  아무것도 없던 섬이었지만…
                </div>
              </div>
            </Banner>
          </div>
          <div className="mt-[83px] pt-[276px] relative">
            <img
              className="max-w-[600px] absolute top-0 left-1/2 -translate-x-1/2"
              src="/public/img/img-introduce-3.png"
              srcSet="/public/img/img-introduce-3@2x.png 2x,
                      /public/img/img-introduce-3@3x.png 3x"
            />
            <img
              className="relative z-10"
              src="/public/img/img-introduce-4.png"
              srcSet="/public/img/img-introduce-4@2x.png 2x,
                      /public/img/img-introduce-4@3x.png 3x"
            />
          </div>
          <div className="mt-[165px]">
            <div className="grid grid-cols-2 mb-[93px]">
              <div className="justify-self-center relative">
                <img
                  className="max-w-[420px]"
                  src="/public/img/img-introduce-5.png"
                  srcSet="/public/img/img-introduce-5@2x.png 2x,
                          /public/img/img-introduce-5@3x.png 3x"
                />
                <div className="absolute w-full top-1/2 -translate-y-1/2 text-center font-TmoneyRoundWind text-white font-extrabold text-[42px]">
                  <p>
                    퍼즐을
                    <br />
                    맞추며
                  </p>
                </div>
              </div>
              <div className="justify-self-center relative">
                <img
                  className="max-w-[420px]"
                  src="/public/img/img-introduce-6.png"
                  srcSet="/public/img/img-introduce-6@2x.png 2x,
                          /public/img/img-introduce-6@3x.png 3x"
                />
                <div className="absolute w-full top-1/2 -translate-y-1/2 text-center font-TmoneyRoundWind text-white font-extrabold text-[42px]">
                  <p>
                    섬에서 보내는
                    <br />
                    하루하루!
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="justify-self-center grid gap-y-[50px]">
                <img
                  src="/public/img/img-introduce-7.png"
                  srcSet="/public/img/img-introduce-7@2x.png 2x,
                          /public/img/img-introduce-7@3x.png 3x"
                />
                <div className="text-[36px] font-TmoneyRoundWind font-extrabold text-center">
                  <span className="text-primary">수영</span>하고
                </div>
              </div>
              <div className="justify-self-center grid gap-y-[50px]">
                <img
                  src="/public/img/img-introduce-8.png"
                  srcSet="/public/img/img-introduce-8@2x.png 2x,
                          /public/img/img-introduce-8@3x.png 3x"
                />
                <div className="text-[36px] font-TmoneyRoundWind font-extrabold text-center">
                  <span className="text-primary">낚시</span>하고
                </div>
              </div>
              <div className="justify-self-center grid gap-y-[50px]">
                <img
                  src="/public/img/img-introduce-9.png"
                  srcSet="/public/img/img-introduce-9@2x.png 2x,
                          /public/img/img-introduce-9@3x.png 3x"
                />
                <div className="text-[36px] font-TmoneyRoundWind font-extrabold text-center">
                  <span className="text-primary">불꽃놀이</span>까지 함께
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[910px] relative overflow-hidden">
        <img
          className="absolute h-full object-contain max-w-none w-auto object-center left-1/2 -translate-x-1/2"
          src="/public/img/img-introduce-bottom-bg.png"
          srcSet="/public/img/img-introduce-bottom-bg@2x.png 2x,
                  /public/img/img-introduce-bottom-bg@3x.png 3x"
        />
        <div className="container mx-auto mt-[90px] relative">
          <div className="grid justify-items-center gap-y-[92px]">
            <img
              className="max-w-[654px]"
              src="/public/img/img-introduce-text.png"
              srcSet="/public/img/img-introduce-text@2x.png 2x,
                      /public/img/img-introduce-text@3x.png 3x"
            />
            <img
              className="max-w-[468px]"
              src="/public/img/img-introduce-logo-full.png"
              srcSet="/public/img/img-introduce-logo-full@2x.png 2x,
                      /public/img/img-introduce-logo-full@3x.png 3x"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const HeaderBg = () => (
  <img
    src="/public/img/game-introduce-visual.png"
    srcSet="/public/img/game-introduce-visual@2x.png 2x,
        /public/img/game-introduce-visual@3x.png 3x"
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
      <div className="font-Pretendard">
        <Main />
      </div>
      <Footer />
    </>
  );
};
