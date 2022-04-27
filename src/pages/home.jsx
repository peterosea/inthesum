import React, { useState } from 'react';
import classnames from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

// components

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/home/home.scss';
import MagazineSlide from '../components/home/MagazineSlide';
import CharacterSlide from '../components/home/CharacterSlide';
import MainBannerSlide from '../components/home/MainBannerSlide';
import Card from '../components/Card';
import HeaderSection from '../components/HeaderSection';
import FloatArea from '../components/FloatArea';

// data

import { card } from './data';

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

const PDBanner = () => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative xl:rounded-[12px] h-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full">
        <a
          href="#"
          className={classnames(
            'keen-slider__slide',
            'relative min-h-[260px] flex py-[42px] px-[30px] bg-[#EDEDFD] items-center flex-wrap gap-y-[35px] justify-end',
            'xl:rounded-[12px] xl:p-[50px] xl:pl-[60px] xl:pr-[40px] xl:justify-between xl:grid xl:grid-cols-[290px,170px] xl:gap-x[40px]',
          )}
        >
          <div className="#xl:w-full">
            <h4 className="text-[#2e0064] font-extrabold font-TmoneyRoundWind">
              개발 PD 노트
            </h4>
            <div className="mt-[8px] text-[22px] text-primary font-extrabold font-TmoneyRoundWind tracking-[-1.1px]">
              인더섬 with BTS에서
              <br />
              여러분께 전하고 싶은 이야기
            </div>
            <div className="text-[#39007c] mt-[20px] font-Pretendard  tracking-[-0.8px]">
              여러분과의 이야기를 만들어가고 싶습니다.
              <br />
              PD가 직접 들려주는 인더섬 이야기를 만나보세요!
            </div>
          </div>
          <img
            className="h-[150px] w-auto"
            src="/img/banner-pd-note-img@3x.png"
            alt=""
          />
        </a>
        <a
          href="#"
          className={classnames(
            'keen-slider__slide',
            'relative min-h-[260px] flex py-[42px] px-[30px] bg-[#EDEDFD] items-center flex-wrap gap-y-[35px] justify-end',
            'xl:p-[50px] xl:pl-[60px] xl:pr-[40px] xl:justify-between xl:grid xl:grid-cols-[290px,170px] xl:gap-x[40px]',
          )}
        >
          <div className="#xl:w-full">
            <h4 className="text-[#2e0064] font-extrabold font-TmoneyRoundWind">
              개발 PD 노트
            </h4>
            <div className="mt-[8px] text-[22px] text-primary font-extrabold font-TmoneyRoundWind tracking-[-1.1px]">
              인더섬 with BTS에서
              <br />
              여러분께 전하고 싶은 이야기
            </div>
            <div className="text-[#39007c] mt-[20px] font-Pretendard  tracking-[-0.8px]">
              여러분과의 이야기를 만들어가고 싶습니다.
              <br />
              PD가 직접 들려주는 인더섬 이야기를 만나보세요!
            </div>
          </div>
          <img
            className="h-[150px] w-auto"
            src="/img/banner-pd-note-img@3x.png"
            alt=""
          />
        </a>
      </div>
      {loaded && (
        <div className="absolute top-[18px] right-[18px] flex gap-x-[3px]">
          <button
            className="rotate-180"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          >
            <img src="/img/3716.svg" alt="" className="!w-auto" />
          </button>
          <button
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          >
            <img src="/img/3716.svg" alt="" className="!w-auto" />
          </button>
        </div>
      )}
    </div>
  );
};

const ClothesBanner = () => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="relative xl:rounded-[12px] h-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full">
        <a
          href="#"
          className={classnames(
            'keen-slider__slide',
            'relative min-h-[260px] flex py-[42px] px-[30px] bg-[#FDF4FF] items-center flex-wrap gap-y-[35px] justify-end',
            'xl:p-[50px] xl:pl-[60px] xl:pr-[40px] xl:justify-between xl:grid xl:grid-cols-[290px,170px] xl:gap-x[40px]',
          )}
        >
          <div className="#xl:w-full">
            <h4 className="text-[#4d005d] font-extrabold font-TmoneyRoundWind">
              made by ARMY - BTS 의상실
            </h4>
            <div className="mt-[8px] text-[22px] text-[#7f0198] font-extrabold font-TmoneyRoundWind tracking-[-1.1px]">
              아미의 PICK!
              <br />
              멋진 의상들을 준비하고 있어요!
            </div>
            <div className="text-[#360041] mt-[20px] font-Pretendard tracking-[-0.8px]">
              멋진 의상들로 곧 찾아뵐꼐요.
            </div>
          </div>
          <div className="relative">
            <img
              src="/img/3706.png"
              srcSet="/img/3706@2x.png 2x,
                            /img/3706@3x.png 3x"
              alt=""
              className="w-auto h-[135px]"
            />
            <img
              src="/img/coming-soon.png"
              srcSet="/img/coming-soon@2x.png 2x,
                            /img/coming-soon@3x.png 3x"
              alt="comming soon"
              className="xl:h-[38px] w-auto absolute bottom-full right-0"
            />
          </div>
        </a>
        <a
          href="#"
          className={classnames(
            'keen-slider__slide',
            'relative min-h-[260px] flex py-[42px] px-[30px] bg-[#FDF4FF] items-center flex-wrap gap-y-[35px] justify-end',
            'xl:p-[50px] xl:pl-[60px] xl:pr-[40px] xl:justify-between xl:grid xl:grid-cols-[290px,170px] xl:gap-x[40px]',
          )}
        >
          <div className="#xl:w-full">
            <h4 className="text-[#4d005d] font-extrabold font-TmoneyRoundWind">
              made by ARMY - BTS 의상실
            </h4>
            <div className="mt-[8px] text-[22px] text-[#7f0198] font-extrabold font-TmoneyRoundWind tracking-[-1.1px]">
              아미의 PICK!
              <br />
              멋진 의상들을 준비하고 있어요!
            </div>
            <div className="text-[#360041] mt-[20px] font-Pretendard tracking-[-0.8px]">
              멋진 의상들로 곧 찾아뵐꼐요.
            </div>
          </div>
          <div className="relative">
            <img
              src="/img/3706.png"
              srcSet="/img/3706@2x.png 2x,
                            /img/3706@3x.png 3x"
              alt=""
              className="w-auto h-[135px]"
            />
            <img
              src="/img/coming-soon.png"
              srcSet="/img/coming-soon@2x.png 2x,
                            /img/coming-soon@3x.png 3x"
              alt="comming soon"
              className="xl:h-[38px] w-auto absolute bottom-full right-0"
            />
          </div>
        </a>
      </div>
      {loaded && (
        <div className="absolute top-[18px] right-[18px] flex gap-x-[3px]">
          <button
            className="rotate-180"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          >
            <img src="/img/3716.svg" alt="" className="!w-auto" />
          </button>
          <button
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          >
            <img src="/img/3716.svg" alt="" className="!w-auto" />
          </button>
        </div>
      )}
    </div>
  );
};

