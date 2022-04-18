import React from 'react';
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
import Modal from '../components/Modal';
import IeDeprecated from '../components/Modal/IeDeprecated';

import { card } from './data';

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
          <div className="grid xl:grid-cols-2 gap-x-[20px] #xl:mx-full">
            <a
              href="#"
              className={classnames(
                'relative min-h-[260px] flex py-[42px] px-[30px] bg-[#EDEDFD] items-center flex-wrap gap-y-[35px] justify-end',
                'xl:rounded-[12px] xl:p-[50px] xl:justify-between',
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
                'relative  min-h-[260px] flex py-[42px] px-[30px] bg-[#fdf4ff] items-center flex-wrap gap-y-[35px] justify-end',
                'xl:rounded-[12px] xl:p-[50px] xl:justify-between',
              )}
            >
              <div className="#xl:w-full">
                <h4 className="text-[#4d005d] font-extrabold font-TmoneyRoundWind">
                  made by ARMY - BTS 의상실
                </h4>
                <div className="mt-[8px] text-[26px] text-[#7f0198] font-extrabold font-TmoneyRoundWind tracking-[-0.78px]">
                  RM의 S/S 신상 의상 투표
                  <br />
                  여러분의 PICK은?
                </div>
                <div className="text-[#360041] mt-[20px] font-Pretendard">
                  여러분의 감성으로 투표해주세요!
                  <br />
                  선택받은 코스튬은 게임에 실제로 반영됩니다!
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
      <Modal>
        <IeDeprecated />
      </Modal>
    </>
  );
};
