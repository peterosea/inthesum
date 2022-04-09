import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import WheelControls from '../../components/Slider/WheelControls';
// components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeaderPage from '../../components/HeaderPage';
import CharacterItem from '../../components/Item/Character';
// data
import { character, BgImg } from './data';

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
  return <></>;
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
