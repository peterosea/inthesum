import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const WheelControls = (slider) => {
  let touchTimeout;
  let position;
  let wheelActive;

  function dispatch(e, name) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      }),
    );
  }

  function wheelStart(e) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, 'ksDragStart');
  }

  function wheel(e) {
    dispatch(e, 'ksDrag');
  }

  function wheelEnd(e) {
    dispatch(e, 'ksDragEnd');
  }

  function eventWheel(e) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on('created', () => {
    slider.container.addEventListener('wheel', eventWheel, {
      passive: false,
    });
  });
};

export default function MagazineSlide() {
  const [sliderRef] = useKeenSlider(
    {
      loop: false,
      rubberband: false,
      slides: {
        perView: 'auto',
        spacing: 60,
      },
    },
    [WheelControls],
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {['test', 'test', 'test', 'test'].map((a, index) => (
        <div
          key={`index-${index}`}
          className="keen-slider__slide"
          style={{ maxWidth: 360, minWidth: 360 }}
        >
          <div className="shadow-[5px_5px_40px_rgb(0,0,0,0.25)]">
            <img src="/public/img/img-magazine1@3x.png" alt="" />
          </div>
          <div className="mt-[36px] leading-none">
            <div className="text-[18px] text-[#bc83ff] font-extrabold">
              Vol.3
            </div>
            <div className="mt-[8px] text-[36px] font-extrabold">
              Fishing Life
            </div>
            <div className="mt-[10px] font-bold text-black text-[14px]">
              2022.03.02
            </div>
            <div className="mt-[20px]">
              <p>커버스토리: 인더섬에서 바다낚시하기</p>
              <p>주요기사: 칵테일 만들기</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
