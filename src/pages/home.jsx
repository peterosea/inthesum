import React from 'react';
import classnames from 'classnames';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/home/home.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import MagazineSlide from '../components/home/MagazineSlide';
import CharacterSlide from '../components/home/CharacterSlide';
import MainBannerSlide from '../components/home/MainBannerSlide';
import Card from '../components/Card';
import { card } from './data';

const Main = () => {
  return (
    <>
      <section className="py-[90px]">
        <div className="border-b border-[#ddd]">
          <div className="xl:container mx-auto">
            <div className="grid xl:grid-cols-[270px,auto]">
              <div className="xl:min-h-[490px] relative">
                <div className="flex xl:flex-col justify-between">
                  <div className="w-[160px]">
                    <img
                      src="/public/img/img-withbts-title@3x.png"
                      alt="with BTS"
                    />
                    <div className="my-[30px] hidden xl:block">
                      <p>BTS가 개발에 직접 참여한 인더섬 업데이트 소식</p>
                    </div>
                  </div>
                  <a href="#">
                    <img
                      src="/public/img/icon-more-arrow@3x.png"
                      alt="more view"
                      className="w-[31px]"
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
      <section className="overflow-hidden my-[90px]">
        <div className="container mx-auto relative">
          <div className="magazine__header xl:h-full xl:absolute top-0 left-[var(--container-px)] z-10 bg-gradient-to-r from-white via-white">
            <div className="flex xl:flex-col justify-between">
              <div className="w-[160px]">
                <img
                  src="/public/img/img-madebyarmy-title@3x.png"
                  alt="with BTS"
                />
                <div className="text-[22px] font-bold whitespace-nowrap text-justify">
                  주간 인더섬 매거진
                </div>
                <div className="my-[30px] hidden xl:block">
                  <p>아미와 함께 만드어 나가는 인더섬 이야기</p>
                </div>
              </div>
              <a href="#">
                <img
                  src="/public/img/icon-more-arrow@3x.png"
                  alt="more view"
                  className="w-[31px]"
                />
              </a>
            </div>
            <div className="absolute w-[110px] h-px bottom-[-1px] right-0 bg-white hidden xl:block"></div>
          </div>
          <div className="magazineSlide mt-[30px] xl:mt-0">
            <div className="xl:translate-x-[-150px]">
              <MagazineSlide />
            </div>
          </div>
        </div>
      </section>
      <section className="my-[120px]">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-2 gap-[20px]">
            <a
              href="#"
              className="relative rounded-[12px] min-h-[260px] flex p-[50px] pr-[280px] bg-[#EDEDFD]"
            >
              <div>
                <h4 className="text-[#2e0064] font-bold">개발 PD 노트</h4>
                <div className="mt-[8px] text-[26px] text-primary font-bold">
                  인더섬 with BTS
                  <br />
                  전세계 동시 오픈!!
                </div>
                <div className="text-[#39007c] mt-[20px]">
                  인더섬 2022년 4월 1일 GMT 00:00에
                  <br />
                  전세계 양대 마켓에서 동시 오픈합니다.
                </div>
              </div>
              <img
                src="/public/img/banner-pd-note-img@3x.png"
                alt=""
                className="absolute right-[40px] top-1/2 -translate-y-1/2 w-[30%]"
              />
            </a>
            <a
              href="#"
              className="relative rounded-[12px] min-h-[260px] flex p-[50px] pr-[280px] bg-[#fdf4ff]"
            >
              <div>
                <h4 className="text-[#4d005d] font-bold">개발 PD 노트</h4>
                <div className="mt-[8px] text-[26px] text-[#7f0198] font-bold">
                  인더섬 with BTS
                  <br />
                  전세계 동시 오픈!!
                </div>
                <div className="text-[#360041] mt-[20px]">
                  인더섬 2022년 4월 1일 GMT 00:00에
                  <br />
                  전세계 양대 마켓에서 동시 오픈합니다.
                </div>
              </div>
              <img
                src="/public/img/banner-bts-cloth-img@3x.png"
                alt=""
                className="absolute right-[40px] top-1/2 -translate-y-1/2 w-[30%]"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="my-[120px]">
        <div className="container mx-auto">
          <div>
            <h1 className="text-[36px] font-bold leading-[0.69]">
              인더섬 뉴스
            </h1>
            <div className="text-[18px] mt-[16px]">
              <p>인더섬에서는 과연 어떠한 일이 일어나고 있고 일어날까요?</p>
            </div>
          </div>
          <div
            className={classnames(
              'mt-[60px]',
              'grid grid-cols-1 gap-y-[30px]',
              'xl:grid-cols-2 xl:gap-[40px] xl:gap-y-[94px]',
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
      <MainBannerSlide />
      <div className="font-Pretendard mb-[120px]">
        <Main />
      </div>
      <Footer />
    </>
  );
};