const Main = () => {
  return (
    <>
      <section className="mt-[38px] mb-[60px] xl:my-[90px]">
        <div className="border-b border-[#ddd]">
          <div className="xl:container mx-auto">
            <div className="grid xl:grid-cols-[270px,auto]">
              <div className="xl:min-h-[490px] relative">
                <div className="flex xl:flex-col justify-between #xl:px-[30px] #xl:container #xl:mx-auto">
                  <div className="max-w-[160px]">
                    <img
                      src="/img/img-withbts-title.png"
                      srcSet="/img/img-withbts-title@2x.png 2x,
                            /img/img-withbts-title@3x.png 3x"
                      alt="with BTS"
                      className="h-[55px] xl:h-[93px] w-auto"
                    />
                    <div className="my-[30px] hidden xl:block">
                      <p>BTS가 개발에 직접 참여한 인더섬 업데이트 소식</p>
                    </div>
                  </div>
                  <a href="#" className="#xl:self-center">
                    <img
                      src="/img/icon-more-arrow@3x.png"
                      alt="more view"
                      className="w-[16px] xl:w-[31px]"
                    />
                  </a>
                </div>
                <div className="absolute w-[110px] h-px bottom-[-1px] right-0 bg-white"></div>
              </div>
              <div className="overflow-hidden xl:mt-0 mt-[35px] h-[500px]">
                <CharacterSlide />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="xl:container mx-auto relative">
          <div
            className={classnames(
              'px-cpx py-[90] xl:py-[90px]',
              'xl:h-full xl:absolute xl:top-0 xl:left-0 xl:z-10',
            )}
          >
            <div className="flex xl:flex-col justify-between">
              <div className="w-[160px]">
                <img src="/img/img-madebyarmy-title@3x.png" alt="with BTS" />
                <div className="text-[22px] font-bold whitespace-nowrap text-justify mt-[20px]">
                  주간 인더섬 매거진
                </div>
                <div className="my-[30px] hidden xl:block">
                  <p>아미와 함께 만드어 나가는 인더섬 이야기</p>
                </div>
              </div>
              <a href="#">
                <img
                  src="/img/icon-more-arrow@3x.png"
                  alt="more view"
                  className="w-[31px]"
                />
              </a>
            </div>
            <div className="absolute w-[110px] h-px bottom-[-1px] right-0 bg-white hidden xl:block"></div>
          </div>
          <div className="xl:pl-[270px]">
            <MagazineSlide />
          </div>
        </div>
      </section>
      <section className="mb-[64px] xl:mb-[120px]">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-2 gap-x-[20px] #xl:mx-full overflow-hidden">
            <div>
              <PDBanner />
            </div>
            <div>
              <ClothesBanner />
            </div>
          </div>
        </div>
      </section>
      <section className="my-[64px] xl:my-[120px]">
        <div className="container mx-auto">
          <HeaderSection
            title={() => <h1>인더섬 뉴스</h1>}
            content={() => (
              <p>인더섬에서는 과연 어떠한 일이 일어나고 있고 일어날까요?</p>
            )}
            arrow
          />
          <div
            className={classnames(
              'mt-[42px] mx-full',
              'xl:mt-[60px]',
              'grid grid-cols-1 gap-y-[30px]',
              'xl:grid-cols-2 xl:gap-[40px] xl:gap-y-[60px]',
            )}
          >
            {card.map((e, index) => (
              <Card data={e} key={`card-index-${index}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default () => {
  return (
    <>
      <Header />
      <div className="z-50 relative">
        <MainBannerSlide />
      </div>
      <div className="font-Pretendard relative">
        <Main />
        <FloatArea />
      </div>
      <Footer />
    </>
  );
};
