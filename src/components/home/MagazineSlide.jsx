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
    if (e.deltaX != '-0') {
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
      breakpoints: {
        '(min-width: 1280px)': {
          slides: {
            origin: 'center',
            perView: 'auto',
            spacing: 100,
          },
        },
      },
      slides: {
        perView: 'auto',
        spacing: 30,
      },
    },
    [WheelControls],
  );

  return (
    <div ref={sliderRef} className="keen-slider">
      {[
        {
          vol: 'Vol.3',
          imageUrl: '/public/img/img-magazine1@3x.png',
          name: 'Fishing Life',
          date: '2022.03.02',
          spec: () => (
            <>
              <p>커버스토리: 인더섬에서 바다낚시하기</p>
              <p>주요기사: 칵테일 만들기</p>
            </>
          ),
        },
        {
          vol: 'Vol.2',
          imageUrl: '/public/img/img-magazine2@3x.png',
          name: 'Healing Camp',
          date: '2022.02.23',
          spec: () => (
            <>
              <p>커버스토리: 베이스캠프 건설</p>
              <p>주요기사: 요리 레시피</p>
            </>
          ),
        },
        {
          vol: 'Vol.1',
          imageUrl: '/public/img/img-magazine3@3x.png',
          name: 'Grand Open',
          date: '2022.02.16',
          spec: () => (
            <>
              <p>커버스토리: 전세계 전격 오픈</p>
              <p>주요기사: 튜토리얼</p>
            </>
          ),
        },
      ].map(({ vol, name, date, spec, imageUrl }, index) => {
        return (
          <div key={`index-${index}`} className="keen-slider__slide">
            <div className="shadow-[5px_5px_40px_rgb(0,0,0,0.25)]">
              <img src={imageUrl} alt="" />
            </div>
            <div className="mt-[36px] leading-none">
              <div className="text-[18px] text-[#bc83ff] font-extrabold">
                {vol}
              </div>
              <div className="mt-[8px] text-[36px] font-extrabold">{name}</div>
              <div className="mt-[10px] font-bold text-black text-[14px]">
                {date}
              </div>
              <div className="mt-[20px]">{spec()}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
