import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import WheelControls from '../../components/Slider/WheelControls';
// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import HeaderSection from '../../components/HeaderSection';
import CharacterItem from '../../components/Item/Character';
import Card from '../../components/Card';
// data
import { character, card, BgImg } from './data';

function CharacterSlider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: false,
      rubberband: false,
      slides: {
        perView: 'auto',
        spacing: 40,
      },
    },
    [WheelControls],
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {character.map((props, index) => {
        return (
          <div
            key={`index-${index}`}
            className="keen-slider__slide"
            style={{ maxWidth: '270px', minWidth: '270px' }}
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
              <div className="w-[160px]">
                <img
                  src="/public/img/img-withbts-title.png"
                  srcSet="/public/img/img-withbts-title@2x.png 2x,
                    /public/img/img-withbts-title@3x.png 3x"
                />
              </div>
            )}
            content={() => <>BTS가 개발에 직접 참여한 인더섬 업데이트 소식</>}
            arrow={true}
          />
          <div className="mt-[61px]">
            <CharacterSlider />
          </div>
        </div>
      </section>
      <section className="mt-[160px]">
        <div className="container mx-auto">
          <HeaderSection
            title={() => (
              <h1 className="text-[36px] font-TmoneyRoundWind font-bold leading-[0.69]">
                개발PD 노트
              </h1>
            )}
            content={() => <>BTS가 개발에 직접 참여한 인더섬 업데이트 소식</>}
            arrow={true}
          />
          <div className="grid grid-cols-2 gap-[99px] mt-[60px]">
            {card.map((e, index) => (
              <Card pin={true} data={e} key={`card-index-${index}`} />
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
        bgImg={BgImg}
        title="인더섬 개발일지"
        content={() => <>BTS 멤버들이 처음부터 함께한 인더섬에서 만나요</>}
      />
      <div className="font-Pretendard mb-[120px]">
        <Main />
      </div>
      <Footer />
    </>
  );
};
