// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper';
import { useKeenSlider } from 'keen-slider/react';
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

export default CharacterSlide;
