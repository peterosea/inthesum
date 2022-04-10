import React from 'react';
import 'keen-slider/keen-slider.min.css';
import classnames from 'classnames';

// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import CharacterBanner from '../../components/CharacterBanner';
import ScrollTop from '../../components/ScrollTop';

// data
import { BtsBgImg } from '../data';

const Main = () => {
  return (
    <>
      <section className="xl:mt-[80px]">
        <div className="container mx-auto">
          <div className="mx-full xl:mx-auto">
            <CharacterBanner />
          </div>
        </div>
      </section>
      <section className={classnames('mt-[40px]', 'xl:mt-[80px]')}>
        <div className="container mx-auto">
          <article className="prose lg:prose-xl max-w-none">
            <p>
              훗~이번에는 인더섬의 과일로 칵테일을 만들 수 있는 칵테일바를
              오픈했어요.
              <br />
              무알콜 칵테일도 있으니 걱정은 놉!
            </p>
            <p>
              Happy New Year Everyone!! Hope you have a wonderful new year //{' '}
              <br />
              Also happy new year to yoongi, hope he’s recovering well. Stay
              happy and healthy ❤️
            </p>
            <div className="grid xl:grid-cols-2 gap-x-[20px] gap-y-[30px] my-[60px]">
              <div className="pt-[100%] relative rounded-[12px] overflow-hidden">
                <img
                  src="https://picsum.photos/1200/1200.webp?ramdom=1"
                  alt=""
                  className="absolute w-full h-full m-0 top-0 left-0 right-0 bottom-0 !mt-0"
                />
              </div>
              <div className="pt-[100%] relative rounded-[12px] overflow-hidden">
                <img
                  src="https://picsum.photos/1200/1200.webp?ramdom=2"
                  alt=""
                  className="absolute w-full h-full m-0 top-0 left-0 right-0 bottom-0 !mt-0"
                />
              </div>
            </div>
          </article>
          <div
            className={classnames(
              'mt-[55px] mb-[63px]',
              'xl:mt-[120px] xl:mb-[160px]',
            )}
          >
            <ScrollTop />
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
      <HeaderPage
        bgImg={BtsBgImg}
        title="with BTS"
        content={() => <>BTS가 개발에 직접 참여한 인더섬 업데이트 소식</>}
      />
      <div className="font-Pretendard mb-[55px] xl:mb-[120px]">
        <Main />
      </div>
      <Footer />
    </>
  );
};
