import React, { useContext } from 'react';
import classnames from 'classnames';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/home/home.scss';
import MagazineSlide from '../components/home/MagazineSlide';
import CharacterSlide from '../components/home/CharacterSlide';
import MainBannerSlide from '../components/home/MainBannerSlide';
import Card from '../components/Card';
import HeaderSection from '../components/HeaderSection';
import FloatArea from '../components/FloatArea';

import { card } from './data';

const Main = () => {
  return (
    <>
      <section className="mt-[38px] mb-[60px] xl:my-[90px]">
        <div className="">
          <div className="xl:container mx-auto">
            <div className="w-full h-full flex items-center relative">
              <div className="absolute z-20 text-white pl-[60px]">
                <div className="relative">
                  <img
                    src="/img/img-withbts-title-white.png"
                    srcSet="/img/img-withbts-title-white@2x.png 2x,
                                /img/img-withbts-title-white@3x.png 3x"
                    alt="with BTS"
                    className="h-[55px] xl:h-[93px] w-auto"
                  />
                  <img
                    src="/img/coming-soon.png"
                    srcSet="/img/coming-soon@2x.png 2x,
                              /img/coming-soon@3x.png 3x"
                    alt="comming soon"
                    className="xl:h-[38px] w-auto absolute bottom-full left-0"
                  />
                </div>
                <div className="mt-[30px] hidden xl:block">
                  <p>
                    BTS와 인더섬을 즐기는 방법!
                    <br />곧 찾아옵니다.
                  </p>
                </div>
              </div>
              <img
                src="/img/madebyarmi-comingsoon1.png"
                srcSet="/img/madebyarmi-comingsoon1@2x.png 2x,
                              /img/madebyarmi-comingsoon1@3x.png 3x"
                alt="comming soon"
              />
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          <div className="xl:container mx-auto">
            <div className="w-full h-full flex items-center relative">
              <div className="absolute z-20 text-white pl-[60px]">
                <div className="relative">
                  <img
                    src="/img/img-madebyarmy-title-w.png"
                    srcSet="/img/img-madebyarmy-title-w@2x.png 2x,
                                /img/img-madebyarmy-title-w@3x.png 3x"
                    alt="with BTS"
                    className="h-[55px] xl:h-[93px] w-auto"
                  />
                  <div className="text-[22px] text-white font-TmoneyRoundWind font-extrabold mt-[20px]">
                    주간 인더섬 매거진
                  </div>
                  <img
                    src="/img/coming-soon.png"
                    srcSet="/img/coming-soon@2x.png 2x,
                              /img/coming-soon@3x.png 3x"
                    alt="comming soon"
                    className="xl:h-[38px] w-auto absolute bottom-full left-0"
                  />
                </div>
                <div className="mt-[30px] hidden xl:block">
                  <p>
                    아미가 만들어가는 새로운 이야기!
                    <br />
                    기대해주세요!
                  </p>
                </div>
              </div>
              <img
                src="/img/madebyarmi-comingsoon.png"
                srcSet="/img/madebyarmi-comingsoon@2x.png 2x,
                              /img/madebyarmi-comingsoon@3x.png 3x"
                alt="comming soon"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[64px] xl:mb-[120px]">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-2 gap-x-[20px] #xl:mx-full">
            <a
              href="#"
              className={classnames(
                'relative min-h-[260px] flex py-[42px] px-[30px] bg-[#EDEDFD] items-center flex-wrap gap-y-[35px] justify-end',
                'xl:rounded-[12px] xl:p-[50px] xl:pl-[60px] xl:pr-[40px] xl:justify-between xl:grid xl:grid-cols-[290px,170px] xl:gap-x[40px]',
              )}
            >
              <div className="#xl:w-full">
                <h4 className="text-[#2e0064] font-extrabold font-TmoneyRoundWind">
                  개발 PD 노트
                </h4>
                <div className="mt-[8px] text-[26px] text-primary font-extrabold font-TmoneyRoundWind tracking-[-0.78px]">
                  인더섬 with BTS
                  <br />
                  전세계 동시 오픈!!
                </div>
                <div className="text-[#39007c] mt-[20px] font-Pretendard">
                  인더섬 2022년 4월 1일 GMT 00:00에
                  <br />
                  전세계 양대 마켓에서 동시 오픈합니다.
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
                'relative min-h-[260px] flex py-[42px] px-[30px] bg-[#FDF4FF] items-center flex-wrap gap-y-[35px] justify-end',
                'xl:rounded-[12px] xl:p-[50px] xl:pl-[60px] xl:pr-[40px] xl:justify-between xl:grid xl:grid-cols-[290px,170px] xl:gap-x[40px]',
              )}
            >
              <div className="#xl:w-full">
                <h4 className="text-[#4d005d] font-extrabold font-TmoneyRoundWind relative">
                  made by ARMY - BTS 의상실
                  <img
                    src="/img/coming-soon.png"
                    srcSet="/img/coming-soon@2x.png 2x,
                              /img/coming-soon@3x.png 3x"
                    alt="comming soon"
                    className="xl:h-[38px] w-auto absolute bottom-full right-0"
                  />
                </h4>
                <div className="mt-[8px] text-[26px] text-[#7f0198] font-extrabold font-TmoneyRoundWind tracking-[-0.78px]">
                  아미의 PICK!
                  <br />
                  멋진 의상들을 준비하고 있어요!
                </div>
                <div className="text-[#360041] mt-[20px] font-Pretendard">
                  멋진 의상들로 곧 찾아뵐꼐요.
                </div>
              </div>
              <img
                src="/img/banner-bts-cloth-img@3x.png"
                alt=""
                className="w-auto h-[135px]"
              />
            </a>
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
