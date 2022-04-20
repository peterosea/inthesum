import React from 'react';

const HealingLift = () => {
  return (
    <>
      <img
        src="/img/img-main.png"
        srcSet="/img/img-main@2x.png 2x,
                /img/img-main@3x.png 3x"
        alt="with BTS"
        className="absolute h-full w-auto max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="relative h-[450px] flex items-center justify-center flex-col text-white text-center">
        <img
          src="/img/bts_logo.png"
          srcSet="/img/bts_logo@2x.png 2x,
                  /img/bts_logo@3x.png 3x"
          alt="BTS Logo"
          className="w-[56px]"
        />
        <div className="uppercase font-TmoneyRoundWind font-extrabold text-[30px] mt-[21px]">
          Healing island life
        </div>
        <div className="mt-[7px] font-Pretendard">
          3D Puzzle Game with BTS character
          <br />
          and space decoration
        </div>
        <div className="mt-[25px]">
          <a href="#">
            <img
              src="/img/btn-googleplay.png"
              srcSet="/img/btn-googleplay@2x.png 2x,
                      /img/btn-googleplay@3x.png 3x"
              className="h-[40px]"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default HealingLift;
