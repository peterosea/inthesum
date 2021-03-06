// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useWindowSize } from 'usehooks-ts';
import WheelControls from '../../components/Slider/WheelControls';
import CharacterItem from '../../components/Item/Character';
import { character } from '../../pages/data';

function CharacterSlide() {
  const { width } = useWindowSize();
  const [sliderRef] = useKeenSlider(
    {
      loop: false,
      rubberband: false,
      slides: {
        perView: 'auto',
        spacing: 10,
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

  let slideWidth = 0;
  switch (true) {
    case width < 640:
      slideWidth = 270;
      break;
    case width < 1280:
      slideWidth = 320;
      break;
    default:
      slideWidth = 270;
      break;
  }

  return (
    <div ref={sliderRef} className="keen-slider">
      {character.map((props, index) => {
        return (
          <div
            key={`index-${index}`}
            className="keen-slider__slide  #sm:pl-cpx #sm:last:pr-cpx"
            style={{ maxWidth: `${slideWidth}px`, minWidth: `${slideWidth}px` }}
          >
            <CharacterItem {...props} />
          </div>
        );
      })}
    </div>
  );
}

export default CharacterSlide;
