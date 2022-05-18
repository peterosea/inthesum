import React from 'react';
import classnames from 'classnames';
import IconInstagram from './icon/instagram';

const CharacterBanner = () => {
  return (
    <div className="xl:rounded-[12px] relative px-cpx xl:px-[50px] py-[25px] bg-[#f4f6fa] grid grid-cols-[1fr,auto] grid-rows-[auto,auto]">
      <div className="self-center order-1 #lg:col-span-2">
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
      <div className="flex items-center gap-x-[13px] mt-[19px] order-3">
        <div className="w-[36px]">
          <IconInstagram />
        </div>
        <span
          className={classnames(
            'text-[#9ba0a8] text-[14px] font-extrabold font-TmoneyRoundWind tracking-[-0.7px] xl:tracking-[-0.9px]',
            'xl:text-[18px]',
          )}
        >
          인스타그램에서도
          <br className="xl:hidden" /> 확인하세요
        </span>
      </div>
      <div className="order-4 lg:order-2 lg:row-span-2 self-end #lg:mt-[20px]">
        <img
          className={classnames('h-[120px] w-auto', 'xl:h-[180px]')}
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
