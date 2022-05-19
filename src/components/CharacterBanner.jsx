import React from 'react';
import classnames from 'classnames';

const CharacterBanner = () => {
  return (
    <div className="sm:rounded-[12px] relative px-cpx xl:px-[50px] py-[25px] bg-[#f4f6fa] grid grid-cols-[1fr,auto]">
      <div className="self-center">
        <div className="inline-block relative pr-[20px]">
          <span
            className={classnames(
              'text-[30px] font-bold font-TmoneyRoundWind text-black break-all',
              'xl:text-[42px]',
            )}
          >
            with RM
          </span>
          <span className="w-[39px] absolute top-0 right-0 translate-x-1/2">
            <img
              src="/img/new@3x.png"
              srcSet="/img/new@2x.png 2x,
                  /img/new@3x.png 3x"
              alt="new"
            />
          </span>
        </div>
        <div
          className={classnames(
            'text-[#9ba0a8] text-[14px] font-Pretendard mt-[9px]',
            'xl:text-[20px] xl:mt-[15px]',
          )}
        >
          2022년 4월 13일 오후 5시 53분
        </div>
      </div>
      <div className="self-end #lg:mt-[20px] relative">
        <img
          className="h-[180px] absolute z-10 top-0 right-[76px]"
          src="/img/jung-kook.png"
          srcSet="/img/jung-kook@2x.png 2x,
                  /img/jung-kook@3x.png 3x"
          alt="JungKook"
        />
        <img
          className="h-[180px]"
          src="/img/rm2.png"
          srcSet="/img/rm2@2x.png 2x,
                  /img/rm2@3x.png 3x"
          alt="RM"
        />
      </div>
    </div>
  );
};

export default CharacterBanner;
