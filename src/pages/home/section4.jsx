import React, { useState } from 'react';
import classnames from 'classnames';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const ResizePlugin = (slider) => {
  const observer = new ResizeObserver(function () {
    slider.update();
  });

  slider.on('created', () => {
    observer.observe(slider.container);
  });
  slider.on('destroyed', () => {
    observer.unobserve(slider.container);
  });
};

export const PDBanner = () => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      created() {
        setLoaded(true);
      },
    },
    [ResizePlugin],
  );

  return (
    <div className="relative md:rounded-[12px] h-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full">
        {[...Array(2)].map((_, index) => (
          <a
            key={`index-${index}`}
            href="#"
            className={classnames(
              'keen-slider__slide',
              'relative flex py-[42px] px-[30px] bg-[#EDEDFD] items-center flex-wrap gap-y-[35px] justify-end',
              'md:justify-between md:grid md:grid-cols-[290px,170px] md:gap-x[40px] md:p-[50px]',
              'xl:rounded-[12px] xl:pl-[60px] xl:pr-[40px]',
            )}
          >
            <div className="#xl:w-full">
              <h4 className="text-[#2e0064] font-extrabold font-TmoneyRoundWind">
                개발 PD 노트
              </h4>
              <div className="mt-[8px] text-[22px] text-primary font-extrabold font-TmoneyRoundWind tracking-[-1.1px]">
                인더섬 with BTS에서
                <br />
                여러분께 전하고 싶은 이야기
              </div>
              <div className="text-[#39007c] mt-[20px] font-Pretendard  tracking-[-0.8px]">
                여러분과의 이야기를 만들어가고 싶습니다.
                <br />
                PD가 직접 들려주는 인더섬 이야기를 만나보세요!
              </div>
            </div>
            <img
              className="h-[150px] w-auto"
              src="/img/banner-pd-note-img@3x.png"
              alt=""
            />
          </a>
        ))}
      </div>
      {loaded && (
        <div className="absolute top-[18px] right-[18px] flex gap-x-[3px]">
          <button
            className="rotate-180"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          >
            <img src="/img/3716.svg" alt="" className="!w-auto" />
          </button>
          <button
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          >
            <img src="/img/3716.svg" alt="" className="!w-auto" />
          </button>
        </div>
      )}
    </div>
  );
};

export const ClothesBanner = () => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      created() {
        setLoaded(true);
      },
    },
    [ResizePlugin],
  );

  return (
    <div className="relative md:rounded-[12px] h-full overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-full">
        {[...Array(2)].map((_, index) => (
          <a
            key={`index-${index}`}
            href="#"
            className={classnames(
              'keen-slider__slide',
              'relative flex py-[42px] px-[30px] bg-[#FDF4FF] items-center flex-wrap gap-y-[35px] justify-end',
              'md:justify-between md:grid md:grid-cols-[290px,170px] md:gap-x[40px] md:p-[50px]',
              'xl:rounded-[12px] xl:pl-[60px] xl:pr-[40px]',
            )}
          >
            <div className="#xl:w-full">
              <h4 className="text-[#4d005d] font-extrabold font-TmoneyRoundWind">
                made by ARMY - BTS 의상실
              </h4>
              <div className="mt-[8px] text-[22px] text-[#7f0198] font-extrabold font-TmoneyRoundWind tracking-[-1.1px]">
                아미의 PICK!
                <br />
                멋진 의상들을 준비하고 있어요!
              </div>
              <div className="text-[#360041] mt-[20px] font-Pretendard tracking-[-0.8px]">
                멋진 의상들로 곧 찾아뵐꼐요.
              </div>
            </div>
            <div className="relative">
              <img
                src="/img/3706.png"
                srcSet="/img/3706@2x.png 2x,
                            /img/3706@3x.png 3x"
                alt=""
                className="w-auto h-[135px]"
              />
              <img
                src="/img/coming-soon.png"
                srcSet="/img/coming-soon@2x.png 2x,
                            /img/coming-soon@3x.png 3x"
                alt="comming soon"
                className="xl:h-[38px] w-auto absolute bottom-full right-0"
              />
            </div>
          </a>
        ))}
      </div>
      {loaded && (
        <div className="absolute top-[18px] right-[18px] flex gap-x-[3px]">
          <button
            className="rotate-180"
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          >
            <img src="/img/3716.svg" alt="" className="!w-auto" />
          </button>
          <button
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          >
            <img src="/img/3716.svg" alt="" className="!w-auto" />
          </button>
        </div>
      )}
    </div>
  );
};
