import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useWindowSize } from 'usehooks-ts';
import classnames from 'classnames';

// components
import WheelControls from '../../components/Slider/WheelControls';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import HeaderSection from '../../components/HeaderSection';
import CharacterItem from '../../components/Item/Character';
import Card from '../../components/Card';
import FloatArea from '../../components/FloatArea';
// data
import { character, card, DevlogBgImg } from '../data';

function CharacterSlider() {
  const { width } = useWindowSize();
  const [sliderRef] = useKeenSlider(
    {
      loop: false,
      rubberband: false,
      slides: {
        perView: 'auto',
        spacing: 40,
        origin: 'center',
      },
      breakpoints: {
        '(min-width: 640px)': {
          slides: {
            perView: 'auto',
            spacing: 40,
          },
        },
      },
    },
    [WheelControls],
  );

  const slideWidth = width >= 1280 ? 270 : 320;

  return (
    <div ref={sliderRef} className="keen-slider">
      {character.map((props, index) => {
        return (
          <div
            key={`index-${index}`}
            className="keen-slider__slide"
            style={{ maxWidth: `${slideWidth}px`, minWidth: `${slideWidth}px` }}
          >
            <CharacterItem {...props} />
          </div>
        );
      })}
    </div>
  );
}

const Main = () => {
  return (
    <>
      <section className="my-[80px]">
        <div className="container mx-auto">
          <HeaderSection
            title={() => (
              <img
                className="w-[100px] xl:w-[160px]"
                src="/img/img-withbts-title.png"
                srcSet="/img/img-withbts-title@2x.png 2x,
                    /img/img-withbts-title@3x.png 3x"
              />
            )}
            content={() => <>BTS가 개발에 직접 참여한 인더섬 업데이트 소식</>}
            arrow={true}
          />
        </div>
        <div className="xl:container mx-auto mt-[61px] pl-cpx">
          <div className="mt-[61px]">
            <CharacterSlider />
          </div>
        </div>
      </section>
      <section className="mt-[42px] xl:mt-[160px]">
        <div className="container mx-auto">
          <HeaderSection
            title={() => <h1>개발PD 노트</h1>}
            content={() => <>BTS가 개발에 직접 참여한 인더섬 업데이트 소식</>}
            arrow={true}
          />
        </div>
        <div className="xl:container mx-auto">
          <div
            className={classnames(
              'mt-[60px] mb-[60px]',
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
      <HeaderPage
        bgImg={DevlogBgImg}
        title="인더섬 개발일지"
        content={() => <>BTS 멤버들이 처음부터 함께한 인더섬에서 만나요</>}
      />
      <div className="font-Pretendard xl:mb-[120px] overflow-x-hidden relative">
        <Main />
        <FloatArea />
      </div>
      <Footer />
    </>
  );
};
