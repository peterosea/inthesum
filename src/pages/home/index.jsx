import classnames from 'classnames';

// components

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../components/home/home.scss';
import CharacterSlide from '../../components/home/CharacterSlide';
import MainBannerSlide from '../../components/home/MainBannerSlide';
import Card from '../../components/Card';
import HeaderSection from '../../components/HeaderSection';
import FloatArea from '../../components/FloatArea';
import { ClothesBanner } from './section4';
import Section3 from './section3';

// data

import { card } from '../data';

const Main = () => {
  return (
    <>
      <section className="mt-[38px] mb-[60px] md:mt-[81px] md:mb-[90px] xl:my-[90px]">
        <div className="border-b border-[#ddd]">
          <div className="xl:container #sm:container #sm:px-0 #xl:pl-[60px] mx-auto">
            <div className="grid md:grid-cols-[270px,auto]">
              <div className="md:min-h-[490px] relative">
                <div className="flex md:flex-col md:justify-between #sm:container #md:mx-auto">
                  <div className="max-w-[160px]">
                    <img
                      src="/img/img-withbts-title.svg"
                      alt="with BTS"
                      className="h-[55px] md:h-[93px] w-auto"
                    />
                    <div className="my-[30px]">
                      <p>BTS가 개발에 직접 참여한 인더섬 업데이트 소식</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="#md:self-center #md:absolute #md:top-[28px] #md:right-[var(--container-px)] w-[16px] md:w-[31px]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31.354"
                      height="26.707"
                      viewBox="0 0 31.354 26.707"
                      className="stroke-black"
                    >
                      <path
                        data-name="선 3"
                        transform="translate(0 13.354)"
                        d="M0 0h30"
                      />
                      <path
                        data-name="선 4"
                        transform="translate(18 .354)"
                        d="m0 0 13 13"
                      />
                      <path
                        data-name="선 5"
                        transform="translate(18 13.354)"
                        d="M0 13 13 0"
                      />
                    </svg>
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
      <Section3 />
      <section className="mb-[64px] xl:mb-[120px]">
        <div className="xl:container #sm:container #sm:px-cpx #xl:px-[60px] mx-auto">
          <div className="grid xl:grid-cols-2 gap-x-[20px] md:gap-y-[20px] #md:mx-full overflow-hidden">
            <ClothesBanner />
          </div>
        </div>
      </section>
      <section className="my-[64px] xl:my-[120px]">
        <div className="xl:container #sm:container #sm:px-cpx #xl:px-[60px] mx-auto">
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
              'grid grid-cols-1 gap-y-[30px]',
              'md:gap-[40px] md:gap-y-[60px] md:mt-[60px]',
              'xl:grid-cols-2',
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
